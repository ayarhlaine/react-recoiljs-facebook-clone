import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
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
    return(
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                <CardContent>
                    What is on your mind?
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
};

export default CreatePost;