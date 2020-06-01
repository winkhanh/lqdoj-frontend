import React from 'react';
import {RouteComponentProps} from 'react-router-dom';

interface PostViewParam {
	id: string;
}

const PostViewPage: React.FC<RouteComponentProps<PostViewParam>> = (props: RouteComponentProps<PostViewParam>)=>{
    return (
        <div>
            Viewing post, id = {props.match.params.id}
        </div>
    )
};
export default PostViewPage;