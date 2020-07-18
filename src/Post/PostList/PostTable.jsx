import React from 'react';
import Post from './Post';
import './PostTable.scss';
export const PostTable = ({ posts }) => {
    return(
            <div className={'Post__Table'}>
            {posts.map((row, index) => (
                <Post title={row.title} body={row.body} key={index}/>
              ))}
          </div>
    )
}
export default PostTable;