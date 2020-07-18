import React from 'react';
import { useRecoilValue } from 'recoil';
import PostTable from './PostTable';
import LoadingPost from './LoadingPost';

import CreatePost from '../CreatePost/CreatePost';
import PostModal from '../CreatePost/PostModal/PostModal';
import postState from '../../state';
import './PostList.scss';
export const PostList = () => {
    const postLists = useRecoilValue(postState.postListsState);
    const postLoading = useRecoilValue(postState.postLoadingState);
    return(
        <div className={'Post__List'}>
            <CreatePost />
            { 
            postLoading ?
                <LoadingPost />:
                <PostTable posts={postLists}/>
            }
            <PostModal />
        </div>
    )
};
export default PostList;