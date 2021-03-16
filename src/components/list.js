import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class List  extends Component {

    state = { list: {} }

    componentDidMount() {
        const id = this.props.match.params.id;

        fetch(`http://localhost:8080/lists/${id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ list: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div>
                <h1 class="display-6">{this.state.list.name}</h1>
                <Link to="/">Back</Link>
            </div>
        )
    }
}

export default withRouter(List)