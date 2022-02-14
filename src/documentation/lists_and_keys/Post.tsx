import React from 'react';

function Post ({id, title, content}:{id: number, title: string, content: string}) {
    return (
        <div key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}

export default Post;