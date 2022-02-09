/// <reference types="mongoose" />
import { IGameRound } from "../types";
declare class GameRoundService {
    _id: string;
    eventId: string;
    gameOdd: string;
    createdAt: string;
    updatedAt: string;
    eventTypes: never[];
    eventRanges: never[];
    partnerName: string;
    algorithmUsed: string;
    partnerId: string;
    numberOfBetPlaced: number;
    constructor(_id?: string, partnerId?: string);
    create(params: Partial<IGameRound>): Promise<import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    last(): Promise<import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }>;
}
export default GameRoundService;
//# sourceMappingURL=GameRound.d.ts.map