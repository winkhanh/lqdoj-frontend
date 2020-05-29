import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PostsType } from '../../models';
import PostItem from '../PostItem/PostItem';
import * as HttpStatus from 'http-status-codes';
import Paginator from '../Paginator/Paginator';

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
        async function getPosts() {
            const res = await axios("http://127.0.0.1:8000/announcements/?p=" + page);
            if (res.status === HttpStatus.OK) {
                setPostsData(res.data);
                if (res.data.results.length > postsPerPage) {
                    setPostsPerPage(res.data.results.length);
                }
                setTotalPages(Math.ceil(res.data.count / postsPerPage));
            } else {
                setTotalPages(0);
                setPostsPerPage(1);
                setPostsData(initialPosts);
            }

        }
        getPosts().catch(() => {
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