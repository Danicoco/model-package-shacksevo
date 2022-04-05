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
    createGame(params: Partial<IGame>): Promise<any>;
    findOne(): Promise<any>;
    findAll(): Promise<any>;
    updateOne(params: Partial<IGame>): Promise<any>;
    deleteOne(): Promise<any>;
}
export default GameService;
//# sourceMappingURL=GameService.d.ts.map