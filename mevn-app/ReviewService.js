import axios from "axios";

const url = 'http://localhost:3000/api/reviews/'

class ReviewService {
    // Get Review
    static getReviews() {
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
    // Create Review
    static insertReview(blob) {
        return axios.post(url, blob) 
    } 



    // Delete Review
    static deleteReview(id) {
        return axios.delete(`${url}${id}`)
    }
}

export default ReviewService