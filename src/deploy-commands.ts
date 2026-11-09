import { REST, Routes } from 'discord.js';
import { commands } from './commands/index.js';
import { env } from './config/env.js';

const rest = new REST({ version: '10' }).setToken(env.token);
const body = commands.map((command) => command.data.toJSON());

if (env.guildId) {
  await rest.put(Routes.applicationGuildCommands(env.clientId, env.guildId), { body });
  console.log('Comandos registrados no servidor configurado.');
} else {
  await rest.put(Routes.applicationCommands(env.clientId), { body });
  console.log('Comandos globais registrados.');
}
