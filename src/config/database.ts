import { connect, connection } from 'mongoose';


export const databaseConnection = async (url: string) => {
    if (connection.readyState === 0) {
        await connect(url);
    }
}
