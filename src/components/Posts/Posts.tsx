import React from 'react';
import {PostType} from '../../models';
import Post from '../Post/Post';
const constPosts : PostType[] =[
    {
        title:"abc",
        author:"cd",
        content:"aa",
        time:"AS",
        last_edited:"BD"
    },
    {
        title:"abc",
        author:"cd",
        content:"aa",
        time:"AS",
        last_edited:"BD"
    },
    {
        title:"abc",
        author:"cd",
        content:"aa",
        time:"AS",
        last_edited:"BD"
    }
];
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