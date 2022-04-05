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
    create(params: Partial<IGameRound>): Promise<any>;
    bulkCreate(params: Partial<IGameRound>[]): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    findAllAdmin(): Promise<any>;
    findByYear(): Promise<any>;
    updateOne(params: Partial<IGameRound>): Promise<any>;
    last(): Promise<any>;
    findOneFirst(): Promise<any>;
    findByIsPlayed(params: boolean): Promise<any>;
    deleteAll(): Promise<boolean>;
    deleteByPartnerId(): Promise<boolean>;
}
export default GameRoundService;
//# sourceMappingURL=GameRound.d.ts.map