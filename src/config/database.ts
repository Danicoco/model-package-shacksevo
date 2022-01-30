import { connect } from 'mongoose';


const databaseConnection = async (url: string) => {
    await connect(url);
}

export default databaseConnection;