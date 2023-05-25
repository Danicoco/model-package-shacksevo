import { Game } from '../models';
import { IGame, IPaginator } from '../../types';
import { ObjectId } from 'mongoose';
import Pagionation from './Pagination';

class GameService {
    _id = "";

    name = "";

    code = '';

    demoUrl = "";

    partnerId?: ObjectId;

    accessUrl = "";

    createdAt = "";

    updatedAt = "";

    integrationCount = 0;

    documentationUrl = "";

    constructor( _id = "", name = "", partnerId?: ObjectId) {
        this._id = _id;
        this.name = name;
        this.partnerId = partnerId;
    }

    public async createGame(params: Partial<IGame>) {
        try {
            const newGame = new Game({ ...params });
            newGame.save();
            return newGame;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const game = await Game
            .findOne()
            .where(this._id ? '_id' : 'name')
            .equals(this._id ? this._id : this.name)
            .catch((e: any) => {
                throw new Error(e)
            });
        return game;
    }

    public async findAll() {
        const games = await Game
            .find()
            .catch((e: any) => { throw new Error(e) });
        return games;
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const games = await Game
        .find({
            ...(condition && condition)
        })
        .sort(sort)
        .limit(limit)
        .skip(limit * (page - 1))
        .catch((e) => {
          throw e;
        });

        return {
            data: games,
            pagination: Pagionation.builder(games, count, { page, limit }),
        }
    }

    public async count(condition?: any) {
        const docs = await Game.countDocuments({
            ...(condition && condition)
        }).catch(e => { throw e; });
        return docs;
    }

    public async updateOne(params: Partial<IGame>) {
        const game = await Game
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return game;
    }

    public async deleteOne() {
        const game = await Game.deleteOne({ _id: this._id });
        return game;
    }

    public async deleteByPartnerId() {
        const game = await Game.deleteMany({ ...(this.partnerId && { partnerId: this.partnerId }) });
        return game;
    }

    public async deleteAll() {
        const game = await Game.deleteMany({});
        return game;
    }

}
export default GameService;
