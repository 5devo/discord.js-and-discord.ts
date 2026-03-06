import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { Command } from '../../types';
import { emojis } from '../../config/config';
import { EmbedBuilderUtil } from '../../utils/embedBuilder';

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot latency'),
  category: 'info',
  cooldown: 5,
  
  async execute(interaction: ChatInputCommandInteraction) {
    const sent = await interaction.reply({ 
      content: `${emojis.loading} Pinging...`, 
      fetchReply: true 
    });

    const latency = sent.createdTimestamp - interaction.createdTimestamp;
    const apiLatency = Math.round(interaction.client.ws.ping);

    const embed = EmbedBuilderUtil.create({
      title: `${emojis.ping} Pong!`,
      fields: [
        { name: '📊 Bot Latency', value: `\`${latency}ms\``, inline: true },
        { name: '🌐 API Latency', value: `\`${apiLatency}ms\``, inline: true }
      ],
      color: latency < 200 ? 0x57F287 : latency < 400 ? 0xFEE75C : 0xED4245,
      timestamp: true
    });

    await interaction.editReply({ content: null, embeds: [embed] });
  }
};
