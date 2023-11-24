import {createPool} from 'mysql2/promise';

export const conn = createPool({
    host: '127.0.0.1',
    user: '20164',
    password: 'TecMM',
    port: 3306,
    database: 'documentcreator'
});
