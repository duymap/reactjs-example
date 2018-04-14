import React, { Component } from 'react';

class CommentForm extends React.Component {

    constructor() {
        super();
        this.state = {title: ''};
    }

    updateTitle(event) {
        this.setState({title: event.target.value});
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.title);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input placeholder="Title" name="title" value={this.state.title} onChange={this.updateTitle.bind(this)}/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default CommentForm;