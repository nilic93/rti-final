export const DB = {
    host: process.env.POSTGRESQL_HOST,
    // @ts-ignore
    port: +process.env.POSTGRESQL_PORT,
    database: process.env.DB_NAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD
};

export const connection: string = `postgres://${DB.user}:${DB.password}@${DB.host}:${DB.port}/${DB.database}`;


