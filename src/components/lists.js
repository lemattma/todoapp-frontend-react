import React from 'react'

const Lists = ({ lists }) => {
    return (
    <div>
        <center><h1>Task Lists</h1></center>
        {lists.map((list) => (
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">{list.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">No tasks yet</h6>
                <p class="card-text">Add task +</p>
                </div>
            </div>
        ))}
    </div>
    )
};

export default Lists