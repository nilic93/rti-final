export const DB = {
  host: process.env.POSTGRESQL_HOST,
  // @ts-ignore
  port: +process.env.POSTGRESQL_PORT,
  database: process.env.DB_NAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
};
