require("dotenv").config();

module.exports = Object.freeze({
    port: process.env.PORT,
    cryptoIv: process.env.ENCRYPTIONIV,
    mongoURI: process.env.DBURI,
    dbName: process.env.DBNAME,
    jwtSecret: process.env.JWT_SECRET,
    docs_path: process.env.DOCS_PATH,
    encdecKey: process.env.ENCDECKEY,
    login_url: `${process.env.DOMAIN_URL}${process.env.LOGIN_PORT}`,
    login_port: process.env.LOGIN_PORT,
});
