import { EmbedBuilder, ColorResolvable } from 'discord.js';
import { colors } from '../config/config';

export class EmbedBuilderUtil {
  static create(options: {
    title?: string;
    description?: string;
    color?: ColorResolvable;
    fields?: { name: string; value: string; inline?: boolean }[];
    footer?: string;
    timestamp?: boolean;
    thumbnail?: string;
    image?: string;
  }) {
    const embed = new EmbedBuilder()
      .setColor(options.color || colors.primary);

    if (options.title) embed.setTitle(options.title);
    if (options.description) embed.setDescription(options.description);
    if (options.fields) embed.addFields(options.fields);
    if (options.footer) embed.setFooter({ text: options.footer });
    if (options.timestamp) embed.setTimestamp();
    if (options.thumbnail) embed.setThumbnail(options.thumbnail);
    if (options.image) embed.setImage(options.image);

    return embed;
  }

  static success(description: string, title?: string) {
    return this.create({
      title: title || '✅ Success!',
      description,
      color: colors.success,
      timestamp: true
    });
  }

  static error(description: string, title?: string) {
    return this.create({
      title: title || '❌ Error!',
      description,
      color: colors.error,
      timestamp: true
    });
  }

  static warning(description: string, title?: string) {
    return this.create({
      title: title || '⚠️ Warning!',
      description,
      color: colors.warning,
      timestamp: true
    });
  }
}
