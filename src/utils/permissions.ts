import { GuildMember, PermissionResolvable, CommandInteraction } from 'discord.js';

export class PermissionUtil {
  static hasPermission(member: GuildMember, permissions: PermissionResolvable[]): boolean {
    return permissions.every(permission => member.permissions.has(permission));
  }

  static isAdmin(member: GuildMember): boolean {
    return member.permissions.has('Administrator');
  }

  static isModerator(member: GuildMember): boolean {
    const modPermissions: PermissionResolvable[] = ['KickMembers', 'BanMembers', 'ModerateMembers'];
    return modPermissions.some(permission => member.permissions.has(permission));
  }

  static async checkPermissions(interaction: CommandInteraction, requiredPermissions: PermissionResolvable[]): Promise<boolean> {
    if (!interaction.guild) return true;
    
    const member = interaction.member as GuildMember;
    
    if (!this.hasPermission(member, requiredPermissions)) {
      const missing = requiredPermissions.filter(permission => !member.permissions.has(permission));
      await interaction.reply({
        content: `❌ You're missing the following permissions: ${missing.join(', ')}`,
        ephemeral: true
      });
      return false;
    }
    
    return true;
  }
}
