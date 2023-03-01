const user = process.env.MEETME_DATABASE_USER;
const password = process.env.MEETME_DATABASE_PASSWORD;
const port = process.env.MONGODB_DOCKER_PORT;
const database = process.env.MONGODB_DATABSE;

export const databaseUri = `mongodb://${user}:${password}@localhost:${port}/${database}`;
