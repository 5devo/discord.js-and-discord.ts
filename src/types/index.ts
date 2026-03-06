import { 
  SlashCommandBuilder, 
  CommandInteraction, 
  PermissionResolvable,
  ChatInputCommandInteraction,
  AutocompleteInteraction
} from 'discord.js';

export interface Command {
  data: SlashCommandBuilder;
  category: string;
  cooldown?: number;
  permissions?: PermissionResolvable[];
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
  autocomplete?: (interaction: AutocompleteInteraction) => Promise<void>;
}

export interface Event {
  name: string;
  once?: boolean;
  execute: (...args: any[]) => Promise<void> | void;
}

export interface BotConfig {
  token: string;
  clientId: string;
  guildId?: string;
  mongodbUri?: string;
}
