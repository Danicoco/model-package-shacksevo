import { connect } from 'mongoose';


const databaseConnection = (url: string) => {
    connect(url);
}

export default databaseConnection;