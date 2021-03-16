import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Lists extends Component {
    state = { lists: [] }

    componentDidMount() {
        fetch('http://localhost:8080/lists')
            .then(res => res.json())
            .then((data) => {
                this.setState({ lists: data })
            })
            .catch(console.log)
    }

    render(){
        return (
            <div>
                <h1 class="display-6 mb-5">Task Lists</h1>
                <div class="list-group">
                    {this.state.lists.map((list) => (
                        <Link to={`/lists/${list.id}`} class="list-group-item list-group-item-action">{list.name}</Link>
                    ))}
                </div>
            </div>
        )
    }
};

export default Lists