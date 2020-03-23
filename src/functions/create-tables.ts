import {APIGatewayEvent} from "aws-lambda";
import {connection} from "../config/DBconfig";

const postgres = require('postgres');


export const handler = async (event: APIGatewayEvent): Promise<any> => {

    try {
        const sql = postgres(connection);
        await sql`
           CREATE TABLE IF NOT EXISTS users(
                                id serial not null PRIMARY KEY, 
                                name varchar(20) not null,
                                surname varchar(20) not null, 
                                username varchar(20) not null,
                                password varchar(20) not null
                            );
        `;
        await sql`
           CREATE TABLE IF NOT EXISTS results(
                                id serial not null PRIMARY KEY, 
                                user_id integer REFERENCES users(id),
                                game_type varchar(10) not null, 
                                result numeric(20,2) not null
                            );
        `;
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify(err)
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify("Tables successfully created")
    }
};