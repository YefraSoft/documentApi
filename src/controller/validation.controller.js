import mysql from 'mysql2/promise';

export const ValidateUser = async (req,res) => {
    
    const conn ={
        host: process.env.BD_HOST || '127.0.0.1',
        user: _user,
        password: _pass,
        port: process.env.DB_PORT || 3306,
        database: 'documentcreator'
    }
    const conect = await mysql.createConnection(conn);
    if (conect.state === 'authenticated' ) {
        
    } else {
        
    }
}