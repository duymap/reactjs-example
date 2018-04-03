import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {

    // getComments() {
    //     const commentList = [
    //         {id: 1, author: 'Duy Chung 1', body: 'Hello 1'},
    //         {id: 2, author: 'Duy Chung 2', body: 'Hello 2'}
    //     ];
    //     return commentList.map((item) => {
    //         return ( <Comment author={item.author} body={item.body} key={item.id} /> );
    //     });
    // }

    render() {
        return (
            <div className="comment-box">
                <h3>Comments</h3>
                <h4 className="comment-count">2 comments</h4>
                <div className="comment-list">
                    <Comment author="Duy Chung 1" body="Hello 1" />
                    <Comment author="Duy Chung 2" body="Hello 2" />
                </div>
            </div>
            
        );
    }
}

export default CommentBox;