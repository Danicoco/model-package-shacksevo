/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { IRTP } from "../../types";
declare class RTPService {
    private model;
    private id;
    private gameType;
    private partnerId;
    constructor(id?: string, gameType?: string, partnerId?: string);
    create(params: IRTP): Promise<import("mongoose").Document<unknown, any, IRTP> & IRTP & Required<{
        _id: string;
    }>>;
    findOne(): Promise<(import("mongoose").Document<unknown, any, IRTP> & IRTP & Required<{
        _id: string;
    }>) | null>;
    updateOne(params: Partial<IRTP>): Promise<(import("mongoose").Document<unknown, any, IRTP> & IRTP & Required<{
        _id: string;
    }>) | null>;
}
export default RTPService;
//# sourceMappingURL=RtpService.d.ts.map