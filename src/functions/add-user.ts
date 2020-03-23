import {connection} from "../config/DBconfig";

const postgres = require('postgres');

export const handler = async (event: any): Promise<any> => {

    try {
        const sql = postgres(connection);
        await sql`
        INSERT INTO users (name, surname, username, password)
                  VALUES ( ${event.name}, ${event.surname}, ${event.username}, ${event.password});`;
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }

    return {
        statusCode: 200,
        body: event
    }
};