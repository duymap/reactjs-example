import React, { Component } from 'react';
import Comment from './Comment';

class CommentBox extends React.Component {

    constructor() {
        super();
        this.state = {showComments: false};
    }

    getComments() {
        const commentList = [
            {id: 1, author: 'Duy Chung 1', body: 'Hello 1'},
            {id: 2, author: 'Duy Chung 2', body: 'Hello 2'}
        ];
        return commentList.map((item) => {
            return ( <Comment author={item.author} body={item.body} key={item.id} /> );
        });
    }

    _handleClick() {
        this.setState({showComments: !this.state.showComments});
    }

    render() {

        let commentNodes;
        let buttonText = 'Hide Comments';

        if (this.state.showComments) {
            commentNodes = <div className="comment-list">{this.getComments()}</div>;
            buttonText = 'Hide Comments';
        } else {
            buttonText = 'Show Comments';
        }

        return (
            <div className="comment-box">
                <h3>Comments</h3>
                <h4 className="comment-count">2 comments</h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
            
        );
    }
}

export default CommentBox;