const obj = {
  name: 'Name',
  age: 27,
  job: 'Job'
}

const entries = [
  ['name', 'Name'],
  ['age', 27],
  ['job', 'Job']
]

console.log(Object.entries(obj))
console.log(Object.fromEntries(entries))

const map = new Map(entries)

console.log(map.get('job'))

map
  .set('newField', 50)
  .set(obj, 'Value')
  .set(NaN, 'NaN')

console.log(map.get(NaN))

map.delete('job')

console.log(map.has('job'))
console.log(map.size)
map.clear()
console.log(map.size)

for (let entry of map.entries()) {
  console.log(entry)
}

for (let [key, value] of map.entries()) {
  console.log(key, value)
}

for (let val of map.values()) {
  console.log(val)
}

for (let key of map.keys()) {
  console.log(key)
}

map.forEach((val, key, map) => {
  console.log(val, key)
})

const array = [...map]
console.log(array)

const array2 = Array.from(map)

console.log(array2)

const mapObj = Object.fromEntries(map.entries())
console.log(mapObj)

const users = [
  {name: '1'},
  {name: '2'},
  {name: '3'},
]

const visit = new Map()
visit
  .set(users[0], new Date())
  .set(users[1], new Date().getTime() + 1000 * 60)
  .set(users[2], new Date().getTime() + 5000 * 60)

function lastVisit(user) {
  return visit.get(user)
}

console.log(lastVisit(users[1]))