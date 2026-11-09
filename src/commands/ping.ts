import { SlashCommandBuilder } from 'discord.js';

export const pingCommand = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Mostra a latência do bot.'),
  async execute(interaction: { reply: (content: string) => Promise<unknown> }) {
    await interaction.reply('Pong!');
  },
};
