import React from 'react';
import Post from './lists_and_keys/Post';

interface posts  {id: number, title: string, content: string}

function Blog({posts}: {posts: posts[]}) {
    const sidebar = (
        <ul>
            {posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = posts.map((post) =>
       <Post
           key={post.id}
           id={post.id}
           title={post.title}
           content={post.content}
       />
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export default Blog;