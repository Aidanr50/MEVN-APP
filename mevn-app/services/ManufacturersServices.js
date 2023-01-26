import axios from "axios";

const url = 'http://localhost:3000/api/manufacturers/'

class ManufacturersService {
    // Get Manufacturers
    static getManufacturers() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url)
                const data = res.data;
                resolve(
                    data.map(review => ({
                        ...review,
                        createdAt: new Date(review.createdAt)
                    }))
                )
            } catch(err) {
                reject(err)
            }
        })
    }
    // Create Manufacturer
    static insertManufacturer(blob) {
        return axios.post(url, blob) 
    } 



    // Delete Manufacturer
    static deleteManufacturer(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default ManufacturersService