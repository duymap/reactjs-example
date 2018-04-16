import React, {Component} from 'react';
import axios from 'axios';

class ComponentFetchData extends React.Component {
    constructor() {
        super();
        this.state = {persons: []};
    }

    componentWillMount() {
        this.init();
        console.log('fetch');
    }

    init() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

    render() {
        console.log('render');
        return (
            
            <div>
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default ComponentFetchData;