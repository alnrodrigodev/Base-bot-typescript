import { Client, GatewayIntentBits } from 'discord.js';
import { env } from './config/env.js';
import { registerInteractionEvent } from './events/interactionCreate.js';
import { registerReadyEvent } from './events/ready.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once('ready', registerReadyEvent);
registerInteractionEvent(client);

client.login(env.token).catch((error: unknown) => {
  console.error('Não foi possível conectar o bot:', error);
  process.exitCode = 1;
});
