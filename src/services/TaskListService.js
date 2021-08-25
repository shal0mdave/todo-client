import { URL } from '../configs/API'

async function PostTaskData(payload) {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": payload.title,
            "done": false
        }),
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

async function DeleteTaskData(id) {
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

async function UpdateTaskData(payload) {
    fetch(`${URL}/${payload.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": payload.title,
            "done": payload.done
        }),
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
}

export {
    PostTaskData,
    DeleteTaskData,
    UpdateTaskData
};