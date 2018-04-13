import React, { Component } from 'react';

class CommentForm extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log(this._author.value);
        console.log(this._content.value);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder="Author" name="author" ref={(input) => {this._author = input}}/>
                <br />
                <br />
                <textarea placeholder="Content" name="content" ref={(input) => {this._content = input}}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default CommentForm;