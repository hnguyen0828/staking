module.exports = {
    HOST: "localhost",
    USER: "hscdev",
    PASSWORD: "hscdev",
    PORT: 5432,
    DB: "validators",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};