import { URL } from '../configs/Endpoint'

const GetAllProducts = async () => {

    return fetch(`${URL}?featured=false`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}

export default GetAllProducts;