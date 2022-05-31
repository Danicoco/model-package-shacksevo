import { IChat } from "../../types";
import { Chat } from '../models';

class ChatService {
    private _id: string;
    private userId: string;

    constructor(_id = '', userId = '') {
        this._id = _id;
        this.userId = userId;
    }

    public async create(params: Partial<IChat>) {
        try {
            const chat = new Chat({ ...params });
            await chat.save();
            return chat;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const chat = await Chat
            .findOne()
            .where(this._id ? '_id' : 'userId')
            .equals(this._id ? this._id : this.userId)
            .catch((e: any) => { throw new Error(e) });
        return chat;
    }

    public async findAll() {
        const chats = await Chat
            .find()
            .catch((e: any) => { throw new Error(e) });
        return chats;
    }

    public async updateOne(params: Partial<IChat>) {
        const chat = await Chat
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return chat;
    }
}

export default ChatService;
