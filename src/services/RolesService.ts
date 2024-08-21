import axios, { AxiosResponse } from "axios";

export const getRoles = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/roles");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get roles');
    }
}