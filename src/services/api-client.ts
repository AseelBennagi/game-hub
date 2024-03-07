import axios from "axios";



export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "14ca8c7b7a3d4dad9e8ab3971299135e"
    }
})