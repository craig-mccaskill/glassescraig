import * as axios from 'axios';

// import { API } from './config'; Pass in API to then use at axios request

const getItems = async function() {
    try {
        const response = await axios('/api/items.json');
        const items = response.data;
        console.log(items);
        return items;
    } catch (error) {
        console.error(error);
        return [];
    }

};

export const data = {
    getItems,
}