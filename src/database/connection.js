import sql from "mssql";
import { DB_USER, DB_PASSWORD, DB_SERVER, DB_DATABASE} from "../config.js"

const dbSettings = {
    user: DB_USER,
    password: DB_PASSWORD,
    server: DB_SERVER,
    database: DB_DATABASE,
    options: {
        encrypt: false, // USE TRUE FOR AZURE OR OTHER CLOUD SERVICE.
        trustServerCertificate: true,  // change to true for local dev / self-signed certs
    }
};

export const getConnection = async () => {
    try {
        const pool = await sql.connect(dbSettings);
            return pool;
    } catch (error) {
        console.error(error);
    }
};

export { sql };