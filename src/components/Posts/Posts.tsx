import React, { useState, useEffect } from 'react';
import { PostsType } from '../../models';
import PostItem from '../PostItem/PostItem';
import Paginator from '../Paginator/Paginator';
import {fetchPosts} from '../../contexts/GlobalFunctions/FetchingFunctions';
const initialPosts: PostsType = {
    count: 1,
    previous: "",
    next: "",
    results: []
};

const Posts: React.FC = () => {
    const [postsData, setPostsData] = useState(initialPosts);
    const [page, setPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPosts(page,(posts:PostsType)=>{
            setPostsData(posts);
            if (posts.results.length > postsPerPage) {
                setPostsPerPage(posts.results.length);
            }
            setTotalPages(Math.ceil(posts.count / postsPerPage));
        },(error:Error)=>{
            console.log(error)
            setTotalPages(0);
            setPostsPerPage(1);
            setPostsData(initialPosts);
        });
    }, [page, postsPerPage]);

    return (
        <div>
            {postsData.results.map((post, idx) => {
                return (
                    <PostItem post={post} key={idx} />
                )
            })}
            <Paginator id="posts" page={page} setPage={setPage} totalPages={totalPages}></Paginator>
        </div>
    )
};

export default Posts;