import { Schema, Types, model } from "mongoose";
import {
  IParnterPermissions,
  IPartner,
  IProject,
  IStakesCustomization,
  UsageCustomization,
} from "../../types";

const stakesSchema: Schema = new Schema<IStakesCustomization>({
  minimumStake: { type: Number, default: 10 },
  maximumStake: { type: Number, default: 5000 },
  gameType: { type: String, default: "cointoss" },
 
 maximumWinnableAmount: { type: Number, default: 20000 },
  minimumWinnableAmount: { type: Number, default: 0 },
});

const customizationSchema: Schema = new Schema<UsageCustomization>({
  stakes: stakesSchema,
  gameType: { type: String },
  promoAmount: { type: Number, default: 0 },
  showAbout: { type: Boolean, default: true },
  showBalance: { type: Boolean, default: true },
  showHistory: { type: Boolean, default: true },
  stakePercentage: { type: Number, default: 0 },
  numberOfBetPlaced: { type: Number, default: 0 },
  numberOfTimesPerDay: { type: Number, default: 0 },
  showBetAmountOption: { type: Boolean, default: true },
  isActive: { type: Boolean, required: true, default: true },
  stagingUrl: { type: String },
  productionUrl: { type: String },
});

const projectSchema: Schema = new Schema<IProject>({
  _id: { type: Schema.Types.ObjectId, auto: true },
  email: { type: String },
  name: { type: String },
  partnerUrl: { type: String },
  crashliteWebsocket: { type: String },
  buslyWebsocket: { type: String },
  isActive: { type: Boolean },
});

const permissionSchema: Schema = new Schema<IParnterPermissions>({
  addPartner: { type: Boolean },
  getPartner: { type: Boolean },
  getGame: { type: Boolean },
  getBets: { type: Boolean },
  getReports: { type: Boolean },
});

const PartnerSchema: Schema = new Schema<IPartner>(
  {
    name: {
      // company name
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    gender: {
      type: String,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    noOfEmployees: {
      type: Number,
    },
    password: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
    },
    roleId: {
      type: Types.ObjectId,
      ref: "roles",
    },
    IAM: {
      type: String,
    },
    hashedId: {
      type: String,
    },
    baseUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ["test", "live"],
      default: "test",
    },
    callbackUrl: {
      type: String,
      default: null,
    },
    associatedId: {
      type: String,
    },
    webhookUrl: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      enum: ["aggregator", "thirdparty", "demo"],
      default: "thirdparty",
    },
    customization: [customizationSchema],
    stakesCustomization: [stakesSchema],
    partnerUrl: { type: "String" },
    gameWebsocket: { type: "String" },
    chatWebsocket: { type: "String" },
    projects: [projectSchema],
    permissions: permissionSchema
  },
  {
    collection: "partners",
    versionKey: false,
  }
);

PartnerSchema.set("timestamps", true);

export default model<IPartner>("Partners", PartnerSchema);
