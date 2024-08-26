import axios, { AxiosResponse } from "axios";
import Config from "../config";

export const getDatabases = async (): Promise<string[]> => {
    try {
        const response: AxiosResponse = await axios.get(`${Config.API_URL}/api/test`);

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get databases');
    }
}