import { Guild } from "discord.js";
import mongoose from "mongoose";

const GuildConfigSchema = new mongoose.Schema({
  guildId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  prefix: {
    type: mongoose.SchemaTypes.String,
    required: true,
    default: "!",
  },
  defaultRole: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
  memberLogChannel: {
    type: mongoose.SchemaTypes.String,
    required: false,
  },
});

export default mongoose.model("GuildConfig", GuildConfigSchema);
