import type { Client, Interaction } from 'discord.js';
import { commandMap } from '../commands/index.js';

export function registerInteractionEvent(client: Client): void {
  client.on('interactionCreate', async (interaction: Interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }

    const command = commandMap.get(interaction.commandName);

    if (!command) {
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error('Erro ao executar comando:', error);

      if (interaction.replied || interaction.deferred) {
        await interaction.followUp('Ocorreu um erro ao executar este comando.');
      } else {
        await interaction.reply('Ocorreu um erro ao executar este comando.');
      }
    }
  });
}
