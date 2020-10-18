// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-guildCreate
import { Guild } from 'discord.js';
import BaseEvent from '../utils/structures/BaseEvent';
import DiscordClient from '../client/client';
import GuildConfig from '../database/schema/GuildConfig';

export default class GuildCreateEvent extends BaseEvent {
  constructor() {
    super('guildCreate');
  }

  async run(client: DiscordClient, guild: Guild) {
    const guildconfig = await GuildConfig.create({
      guildId: guild.id,
    });

    console.log('Bot hast joined the Server. Guild saved to DB');
  }
}
