import React from 'react';
import {PostType} from '../../models';
interface PostProps{
    post:PostType
};

const Post : React.FC<PostProps> =({post}:PostProps)=>{
    console.log(post);
    return(
        <div>
            aaaaaa
        </div>
    )
};

export default Post;