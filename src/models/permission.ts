import { Schema, model } from "mongoose";
import { IPermission } from "../../types";

const PermissionSchema: Schema = new Schema<IPermission>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    addAdmin: Boolean,
    getAdmin: Boolean,
    deleteAdmin: Boolean,
    updateAdmin: Boolean,
    addPartner: Boolean,
    getPartner: Boolean,
    deletePartner: Boolean,
    updatePartner: Boolean,
    addGame: Boolean,
    getGame: Boolean,
    deleteGame: Boolean,
    updateGame: Boolean,
  },
  {
    collection: "permissions",
    versionKey: false,
  }
);

PermissionSchema.set("timestamps", true);

export default model<IPermission>(
  "Permissions",
  PermissionSchema
);
