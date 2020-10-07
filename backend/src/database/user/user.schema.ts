import { User } from 'discord.js';
import mongoose from 'mongoose';
import { setLastUpdated } from './user.methods';
import { findOneAndUpdateOrCreate, findOneOrCreate } from './user.statics';

const UserSchema = new mongoose.Schema({
  discordId: {
    type: String,
    required: true,
    unique: true,
  },
  discordTag: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  dateOfEntry: {
    type: Date,
    default: new Date(),
  },
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

// set statics
UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.statics.findOneAndUpdateOrCreate = findOneAndUpdateOrCreate;

// set methods
UserSchema.methods.setLastUpdated = setLastUpdated;

export default UserSchema;
