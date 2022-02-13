/// <reference types="mongoose" />
import { IGameAccess } from '../../types';
declare class GameAccessService {
    private partnerId;
    private _id;
    constructor(_id: string | null, partnerId: string | null);
    create(params: Partial<IGameAccess>): Promise<import("mongoose").Document<unknown, any, IGameAccess> & IGameAccess & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IGameAccess> & IGameAccess & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IGameAccess> & IGameAccess & {
        _id: string;
    })[]>;
    deleteOne(): Promise<(import("mongoose").Document<unknown, any, IGameAccess> & IGameAccess & {
        _id: string;
    }) | null>;
}
export default GameAccessService;
//# sourceMappingURL=GameAccessService.d.ts.map