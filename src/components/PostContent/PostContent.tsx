import React, { useContext, useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { FetchContext } from '../../Global/GlobalStates/GlobalStates';
import { fetchSinglePost, LoadState } from '../../Global/GlobalFunctions/FetchingActions';
import { ResponseDataType, PostType } from '../../models';
import HtmlContent from '../../components/HtmlContent/HtmlContent';
import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';

const initialPost: PostType = {
    id: 0,
    title: "",
    content: "",
    author: "",
    time: "",
    last_edited: ""
}

const PostContent: React.FC = () => {
    const { id } = useParams();
    const { apiFetcher } = useContext(FetchContext);
    const [post, setPost] = useState(initialPost);
    const [loadState, setLoadState] = useState(LoadState.LOADING);

    useEffect(() => {
        if (loadState === LoadState.LOADING) {
            fetchSinglePost(apiFetcher, id, (post: ResponseDataType<PostType>) => {
                setPost(post.results);
                setLoadState(LoadState.NOTLOADING);
            }, (error: Error) => {
                console.log(error);
                setPost(initialPost);
                setLoadState(LoadState.NOTLOADING);
                //tid = setTimeout(()=>setLoadState(LoadState.NOTLOADED)); //Uncomment if want to have infinite fetching
            });
        }
    }, [id, loadState, apiFetcher]);

    if (loadState === LoadState.LOADING) {
        return (<LoadingPlaceholder />);
    } else {
        console.log(post);
        return (
            <>
                <h1>{post.title}</h1>
                <HtmlContent content={post.content} />
            </>
        )
    }
};
export default PostContent;
