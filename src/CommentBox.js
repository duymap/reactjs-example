import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {
    render() {
        return (
            <div className="comment-box">
                <h3>Comments</h3>
                <h4 className="comment-count">2 comments</h4>
                <div className="comment-list">
                    <Comment author="DuyChung1" body="Hello 1"/>
                    <Comment author="DuyChung2" body="Hello 2"/>
                </div>
            </div>
            
        );
    }
}

export default CommentBox;