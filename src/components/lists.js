import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { createList, getLists, deleteList } from '../clients/api';

class Lists extends Component {
    state = {
        lists: []
    }

    constructor(props) {
        super(props);
        this.loadData = this.loadData.bind(this);
        this.deleteListHandler = this.deleteListHandler.bind(this);
    }

    componentDidMount() { this.loadData() }

    newListHandler(event) {
        if (event.code === 'Enter' && event.target.value !== '') {
            createList({
                name: event.target.value
            }).then(this.loadData);
        }
    }

    deleteListHandler(event) {
        event.preventDefault();
        deleteList(event.target.id).then(this.loadData)
    }

    loadData() {
        getLists().then((data) => {
            this.listName.value = '';
            this.setState({ lists: data });
        })
    }

    render(){
        return (
            <div>
                <h1 class="display-6 mb-5">Task Lists</h1>
                <div class="list-group">
                    {this.state.lists.map((list) => (
                        <>
                            <Link to={`/lists/${list.id}`} class="list-group-item list-group-item-action">
                                {list.name}
                                <button class="btn btn-xs btn-danger float-end align-middle" id={list.id} onClick={this.deleteListHandler}>Delete</button>
                            </Link>
                        </>
                    ))}
                </div>

                <input
                    type="text"
                    class="form-control form-control-lg mt-5"
                    onKeyPress={this.newListHandler.bind(this)}
                    placeholder="Enter new list"
                    ref={(el) => (this.listName = el)}
                />
            </div>
        )
    }
};

export default Lists
