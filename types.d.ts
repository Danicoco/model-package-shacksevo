/* eslint-disable no-unused-vars */
import { Request } from "express";
import { ObjectId } from "mongoose";

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
  gameType: string;
  eventTypes: Array;
  isPlayed: boolean;
  eventRanges: Array;
  partnerId?: string;
  partnerName: string;
  crashRoundId: string;
  algorithmUsed: string;
  numberOfBetPlaced: number;
}
interface IBetPlaced extends DefaultAttributes {
  result: string;
  userId?: string;
  gameType: string;
  username: string;
  partnerId?: string;
  playerDetails: any;
  gameRoundId?: string;
  amountPlaced: number;
  cashoutAmount: number;
  potentialWinning: number;
  selectedEventType?: any[];
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
  lastPlayed?: string;
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
  hashedKey?: string;
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

interface IChat extends DefaultAttributes {
  userId: string;
  message: string;
  username: string;
  partnerId: string;
}

interface IErrorMessages extends DefaultAttributes {
  message: string;
  code: number;
  errorPosition?: string;
}

interface IGame extends DefaultAttributes {
  name: string;
  code: string;
  demoUrl: string;
  partnerId: ObjectId;
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
type IStatus = "test" | "live";
type IPartnerType = "aggregator" | "thirdparty" | "demo";

type IStakesCustomization = {
  gameType: string;
  minimumStake: number;
  maximumStake: number;
  maximumWinnableAmount: number;
  minimumWinnableAmount: number;
};

type UsageCustomization = {
  type: string;
  gameType: string;
  isActive: boolean;
  showAbout: boolean;
  promoAmount: number;
  showBalance: boolean;
  showHistory: boolean;
  stakePercentage: number;
  numberOfBetPlaced: number;
  numberOfTimesPerDay: number;
  showBetAmountOption: boolean;
  stakes: IStakesCustomization;
};

interface IPartner extends DefaultAttributes {
  name: string;
  role: string;
  email: string;
  gender: string;
  roleId?: string;
  status: IStatus;
  IAM?: IAMACCESS;
  lastName: string;
  password: string;
  firstName: string;
  isActive: boolean;
  type: IPartnerType;
  webhookUrl: string;
  callbackUrl: string;
  phoneNumber: string;
  noOfEmployees: number;
  stakesCustomization: IStakesCustomization[];
  customization: Partial<UsageCustomization>[];
}

type FeedbackTypes =
  | "games"
  | "complaint"
  | "feedback"
  | "question"
  | "concern";
interface IFeedback extends DefaultAttributes {
  title: string;
  message: string;
  details: object;
  type: FeedbackTypes;
}

interface IRTP extends DefaultAttributes {
  value: string;
  gameType: string;
  partnerId: string;
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

type rewardType = "loyalty_points" | "reward_multiplier" | "free_rounds";
type rankType =
  | "rounds_played"
  | "win_to_bet_ratio"
  | "sum_of_bets"
  | "sum_of_wins"
  | "highest_win_to_bet_ratio"
  | "success_ratio";
type tornamentGameType = "crashlite" | "busly";

interface ITornament extends DefaultAttributes {
  name: string;
  tornamentGameType: string | [];
  partnerId?: string;
  rankType: string;
  rewardType: string;
  duration: string;
  isActive: boolean;
}

interface ITornamentPlayers extends DefaultAttributes {
  tornamentId?: string;
  username: string;
  roundsPlayed: number;
  winToBetRatio: number;
  sumOfBets: number;
  sumOfWins: number;
  winToBetRatio: number;
  successRatio: number;
}

interface ILeaderboard extends DefaultAttributes {
  tornamentId?: string;
  username: string;
  point: number;
  rank: number;
}

interface IReward extends DefaultAttributes {
  rewardType: string;
  userId: string;
  amount: number;
  cashoutAmount: number;
  gameType: string;
  isActive: boolean;
  partnerId?: string;
  freeBetsAmount: number;
  loyaltyPercentage: number;
  multiplier: number;
  duration: Date;
  startDate: Date;
  endDate: Date;
}

interface LoyaltyPoints extends DefaultAttributes {
  pointsPercentage: number;
  minimumNumberOfBets: number;
}

interface FreeRounds extends DefaultAttributes {
  pointsPercentage: number;
  minimumNumberOfBets: number;
  minimumStakeAmount: number;
}

interface RewardMultiplier extends DefaultAttributes {
  pointsPercentage: number;
  numberOfGamesPlayed: number;
}

interface IBonus extends DefaultAttributes {
  username: string;
  partnerId?: string;
  tornamentId?: string;
  gameType: string;
  freebet: number;
  loyaltyPoints: number;
  bonusAmount: number;
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

type IPaginator = {
  sort: string;
  limit: number;
  page: number;
  condition?: any;
};

type CatchErr = (message: string, code?: number, validations?: object) => Error;

type AppError = Error & {
  code: number;
  name?: string;
  message: string;
  validations?: object | null;
};

interface ISpinRecord extends DefaultAttributes {
  userId?: string;
  balance: number;
  partner: string;
  cashoutAmount?: number;
  outcome: "cashout" | "free-spin";
}

declare module "express-serve-static-core" {
  export interface Request {
    admin: IToken;
    partner: IToken;
  }
}
