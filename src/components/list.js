import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getListById, createTask } from "../clients/api";

class List  extends Component {

    state = {
        currentListId: 0,
        list: {
            tasks: []
        }
    }

    constructor(props) {
        super(props);

        this.state.currentListId = this.props.match.params.id;

        this.createTaskHandler = this.createTaskHandler.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    createTaskHandler(event) {
        if (event.code === 'Enter' && event.target.value !== '') {
            this.saveNewTask(event.target.value);
        }
    }

    saveNewTask(name) {
        createTask({
            name: name,
            list_id: this.state.currentListId
        }).then(this.loadData)
    }

    loadData() {
        getListById(this.state.currentListId)
            .then((data) => {
                this.taskName.value = '';
                this.setState({ list: data })
            })
    }

    render() {
        return (
            <>
                <h1 class="display-6">
                    {this.state.list.name}
                    <Link to="/" class="btn btn-sm float-end btn-primary">Back</Link>
                </h1>

                <div class="list-group mt-5">
                    {this.state.list.tasks.map((task) => (
                        <div class="list-group-item">
                            <input type="checkbox" class=""/>
                            <span class="ps-3">{task.name}</span>
                        </div>
                    ))}
                </div>

                <input
                    type="text"
                    class="form-control form-control-lg mt-5"
                    onKeyPress={this.createTaskHandler}
                    placeholder="Enter new task"
                    ref={(el) => (this.taskName = el)}
                />
            </>
        )
    }
}

export default withRouter(List)