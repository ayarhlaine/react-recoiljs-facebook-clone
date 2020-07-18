import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {
    useRecoilState,
} from 'recoil';
import postState from '../../state';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
export const PostSuccessMessage = () => {
    const [showPostSuccessMessage, setShowPostSuccessMessage] = useRecoilState(postState.showPostSuccessMessageState);
    const handleClose = () => {
        setShowPostSuccessMessage(false);
    }
    return (
        <div>
            <Snackbar open={showPostSuccessMessage} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                Thanks you for joining us! This feature is not created yet, there will be soon.
                </Alert>
            </Snackbar>
        </div>
    )
}
export default PostSuccessMessage;