const buildURL = (path) => `${process.env.REACT_APP_API_URL}${path}`

const requestOptions = (method, body) => {
    return {
        method: method,
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(body)
    }
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
