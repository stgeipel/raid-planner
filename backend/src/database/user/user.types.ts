import { Document, Model } from 'mongoose';

export interface IUser {
  discordId: string;
  discordTag: string;
  avatar: string;
  dateOfEntry?: Date;
  lastUpdated?: Date;
}
export interface IUserDocument extends IUser, Document {
  setLastUpdated: (this: IUserDocument) => Promise<void>;
}

export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: (
    this: IUserModel,
    {
      discordId,
      discordTag,
      avatar,
    }: {
      discordId: string;
      discordTag: string;
      avatar: string;
    }
  ) => Promise<IUserDocument>;

  findOneAndUpdateOrCreate: (
    this: IUserModel,
    {
      discordId,
      discordTag,
      avatar,
    }: {
      discordId: string;
      discordTag: string;
      avatar: string;
    }
  ) => Promise<IUserDocument>;
}
