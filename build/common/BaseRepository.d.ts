/** @format */
import { ClientSession, Model } from "mongoose";
import { IPaginator } from "../../types";
declare class BaseRepository<T> {
    protected model: Model<any, {}, {}, {}, any, any>;
    private finderOptions;
    private composeFinder;
    constructor(model: Model<T>, finderOptions: Partial<T>);
    create(params: T, session?: ClientSession): Promise<T>;
    bulkCreate(params: Array<T>, session?: ClientSession): Promise<T[]>;
    update(param: Partial<T>, session?: ClientSession): Promise<T>;
    updateMany(param: Partial<T>, session?: ClientSession): Promise<import("mongodb").UpdateResult>;
    findOne(): Promise<T | null>;
    deleteOne(session?: ClientSession): Promise<T | null>;
    count(condition?: any): Promise<number>;
    findAllPaginated({ sort, limit, page, condition }: IPaginator): Promise<{
        data: T[];
        pagination: {
            to: number;
            from: number;
            totalPages: number;
            total: number;
            limit: number;
            currentPage: number;
        };
    }>;
}
export default BaseRepository;
//# sourceMappingURL=BaseRepository.d.ts.map