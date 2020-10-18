import { IUserDocument, IUserModel } from './user.types';

export async function findOneOrCreate(
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
): Promise<IUserDocument> {
  const record = await this.findOne({ discordId });
  if (record) {
    return record;
  } else {
    return this.create({ discordId, discordTag, avatar });
  }
}

export async function findOneAndUpdateOrCreate(
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
): Promise<IUserDocument> {
  const findUser = await this.findOneAndUpdate(
    { discordId },
    {
      discordId,
      discordTag,
      avatar,
    },
    { new: true }
  );

  if (findUser) {
    return findUser;
  } else {
    const newUser = await this.create({
      discordId,
      discordTag,
      avatar,
    });
    return newUser;
  }
}
