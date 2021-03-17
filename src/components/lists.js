import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Lists extends Component {
    state = {
        lists: []
    }

    componentDidMount() {
        this.loadLists()
    }

    newListEnter(event) {
        if (event.code === 'Enter' && event.target.value !== '') {
            this.saveNewList(event.target.value);
        }
    }

    saveNewList(name) {
        fetch('http://localhost:8080/lists', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({ name: name })
        })
        .then(() => this.loadLists())
        .catch(console.log)
    }

    loadLists() {
        fetch('http://localhost:8080/lists')
            .then(res => res.json())
            .then((data) => {
                this.listName.value = '';
                this.setState({ lists: data });
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

                <input
                    type="email"
                    class="form-control form-control-lg mt-5"
                    onKeyPress={this.newListEnter.bind(this)}
                    placeholder="Enter new list"
                    ref={(el) => (this.listName = el)}
                />
            </div>
        )
    }
};

export default Lists
