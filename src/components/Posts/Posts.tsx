import React from 'react';
import {PostType} from '../../models';
import Post from '../Post/Post';
const constPosts : PostType[] = Array(5).fill(
    {
        title:"A Title",
        author:"cd",
        content:"aa",
        time:"AS",
        last_edited:"BD"
    }
);
const Posts : React.FC =()=>{
    return(
        <div>
            {constPosts.map( (post,idx)=>{
                return(
                    <Post post={post} key={idx}/>
                )
            })}
        </div>
    )
};

export default Posts;