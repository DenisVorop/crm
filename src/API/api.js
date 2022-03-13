import { useEffect } from "react";
import axios from "axios";

const API = () => {
    useEffect(() => {
        axios.get('/users').then(({ data }) => {
            console.log(data);
            console.log(data[0]);
        })

        axios.get('/clinics').then(({ data }) => {
            console.log(data);
            console.log(data[0]);
        })
    }, [])

    return <div></div>
}

export default API;
