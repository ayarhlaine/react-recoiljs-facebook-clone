import React, {useEffect} from 'react';
import { useSetRecoilState } from 'recoil';
import Nav from './Nav/Nav';
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
    },[setPostLists,setPostLoadingState]);
  return (
    <div className="App">
      <Nav />
      <PostList/>
    </div>
  );
}

export default App;
