/// <reference types="mongoose" />
import { IPartner } from '../types';
declare class PartnerService {
    private _id;
    constructor(_id: string);
    create(params: Partial<IPartner>): Promise<import("mongoose").Document<unknown, any, IPartner> & IPartner & {
        _id: string;
    }>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IPartner> & IPartner & {
        _id: string;
    }) | null>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, IPartner> & IPartner & {
        _id: string;
    })[]>;
    findAllActive(): Promise<(import("mongoose").Document<unknown, any, IPartner> & IPartner & {
        _id: string;
    })[]>;
    deleteOne(): Promise<import("mongodb").DeleteResult>;
    updateOne(params: Partial<IPartner>): Promise<import("mongodb").UpdateResult>;
}
export default PartnerService;
//# sourceMappingURL=PartnerService.d.ts.map