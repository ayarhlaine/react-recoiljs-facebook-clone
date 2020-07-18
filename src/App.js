import React, {useEffect} from 'react';
import { useSetRecoilState } from 'recoil';
import PostList from './Post/PostList/PostList';
import postState from './state';
import apiService from './apiService';
import './App.scss';
function App() {
  const setPostLists = useSetRecoilState(postState.postListsState);
  const setPostLoadingState = useSetRecoilState(postState.postLoadingState);
    useEffect(() => {
        setPostLoadingState(true);
        apiService.getAllPosts()
        .then(response => response.json())
        .then(posts => {
          setPostLoadingState(false);
          setPostLists(posts);
        });
    },[setPostLists]);
  return (
    <div className="App">
      <PostList/>
    </div>
  );
}

export default App;
