/* eslint-disable no-unused-vars */
import { Request } from "express";

interface AuthenticatedUser extends Request {
  user: Users;
}

interface DefaultAttributes {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface IGameRound extends DefaultAttributes {
  day: string;
  season: number;
  gameOdd: string;
  eventId: string;
  eventTypes: Array;
  isPlayed: boolean;
  eventRanges: Array;
  partnerId?: string;
  partnerName: string;
  algorithmUsed: string;
  numberOfBetPlaced: number;
}
interface IBetPlaced extends DefaultAttributes {
  result: string;
  userId?: string;
  gameType: string;
  username: string;
  partnerId?: string;
  gameRoundId?: string;
  amountPlaced: number;
  cashoutAmount: number;
  potentialWinning: number;
  selectedEventType?: [];
}

interface IUser extends DefaultAttributes {
  firstName: string;
  lastName: string;
  email: string;
  otp?: string;
  gameType: string;
  isActive: boolean;
  username: string;
  partnerId?: string;
  partnerName: string;
}

interface IAdmin extends DefaultAttributes {
  fullName: string;
  username: string;
  email: string;
  password: string;
  isActive: boolean;
  role?: string;
}

interface IAPI extends DefaultAttributes {
  publicKey: string;
  secretKey: string;
  partnerId?: string;
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
  partnerId?: string;
  partnerName: string;
  partnerEmail: string;
  gameId?: string;
  gameName: string;
  isActive: boolean;
}

type IAMACCESS = "owner" | "manager";

interface IPartner extends DefaultAttributes {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  isActive: boolean;
  role: string;
  roleId?: string;
  IAM?: IAMACCESS;
}

interface IRole extends DefaultAttributes {
  name: string;
  addedBy: string;
  permissionId?: string;
  adminId?: string;
}

interface IPermission extends DefaultAttributes {
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

interface ITransaction extends DefaultAttributes {
  userId?: string;
  amount: string;
  gameType: string;
  gameId?: string;
  gameOutcome: string; // won, lost
}

interface Wallet extends DefaultAttributes {
  userId?: string;
  amount: string;
  lastTransactionDate: string;
}

interface IToken {
  partner: {
    id: string;
    email: string;
    isActive: boolean;
    role: string;
    roleId: string;
    IAM: string;
  };
  admin: {
    id: string;
    username: string;
    email: string;
    isActive: string;
    roleId: string;
  };
}

type CatchErr = (message: string, code?: number, validations?: object) => Error;

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
