import { URL } from '../configs/Endpoint'

const GetFeaturedProduct = async () => {

    return fetch(`${URL}?featured=true`, {
        method: 'GET',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
}

export default GetFeaturedProduct;