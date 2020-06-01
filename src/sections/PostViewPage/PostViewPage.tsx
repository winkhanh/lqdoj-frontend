import React from 'react';
import {useParams} from 'react-router-dom';

interface PostViewParam {
	id: string;
}

const PostViewPage : React.FC = ()=>{
    const {id}=useParams();
    console.log(id);
    console.log("OP");
    return (
        <div>
            Viewing post, id = {id}
        </div>
    )
};
export default PostViewPage;
