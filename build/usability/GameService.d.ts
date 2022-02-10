/// <reference types="mongoose" />
import { IGame } from '../../types';
declare class GameService implements IGame {
    _id: string;
    name: string;
    accessUrl: string;
    demoUrl: string;
    documentationUrl: string;
    integrationCount: number;
    createdAt: string;
    updatedAt: string;
    constructor(_id?: string, name?: string);
    createGame(params: Partial<IGame>): Promise<import("mongoose").Document<unknown, any, IGame> & IGame & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IGame>): Promise<(import("mongoose").Document<unknown, any, IGame> & IGame & {
        _id: string;
    }) | null>;
    deleteOne(): Promise<import("mongodb").DeleteResult>;
}
export default GameService;
//# sourceMappingURL=GameService.d.ts.map