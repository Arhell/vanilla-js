import {Avatar, Button, CircularProgress, IconButton, TextareaAutosize} from "@material-ui/core";
import UserAvatar from "../assets/img/logo192.png";
import classNames from "classnames";
import {useHomeStyles} from "../pages/Home";

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>
}

function ImageOutlinedIcon() {
  return null;
}

function EmojiIcon(props: { style: { fontSize: number } }) {
  return null;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps):React.ReactElement => {
  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt='alt'
          src={UserAvatar}
        />
        <TextareaAutosize
          className={classes.addFormTextarea}
          placeholder="Text"
        />
      </div>
      <div className={classes.addFormBottom}>
        <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
          <IconButton color="primary">
            {/* @ts-ignore */}
            <ImageOutlinedIcon style={{fontSize: 26}} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{fontSize: 26}} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          <span>280</span>
          <div className={classes.addFormCircleProgress}>
            <CircularProgress variant="determinate" size={20} thickness={4} value={18} />
            <CircularProgress
              style={{color: 'rgba(0,0,0,.1)'}}
              variant="determinate"
              size={20}
              thickness={4}
              value={100}
            />
          </div>
          <Button color="primary" variant="contained">
            Tweet
          </Button>
        </div>
      </div>
    </div>
  )
}