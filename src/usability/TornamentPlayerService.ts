import { Tornament, Leaderboard, TornamentPlayers } from '../models';
import { ITornament, IPaginator, ITornamentPlayers } from '../../types';
import { ObjectId } from 'mongoose';
import Pagionation from './Pagination';

class TornamentPlayerService {
    _id = "";
    partnerId?: ObjectId;
    username = "";

    constructor( _id = "", partnerId?: ObjectId, username="") {
        this._id = _id;
        this.partnerId = partnerId;
        this.username = username;
    }

    public async createTornament(params: Partial<ITornament>) {
        try {
            const newTornament = new Tornament({ ...params });
            newTornament.save();
            return newTornament;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findOne() {
        const tornamentPlayer = await Tornament
            .findOne()
            .where( '_id' )
            .equals(this._id)
            .catch((e: any) => {
                throw new Error(e)
            });
        return tornamentPlayer;
    }

    public async findAll() {
        const tornamentPlayers = await Tornament
            .find()
            .catch((e: any) => { throw new Error(e) });
        return tornamentPlayers;
    }

    public async leaderboard() {
        try {
            const leaderboard = Leaderboard.find();
            return leaderboard;
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async updateTornamentPlayers(params: Partial<ITornamentPlayers>){
        try {
            const player = TornamentPlayers.findOne({'_id': this._id, 'username': this.username})
            if(player){
                player.update({...params})
                return player
            }else{
                const newPlayer = TornamentPlayers.create({...params})
                return newPlayer
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }

    public async findAllPaginated({ sort, limit, page, condition }: IPaginator) {
        const count = await this.count(condition).catch(e => { throw e; });
        const tornamentPlayers = await Tornament
        .find({
            ...(condition && condition)
        })
        .sort(sort)
        .limit(limit)
        .skip(limit * (page - 1))
        .catch((e: any) => {
          throw e;
        });

        return {
            data: tornamentPlayers,
            pagination: Pagionation.builder(tornamentPlayers, count, { page, limit }),
        }
    }

    public async count(condition?: any) {
        const docs = await Tornament.countDocuments({
            ...(condition && condition)
        }).catch((e: any) => { throw e; });
        return docs;
    }

    public async updateOne(params: Partial<ITornament>) {
        const tornamentPlayer = await Tornament
            .findOneAndUpdate(
                { _id: this._id },
                { ...params },
                { new: true }
            );
        return tornamentPlayer;
    }

    public async deleteOne() {
        const tornamentPlayer = await Tornament.deleteOne({ _id: this._id });
        return tornamentPlayer;
    }

}
export default TornamentPlayerService;
