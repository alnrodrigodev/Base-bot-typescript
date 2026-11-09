# Base de bot para Discord

Base em TypeScript para criar bots do Discord com `discord.js`.

## Requisitos

- Node.js 20 ou superior
- Uma aplicação criada no [Discord Developer Portal](https://discord.com/developers/applications)

## Configuração

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Copie `.env.example` para `.env` e preencha:

   ```env
   DISCORD_TOKEN=seu_token_do_bot
   DISCORD_CLIENT_ID=id_da_aplicacao
   DISCORD_GUILD_ID=id_do_servidor_para_registro_local
   ```

3. Registre os comandos:

   ```bash
   npx tsx src/deploy-commands.ts
   ```

4. Inicie em desenvolvimento:

   ```bash
   npm run dev
   ```

## Scripts

- `npm run dev`: inicia com recarregamento automático.
- `npm run build`: compila para `dist`.
- `npm run start`: executa a versão compilada.
- `npm run typecheck`: verifica os tipos sem gerar arquivos.

## Estrutura

```text
src/
├── commands/       Comandos slash
├── config/         Configuração e variáveis de ambiente
├── events/         Eventos do cliente Discord
├── deploy-commands.ts
└── index.ts
```

## Créditos

Desenvolvido por [alnrodrigodev](https://github.com/alnrodrigodev).
