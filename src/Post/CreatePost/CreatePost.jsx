import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { 
    useSetRecoilState
} from 'recoil';
import postState from '../../state';
const useStyles = makeStyles({
    root: {
        marginBottom: 5,
    },
    media: {
      height: 140,
    },
  });

export const CreatePost = () => {
    const classes = useStyles();
    const setPostModalOpenState = useSetRecoilState(postState.postModalOpenState)
    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea onClick={() => setPostModalOpenState(true)}>
                <CardContent>
                   Hey! What is on your mind?
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default CreatePost;