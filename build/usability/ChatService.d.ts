/// <reference types="mongoose" />
import { IChat } from "../../types";
declare class ChatService {
    private _id;
    private userId;
    constructor(_id?: string, userId?: string);
    create(params: Partial<IChat>): Promise<import("mongoose").Document<unknown, any, IChat> & IChat & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IChat>): Promise<(import("mongoose").Document<unknown, any, IChat> & IChat & {
        _id: string;
    }) | null>;
}
export default ChatService;
//# sourceMappingURL=ChatService.d.ts.map