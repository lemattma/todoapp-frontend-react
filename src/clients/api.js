const buildURL = (path) => `${process.env.REACT_APP_API_URL}${path}`
const jsonType = { 'Content-Type':'application/json' }
const requestOptions = (method, body) => {
    return {
        method: method,
        headers: jsonType,
        body: JSON.stringify(body)
    }
}
const deleteOptions = () => {
    return { method: 'DELETE', headers: jsonType }
}

export const getLists = () =>
    fetch(buildURL('/lists'))
        .catch(console.log)
        .then(res => res.json())

export const getListById = (listId) =>
    fetch(buildURL(`/lists/${listId}`))
        .catch(console.log)
        .then(res => res.json())

export const createList = (body) =>
    fetch(buildURL('/lists'), requestOptions('POST', body))
        .catch(console.log)

export const createTask = (body) =>
    fetch(buildURL('/tasks'), requestOptions('POST', body))
        .catch(console.log)

export const deleteList = (listId) =>
    fetch(buildURL(`/lists/${listId}`), deleteOptions())
        .catch(console.log)

export const deleteTask = (taskId) =>
    fetch(buildURL(`/tasks/${taskId}`), deleteOptions())
        .catch(console.log)
