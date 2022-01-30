import { connect } from 'mongoose';


export const databaseConnection = async (url: string) => {
    await connect(url);
}