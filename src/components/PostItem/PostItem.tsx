import React from 'react';
import { PostType } from '../../models';
import ShadowedBox from '../ShadowedBox/ShadowedBox';
import UnderlinedTitle from '../UnderlinedTitle/UnderlinedTitle';
import { Text } from '../Text/Text'
import './PostItem.scss';

interface PostProps {
    post: PostType
};

const PostItem: React.FC<PostProps> = ({ post }: PostProps) => {
    // console.log(post);
    return (
        <ShadowedBox>
            <UnderlinedTitle>
                {post.title}
            </UnderlinedTitle>
            <p>
                {post.content}
            </p>
            <span className="author">
                {Text("POST_AUTHOR_BY")}
                <a href="/">
                    {post.author}
                </a>
            </span>
        </ShadowedBox>
    )
};

export default PostItem;