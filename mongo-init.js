const adminUsername = process.env.MONGODB_USER;
const adminPassword = process.env.MONGODB_PASSWORD;

const dbUser = process.env.MEETME_DATABASE_USER;
const dbPassword = process.env.MEETME_DATABASE_PASSWORD;
const dbName = process.env.MONGODB_DATABASE;

db.auth(adminUsername, adminPassword);

db = new Mongo().getDB(dbName);

db.createUser({
  user: dbUser,
  pwd: dbPassword,
  roles: [
    {
      role: 'readWrite',
      db: dbName,
    },
  ],
});
