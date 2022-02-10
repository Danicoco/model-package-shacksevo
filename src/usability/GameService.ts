import { Game } from '../models';
import { IGame } from '../../types';

class GameService implements IGame {
    _id = "";

    name = "";

    accessUrl = "";

    demoUrl = "";

    documentationUrl = "";

    integrationCount = 0;

    createdAt = "";

    updatedAt = "";

    constructor( _id = "", name = "") {
        this.name = name;
        this._id = _id;
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
            .catch((e) => { 
                throw new Error(e) 
            });
        return game;
    }

    public async findAll() {
        const games = await Game
            .find()
            .catch((e) => { throw new Error(e) });
        return games;
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

}
export default GameService;