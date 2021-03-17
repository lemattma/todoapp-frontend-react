import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class List  extends Component {

    state = {
        list: {},
        tasks: []
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`http://localhost:8080/lists/${id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    list: data,
                    tasks: data.tasks
                })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1 class="display-6">
                    {this.state.list.name}
                    <Link to="/" class="btn btn-sm float-end btn-primary">Back</Link>
                </h1>
                <div class="list-group mt-5">
                    {this.state.tasks.map((task) => (
                        <Link to={`/lists/${task.id}`} class="list-group-item list-group-item-action">
                        <input type="checkbox" class=""/>
                        <span class="ps-3">{task.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default withRouter(List)