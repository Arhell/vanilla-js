import React, {Component} from 'react';
import styles from './App.scss';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      clicked: false,
      cars: [
        {name: 'Text1', year: 2010},
        {name: 'Text2', year: 2011},
        {name: 'Text3', year: 2012}
      ],
      pageTitle: 'React components',
      showCars: false
    };
  }

  toggleCarsHendler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({cars})
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }



  render() {
    console.log('render');
    const divStyle = {
      textAlign: 'center'
    };

    let cars = null;

    if(this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provied value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provied>

        <hr/>
        <button
          style={{marginTop: 20}}
          className={styles.appBtn}
          onClick={this.toggleCarsHendler}
        >Toggle</button>

        <button onClick={() => this.setState({clicked: true})}>
          Change clicked
        </button>

        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>

      </div>
    );
  }
}

export default App;
