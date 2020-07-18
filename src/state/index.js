import {
    atom,
} from 'recoil';
// post list
export const postListsState = atom({
    key: 'post/LIST_STATE', 
    default: [],
});

export const postLoadingState = atom({
    key: 'post/loading', 
    default: false,
});

const postState = {
    postListsState,
    postLoadingState
};
export default postState;