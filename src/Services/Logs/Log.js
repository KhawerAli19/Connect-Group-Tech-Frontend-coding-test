import axios from "axios";

export const getAll = async (params) => {
    try {
        let { data } = await axios.get(`attendance`);
        return data;
    } catch (error) {
        console.log(error);
        throw error?.response?.data;
    }
};








