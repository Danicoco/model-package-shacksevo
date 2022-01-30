/* eslint-disable no-unused-vars */
import { Request } from 'express';
import { ObjectId } from 'mongoose';

interface AuthenticatedUser extends Request {
  user: Users
}

interface DefaultAttributes {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface IGameRound extends DefaultAttributes {
  eventTypes: Array;
  eventId: string;
  gameOdd: string;
  eventRanges: Array;
  partnerId: ObjectId;
  partnerName: string;
  algorithmUsed: string;
  numberOfBetPlaced: number;
}

interface IUser extends DefaultAttributes {
  firstName: string;
  lastName: string;
  email: string;
  otp?: string;
  gameType: string;
  isActive: boolean;
  username: string;
  partnerId?: ObjectId;
  partnerName: string;
}

interface IAdmin extends DefaultAttributes {
  fullName: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  role?: ObjectId;
}

interface IAPI extends DefaultAttributes {
  publicKey: string;
  secretKey: string;
  partnerId?: ObjectId;
  associatedGames: number;
  numOfTimesGenerated: number;
}

interface IApp extends DefaultAttributes {
  name: string;
  gameType: string;
  partnerId?: string;
  partnerName: string;
}

interface IErrorMessages extends DefaultAttributes {
  message: string;
  code: number;
  errorPosition?: string;
}

interface IGame extends DefaultAttributes {
  name: string;
  demoUrl: string;
  accessUrl: string; // live integration
  documentationUrl: string;
  integrationCount: number;
}

interface IGameAccess extends DefaultAttributes {
  partnerId?: ObjectId,
  partnerName: string;
  partnerEmail: string;
  gameId?: ObjectId,
  gameName: string;
  isActive: boolean;
}

type IAMACCESS = 'owner' | 'manager';

interface Partner extends DefaultAttributes {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  role: string;
  roleId?: ObjectId;
  IAM?: IAMACCESS;
}

interface Role extends DefaultAttributes {
  name: string;
  addedBy: string,
  permission?: ObjectId,
  adminId?: ObjectId,
}

interface Permission extends DefaultAttributes {
  name: string;
  addAdmin: boolean;
  getAdmin: boolean;
  deleteAdmin: boolean;
  updateAdmin: boolean;
  addPartner: boolean;
  getPartner: boolean;
  deletePartner: boolean;
  updatePartner: boolean;
  addGame: boolean;
  getGame: boolean;
  deleteGame: boolean;
  updateGame: boolean;
}

interface Transaction extends DefaultAttributes {
  userId?: ObjectId;
  amount: string;
  gameType: string;
  gameId?: ObjectId;
  gameOutcome: string; // won, lost
}

interface Wallet extends DefaultAttributes {
  userId?: ObjectId,
  amount: string;
  lastTransactionDate: string;
}

interface IToken {
  partner: {
    id: string;
    email: string;
    isActive: boolean;
    role: string;
    roleId: ObjectId;
    IAM: string;
  }
  admin: {
    id: string;
    username: string;
    email: string;
    isActive: string;
    roleId: ObjectId;
  }
}

type CatchErr = (
  message: string,
  code?: number,
  validations?: object,
) => Error;

type AppError = Error & {
  code: number;
  name?: string;
  message: string;
  validations?: object | null;
};

declare module "express-serve-static-core" {
  export interface Request {
    admin: IToken;
    partner: IToken;
  }
}