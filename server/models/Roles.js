import { Schema, model } from "mongoose";

const RolesSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  role: {
    type: String,
    required: true,
  },
});

model("roles", RolesSchema);
