import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

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
      }

    componentDidMount() {
        this.loadListAndTasks();
    }

    createTaskHandler(event) {
        if (event.code === 'Enter' && event.target.value !== '') {
            this.saveNewTask(event.target.value);
        }
    }

    saveNewTask(name) {
        fetch(`${process.env.REACT_APP_API_URL}/tasks`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name: name,
                list_id: this.state.currentListId
            })
        })
        .then(() => this.loadListAndTasks())
        .catch(console.log)
    }

    loadListAndTasks() {
        fetch(`${process.env.REACT_APP_API_URL}/lists/${this.state.currentListId}`)
            .then(res => res.json())
            .then((data) => {
                this.taskName.value = '';
                this.setState({ list: data })
            })
            .catch(console.log)
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