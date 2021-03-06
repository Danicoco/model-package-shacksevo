/// <reference types="mongoose" />
import { IGameRound } from "../../types";
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
    year: string;
    constructor(_id?: string, partnerId?: string, year?: string);
    create(params: Partial<IGameRound>): Promise<import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }>;
    bulkCreate(params: Partial<IGameRound>[]): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    findAll(limit: number): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    findAllAdmin(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    findByYear(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    updateOne(params: Partial<IGameRound>): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    last(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    })[]>;
    findOneFirst(): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    findByIsPlayed(params: boolean): Promise<(import("mongoose").Document<unknown, any, IGameRound> & IGameRound & {
        _id: string;
    }) | null>;
    deleteAll(): Promise<boolean>;
    deleteByPartnerId(): Promise<boolean>;
}
export default GameRoundService;
//# sourceMappingURL=GameRound.d.ts.map