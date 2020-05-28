import React from 'react';
import {PostType} from '../../models';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
interface PostProps{
    post:PostType
};

const Post : React.FC<PostProps> =({post}:PostProps)=>{
    console.log(post);
    return(
        <ShadowedBox>
            <UnderlinedTitle>
                {post.title}
            </UnderlinedTitle>
            Content
        </ShadowedBox>
    )
};

export default Post;