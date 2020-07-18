import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {
    useRecoilState
} from 'recoil';
import postState from '../../../state';
import './PostModal.scss';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
      position: 'absolute',
      minWidth: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
export const PostModal = () => {
    const classes = useStyles();
    const [ postModalOpen, setPostModalOpen] = useRecoilState(postState.postModalOpenState);
    const handleClose = () => {
        setPostModalOpen(false);
    }
    return(
        <Modal
        className={classes.modal}
        open={postModalOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.paper}>
            <h3 className={'Create__Post__Text'}>Create Post</h3>
            <hr/>
            <div>
                <textarea name="post_body" id="" cols="30" rows="10"></textarea>
            </div>
            <Button variant="contained" color="primary" className={'Post__Button'}>
                POST
            </Button>
        </div>
      </Modal>
    )
}
export default PostModal;