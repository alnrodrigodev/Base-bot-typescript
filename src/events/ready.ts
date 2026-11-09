import type { Client } from 'discord.js';

export function registerReadyEvent(client: Client<true>): void {
  console.log(`Conectado como ${client.user.tag}`);
}
