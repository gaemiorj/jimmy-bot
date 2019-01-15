{
  "Administration": [
    {
      "Aliases": [
        ".delmsgoncmd"
      ],
      "Description": "Toggles the automatic deletion of the user's successful command message to prevent chat flood. You can use it either as a server toggle, channel whitelist, or channel blacklist, as channel option has 3 settings: Enable (always do it on this channel), Disable (never do it on this channel), and Inherit (respect server setting). Use `list` parameter to see the current states.",
      "Usage": [
        ".delmsgoncmd",
        ".delmsgoncmd channel enable",
        ".delmsgoncmd channel inherit",
        ".delmsgoncmd list"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".deafen",
        ".deaf"
      ],
      "Description": "Deafens mentioned user or users.",
      "Usage": [
        ".deaf \"@Someguy\"",
        ".deaf \"@Someguy\" \"@Someguy\""
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "DeafenMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".undeafen",
        ".undef"
      ],
      "Description": "Undeafens mentioned user or users.",
      "Usage": [
        ".undef \"@Someguy\"",
        ".undef \"@Someguy\" \"@Someguy\""
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "DeafenMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".delvoichanl",
        ".dvch"
      ],
      "Description": "Deletes a voice channel with a given name.",
      "Usage": [
        ".dvch VoiceChannelName"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".creatvoichanl",
        ".cvch"
      ],
      "Description": "Creates a new voice channel with a given name.",
      "Usage": [
        ".cvch VoiceChannelName"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".deltxtchanl",
        ".dtch"
      ],
      "Description": "Deletes a text channel with a given name.",
      "Usage": [
        ".dtch TextChannelName"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".creatxtchanl",
        ".ctch"
      ],
      "Description": "Creates a new text channel with a given name.",
      "Usage": [
        ".ctch TextChannelName"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".settopic",
        ".st"
      ],
      "Description": "Sets a topic on the current channel.",
      "Usage": [
        ".st My new topic"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".setchanlname",
        ".schn"
      ],
      "Description": "Changes the name of the current channel.",
      "Usage": [
        ".schn NewName"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageChannels Server Permission"
      ]
    },
    {
      "Aliases": [
        ".edit"
      ],
      "Description": "Edits bot's message, you have to specify message ID and new text. Supports embeds.",
      "Usage": [
        ".edit 7479498384 Hi :^)"
      ],
      "Submodule": "Administration",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".autoassignrole",
        ".aar"
      ],
      "Description": "Automaticaly assigns a specified role to every user who joins the server. Provide no parameters to disable.",
      "Usage": [
        ".aar",
        ".aar RoleName"
      ],
      "Submodule": "AutoAssignRoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".sqlselect"
      ],
      "Description": "Executes provided sql query and returns the results. Dangerous.",
      "Usage": [
        ".sqlselect SELECT * FROM DiscordUser LIMIT 5"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".sqlexec"
      ],
      "Description": "Executes provided sql command and returns the number of affected rows. Dangerous.",
      "Usage": [
        ".sqlexec UPDATE DiscordUser SET CurrencyAmount=CurrencyAmount+1234"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".deletewaifus"
      ],
      "Description": "Deletes everything from WaifuUpdates, WaifuItem and WaifuInfo tables.",
      "Usage": [
        ".deletewaifus"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".deletewaifu"
      ],
      "Description": "Deletes everything from WaifuUpdates, WaifuItem and WaifuInfo tables for the specified user. Also makes specified user's waifus free.",
      "Usage": [
        ".deletewaifus"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".deletecurrency"
      ],
      "Description": "Deletes everything from Currency and CurrencyTransactions.",
      "Usage": [
        ".deletecurrency"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".deleteplaylists"
      ],
      "Description": "Deletes everything from MusicPlaylists.",
      "Usage": [
        ".deleteplaylists"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".deleteexp"
      ],
      "Description": "deleteexp",
      "Usage": [
        "deleteexp"
      ],
      "Submodule": "DangerousCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".gvc"
      ],
      "Description": "Toggles game voice channel feature in the voice channel you're currently in. Users who join the game voice channel will get automatically redirected to the voice channel with the name of their current game, if it exists. Can't move users to channels that the bot has no connect permission for. One per server.",
      "Usage": [
        ".gvc"
      ],
      "Submodule": "GameChannelCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".languageset",
        ".langset"
      ],
      "Description": "Sets this server's response language. If bot's response strings have been translated to that language, bot will use that language in this server. Reset by using `default` as the locale name. Provide no parameters to see currently set language.",
      "Usage": [
        ".langset de-DE ",
        ".langset default"
      ],
      "Submodule": "LocalizationCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".langsetdefault",
        ".langsetd"
      ],
      "Description": "Sets the bot's default response language. All servers which use a default locale will use this one. Setting to `default` will use the host's current culture. Provide no parameters to see currently set language.",
      "Usage": [
        ".langsetd en-US",
        ".langsetd default"
      ],
      "Submodule": "LocalizationCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".languageslist",
        ".langli"
      ],
      "Description": "List of languages for which translation (or part of it) exist atm.",
      "Usage": [
        ".langli"
      ],
      "Submodule": "LocalizationCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".logserver"
      ],
      "Description": "Enables or Disables ALL log events. If enabled, all log events will log to this channel.",
      "Usage": [
        ".logserver enable",
        ".logserver disable"
      ],
      "Submodule": "LogCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".logignore"
      ],
      "Description": "Toggles whether the `.logserver` command ignores this channel. Useful if you have hidden admin channel and public log channel.",
      "Usage": [
        ".logignore"
      ],
      "Submodule": "LogCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".logevents"
      ],
      "Description": "Shows a list of all events you can subscribe to with `.log`",
      "Usage": [
        ".logevents"
      ],
      "Submodule": "LogCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".log"
      ],
      "Description": "Toggles logging event. Disables it if it is active anywhere on the server. Enables if it isn't active. Use `.logevents` to see a list of all events you can subscribe to.",
      "Usage": [
        ".log userpresence",
        ".log userbanned"
      ],
      "Submodule": "LogCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setmuterole"
      ],
      "Description": "Sets a name of the role which will be assigned to people who should be muted. Default is nadeko-mute.",
      "Usage": [
        ".setmuterole Silenced"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".mute"
      ],
      "Description": "Mutes a mentioned user both from speaking and chatting. You can also specify time string for how long the user should be muted.",
      "Usage": [
        ".mute @Someone",
        ".mute 1h30m @Someone"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission",
        "MuteMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".unmute"
      ],
      "Description": "Unmutes a mentioned user previously muted with `.mute` command.",
      "Usage": [
        ".unmute @Someone"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission",
        "MuteMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".chatmute"
      ],
      "Description": "Prevents a mentioned user from chatting in text channels.",
      "Usage": [
        ".chatmute @Someone"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".chatunmute"
      ],
      "Description": "Removes a mute role previously set on a mentioned user with `.chatmute` which prevented him from chatting in text channels.",
      "Usage": [
        ".chatunmute @Someone"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".voicemute"
      ],
      "Description": "Prevents a mentioned user from speaking in voice channels.",
      "Usage": [
        ".voicemute @Someone"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "MuteMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".voiceunmute"
      ],
      "Description": "Gives a previously voice-muted user a permission to speak.",
      "Usage": [
        ".voiceunmute @Someguy"
      ],
      "Submodule": "MuteCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "MuteMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".rotateplaying",
        ".ropl"
      ],
      "Description": "Toggles rotation of playing status of the dynamic strings you previously specified.",
      "Usage": [
        ".ropl"
      ],
      "Submodule": "PlayingRotateCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".addplaying",
        ".adpl"
      ],
      "Description": "Adds a specified string to the list of playing strings to rotate. You have to pick either 'Playing', 'Watching' or 'Listening' as the first parameter. Supported placeholders: `%servers%`, `%users%`, `%playing%`, `%queued%`, `%time%`, `%shardid%`, `%shardcount%`, `%shardguilds%`.",
      "Usage": [
        ".adpl Playing with you",
        ".adpl Watching you sleep"
      ],
      "Submodule": "PlayingRotateCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".listplaying",
        ".lipl"
      ],
      "Description": "Lists all playing statuses with their corresponding number.",
      "Usage": [
        ".lipl"
      ],
      "Submodule": "PlayingRotateCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".removeplaying",
        ".rmpl",
        ".repl"
      ],
      "Description": "Removes a playing string on a given number.",
      "Usage": [
        ".rmpl"
      ],
      "Submodule": "PlayingRotateCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".prefix"
      ],
      "Description": "Sets this server's prefix for all bot commands. Provide no parameters to see the current server prefix. **Setting prefix requires Administrator server permission.**",
      "Usage": [
        ".prefix +"
      ],
      "Submodule": "PrefixCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".defprefix"
      ],
      "Description": "Sets bot's default prefix for all bot commands. Provide no parameters to see the current default prefix. This will not change this server's current prefix.",
      "Usage": [
        ".defprefix +"
      ],
      "Submodule": "PrefixCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".antiraid"
      ],
      "Description": "Sets an anti-raid protection on the server. Provide no parameters to disable. First parameter is number of people which will trigger the protection. Second parameter is a time interval in which that number of people needs to join in order to trigger the protection, and third parameter is punishment for those people (Kick, Ban, Mute)",
      "Usage": [
        ".antiraid 5 20 Kick",
        ".antiraid"
      ],
      "Submodule": "ProtectionCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".antispam"
      ],
      "Description": "Stops people from repeating same message X times in a row. Provide no parameters to disable. You can specify to either mute, kick or ban the offenders. If you're using mute, you can add a number of seconds at the end to use a timed mute. Max message count is 10.",
      "Usage": [
        ".antispam 3 Mute",
        ".antispam 4 Kick",
        ".antispam"
      ],
      "Submodule": "ProtectionCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".antispamignore"
      ],
      "Description": "Toggles whether antispam ignores current channel. Antispam must be enabled.",
      "Usage": [
        ".antispamignore"
      ],
      "Submodule": "ProtectionCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".antilist",
        ".antilst"
      ],
      "Description": "Shows currently enabled protection features.",
      "Usage": [
        ".antilist"
      ],
      "Submodule": "ProtectionCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".prune",
        ".clear"
      ],
      "Description": "`.prune` removes all Nadeko's messages in the last 100 messages. `.prune X` removes last `X` number of messages from the channel (up to 100). `.prune @Someone` removes all Someone's messages in the last 100 messages. `.prune @Someone X` removes last `X` number of 'Someone's' messages in the channel. You can use the `-s` / `--safe` parameter at the end to only prune messages that are not pinned.",
      "Usage": [
        ".prune",
        ".prune -s",
        ".prune 5",
        ".prune 5 --safe",
        ".prune @Someone",
        ".prune @Someone --safe",
        ".prune @Someone X",
        ".prune @Someone X -s"
      ],
      "Submodule": "PruneCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".reactionroles",
        ".rero"
      ],
      "Description": "Specify role names and server emojis with which they're represented, the bot will then add those emojis to the previous message in the channel, and users will be able to get the roles by clicking on the emoji. You can set 'excl' as the first parameter to make them exclusive. You can have up to 5 of these enabled on one server at a time.",
      "Usage": [
        ".reactionroles Gamer :SomeServerEmoji: Streamer :Other: Watcher :Other2:",
        ".reactionroles excl Horde :Horde: Alliance :Alliance:"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".reactionroleslist",
        ".reroli"
      ],
      "Description": "Lists all ReactionRole messages on this channel and their indexes.",
      "Usage": [
        ".reactionroleslist"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".reactionrolesremove",
        ".rerorm"
      ],
      "Description": "Removed a ReactionRole message on the specified index.",
      "Usage": [
        ".rerorm 1"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".setrole",
        ".sr"
      ],
      "Description": "Sets a role for a given user.",
      "Usage": [
        ".sr @User Guest"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".removerole",
        ".rr"
      ],
      "Description": "Removes a role from a given user.",
      "Usage": [
        ".rr @User Admin"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".renamerole",
        ".renr"
      ],
      "Description": "Renames a role. The role you are renaming must be lower than bot's highest role.",
      "Usage": [
        ".renr \"First role\" SecondRole"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".removeallroles",
        ".rar"
      ],
      "Description": "Removes all roles from a mentioned user.",
      "Usage": [
        ".rar @User"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".createrole",
        ".cr"
      ],
      "Description": "Creates a role with a given name.",
      "Usage": [
        ".cr Awesome Role"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".deleterole",
        ".dr"
      ],
      "Description": "Deletes a role with a given name.",
      "Usage": [
        ".dr Awesome Role"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".rolehoist",
        ".rh"
      ],
      "Description": "Toggles whether this role is displayed in the sidebar or not.",
      "Usage": [
        ".rh Guests",
        ".rh \"Space Wizards\""
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".rolecolor",
        ".roleclr"
      ],
      "Description": "Set a role's color using its hex value. Provide no color in order to see the hex value of the color of the specified role.",
      "Usage": [
        ".roleclr Admin",
        ".roleclr Admin ffba55"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".mentionrole",
        ".menro"
      ],
      "Description": "Mentions a role. If the role is not mentionable, bot will make it mentionable for a moment.",
      "Usage": [
        ".menro RoleName"
      ],
      "Submodule": "RoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "MentionEveryone Server Permission"
      ]
    },
    {
      "Aliases": [
        ".adsarm"
      ],
      "Description": "Toggles the automatic deletion of confirmations for `.iam` and `.iamn` commands.",
      "Usage": [
        ".adsarm"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".asar"
      ],
      "Description": "Adds a role to the list of self-assignable roles. You can also specify a group. If 'Exclusive self-assignable roles' feature is enabled, users will be able to pick one role per group.",
      "Usage": [
        ".asar Gamer",
        ".asar 1 Alliance",
        ".asar 1 Horde"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".sargn"
      ],
      "Description": "Sets a self assignable role group name. Provide no name to remove.",
      "Usage": [
        ".sargn 1 Faction",
        ".sargn 2"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".rsar"
      ],
      "Description": "Removes a specified role from the list of self-assignable roles.",
      "Usage": [
        ".rsar"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".lsar"
      ],
      "Description": "Lists self-assignable roles. Shows 20 roles per page.",
      "Usage": [
        ".lsar",
        ".lsar 2"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".togglexclsar",
        ".tesar"
      ],
      "Description": "Toggles whether the self-assigned roles are exclusive. While enabled, users can only have one self-assignable role per group.",
      "Usage": [
        ".tesar"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".rolelevelreq",
        ".rlr"
      ],
      "Description": "Set a level requirement on a self-assignable role.",
      "Usage": [
        ".rlr 5 SomeRole"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".iam"
      ],
      "Description": "Adds a role to you that you choose. Role must be on a list of self-assignable roles.",
      "Usage": [
        ".iam Gamer"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".iamnot",
        ".iamn"
      ],
      "Description": "Removes a specified role from you. Role must be on a list of self-assignable roles.",
      "Usage": [
        ".iamn Gamer"
      ],
      "Submodule": "SelfAssignedRolesCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".updatescheck"
      ],
      "Description": "Select which kind of updates you want to be notified of every 8 hours. You can specify 'release' to check only for new windows releases, 'commit' to be notified of new commits, or 'none' to not get notified.",
      "Usage": [
        ".updatescheck commit",
        ".updatescheck release"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".scadd"
      ],
      "Description": "Adds a command to the list of commands which will be executed automatically in the current channel, in the order they were added in, by the bot when it startups up.",
      "Usage": [
        ".scadd .stats"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".autocmdadd"
      ],
      "Description": "Adds a command to the list of commands which will be executed automatically every X seconds.",
      "Usage": [
        ".autocmdadd 60 .prune 1000"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".sclist"
      ],
      "Description": "Lists all startup commands in the order they will be executed in.",
      "Usage": [
        ".sclist"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".autocmds",
        ".autolist",
        ".autocmdlist"
      ],
      "Description": "Lists all auto commands and the intervals in which they execute.",
      "Usage": [
        ".autolist"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".wait"
      ],
      "Description": "Used only as a startup command. Waits a certain number of miliseconds before continuing the execution of the following startup commands.",
      "Usage": [
        ".wait 3000"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".scrm",
        ".autocmdrm",
        ".autorm"
      ],
      "Description": "Removes a startup or auto command with the provided index.",
      "Usage": [
        ".scrm 3"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".scclr"
      ],
      "Description": "Removes all startup commands.",
      "Usage": [
        ".scclr"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".fwmsgs"
      ],
      "Description": "Toggles forwarding of non-command messages sent to bot's DM to the bot owners",
      "Usage": [
        ".fwmsgs"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".fwtoall"
      ],
      "Description": "Toggles whether messages will be forwarded to all bot owners or only to the first one specified in the credentials.json file",
      "Usage": [
        ".fwtoall"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".shardstats"
      ],
      "Description": "Stats for shards. Paginated with 25 shards per page.",
      "Usage": [
        ".shardstats",
        ".shardstats 2"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".restartshard"
      ],
      "Description": "Try (re)connecting a shard with a certain shardid when it dies. No one knows will it work. Keep an eye on the console for errors.",
      "Usage": [
        ".restartshard 2"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".leave"
      ],
      "Description": "Makes Nadeko leave the server. Either server name or server ID is required.",
      "Usage": [
        ".leave 123123123331"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".die"
      ],
      "Description": "Shuts the bot down.",
      "Usage": [
        ".die"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".restart"
      ],
      "Description": "Restarts the bot. Might not work.",
      "Usage": [
        ".restart"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setname",
        ".newnm"
      ],
      "Description": "Gives the bot a new name.",
      "Usage": [
        ".newnm BotName"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setnick"
      ],
      "Description": "Changes the nickname of the bot on this server. You can also target other users to change their nickname.",
      "Usage": [
        ".setnick BotNickname",
        ".setnick @SomeUser New Nickname"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageNicknames Server Permission"
      ]
    },
    {
      "Aliases": [
        ".setstatus"
      ],
      "Description": "Sets the bot's status. (Online/Idle/Dnd/Invisible)",
      "Usage": [
        ".setstatus Idle"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setavatar",
        ".setav"
      ],
      "Description": "Sets a new avatar image for the NadekoBot. Parameter is a direct link to an image.",
      "Usage": [
        ".setav http://i.imgur.com/xTG3a1I.jpg"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setgame"
      ],
      "Description": "Sets the bots game status to either Playing, Listening, or Watching.",
      "Usage": [
        ".setgame Playing with snakes.",
        ".setgame Watching anime.",
        ".setgame Listening music."
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".setstream"
      ],
      "Description": "Sets the bots stream. First parameter is the twitch link, second parameter is stream name.",
      "Usage": [
        ".setstream TWITCHLINK Hello"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".send"
      ],
      "Description": "Sends a message to someone on a different server through the bot.  Separate server and channel/user ids with `|` and prefix the channel id with `c:` and the user id with `u:`.",
      "Usage": [
        ".send serverid|c:channelid message",
        ".send serverid|u:userid message"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".imagesreload"
      ],
      "Description": "Reloads images bot is using. Safe to use even when bot is being used heavily.",
      "Usage": [
        ".imagesreload"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".botconfigreload"
      ],
      "Description": "Reloads bot configuration in case you made changes to the BotConfig table either with .sqlexec or manually in the .db file.",
      "Usage": [
        ".botconfigreload"
      ],
      "Submodule": "SelfCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".greetdel",
        ".grdel"
      ],
      "Description": "Sets the time it takes (in seconds) for greet messages to be auto-deleted. Set it to 0 to disable automatic deletion.",
      "Usage": [
        ".greetdel 0",
        ".greetdel 30"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".greet"
      ],
      "Description": "Toggles anouncements on the current channel when someone joins the server.",
      "Usage": [
        ".greet"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".greetmsg"
      ],
      "Description": "Sets a new join announcement message which will be shown in the server's channel. Type `%user%` if you want to mention the new member. Using it with no message will show the current greet message. You can use embed json from <https://embedbuilder.nadekobot.me/> instead of a regular text, if you want the message to be embedded.",
      "Usage": [
        ".greetmsg Welcome, %user%."
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".greetdm"
      ],
      "Description": "Toggles whether the greet messages will be sent in a DM (This is separate from greet - you can have both, any or neither enabled).",
      "Usage": [
        ".greetdm"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".greetdmmsg"
      ],
      "Description": "Sets a new join announcement message which will be sent to the user who joined. Type `%user%` if you want to mention the new member. Using it with no message will show the current DM greet message. You can use embed json from <https://embedbuilder.nadekobot.me> instead of a regular text, if you want the message to be embedded.",
      "Usage": [
        ".greetdmmsg Welcome to the server, %user%"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".bye"
      ],
      "Description": "Toggles anouncements on the current channel when someone leaves the server.",
      "Usage": [
        ".bye"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".byemsg"
      ],
      "Description": "Sets a new leave announcement message. Type `%user%` if you want to show the name the user who left. Type `%id%` to show id. Using this command with no message will show the current bye message. You can use embed json from <https://embedbuilder.nadekobot.me/> instead of a regular text, if you want the message to be embedded.",
      "Usage": [
        ".byemsg %user% has left."
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".byedel"
      ],
      "Description": "Sets the time it takes (in seconds) for bye messages to be auto-deleted. Set it to `0` to disable automatic deletion.",
      "Usage": [
        ".byedel 0",
        ".byedel 30"
      ],
      "Submodule": "ServerGreetCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageServer Server Permission"
      ]
    },
    {
      "Aliases": [
        ".timezones"
      ],
      "Description": "Lists all timezones available on the system to be used with `.timezone`.",
      "Usage": [
        ".timezones"
      ],
      "Submodule": "TimeZoneCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".timezone"
      ],
      "Description": "Sets this guilds timezone. This affects bot's time output in this server (logs, etc..)",
      "Usage": [
        ".timezone",
        ".timezone GMT Standard Time"
      ],
      "Submodule": "TimeZoneCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".warn"
      ],
      "Description": "Warns a user.",
      "Usage": [
        ".warn @b1nzy Very rude person"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".warnlog"
      ],
      "Description": "See a list of warnings of a certain user.",
      "Usage": [
        ".warnlog @b1nzy"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".warnlogall"
      ],
      "Description": "See a list of all warnings on the server. 15 users per page.",
      "Usage": [
        ".warnlogall",
        ".warnlogall 2"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".warnclear",
        ".warnc"
      ],
      "Description": "Clears all warnings from a certain user. You can specify a number to clear a specific one.",
      "Usage": [
        ".warnclear @PoorDude 3",
        ".warnclear @PoorDude"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".warnpunish",
        ".warnp"
      ],
      "Description": "Sets a punishment for a certain number of warnings. You can specify a time string after 'Ban' or 'Mute' punishment to make it a temporary mute/ban. Provide no punishment to remove.",
      "Usage": [
        ".warnp 5 Ban",
        ".warnp 3",
        ".warnp 5 Mute 2d12h"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".warnpunishlist",
        ".warnpl"
      ],
      "Description": "Lists punishments for warnings.",
      "Usage": [
        ".warnpunishlist"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".ban",
        ".b"
      ],
      "Description": "Bans a user by ID or name with an optional message. You can specify a time string before the user name to ban the user temporarily.",
      "Usage": [
        ".b \"@some Guy\" Your behaviour is toxic.",
        ".b 1d12h @b1nzy Come back when u chill"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".unban"
      ],
      "Description": "Unbans a user with the provided user#discrim or id.",
      "Usage": [
        ".unban kwoth#1234",
        ".unban 123123123"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".softban",
        ".sb"
      ],
      "Description": "Bans and then unbans a user by ID or name with an optional message.",
      "Usage": [
        ".sb \"@some Guy\" Your behaviour is toxic."
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "KickMembers Server Permission",
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".kick",
        ".k"
      ],
      "Description": "Kicks a mentioned user.",
      "Usage": [
        ".k \"@some Guy\" Your behaviour is toxic."
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "KickMembers Server Permission"
      ]
    },
    {
      "Aliases": [
        ".masskill"
      ],
      "Description": "Specify a new-line separated list of `userid reason`. You can use Username#discrim instead of UserId. Specified users will be banned from the current server, blacklisted from the bot, and have all of their flowers taken away.",
      "Usage": [
        ".masskill BadPerson#1234 Toxic person"
      ],
      "Submodule": "UserPunishCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "BanMembers Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".vcrole"
      ],
      "Description": "Sets or resets a role which will be given to users who join the voice channel you're in when you run this command. Provide no role name to disable. You must be in a voice channel to run this command.",
      "Usage": [
        ".vcrole SomeRole",
        ".vcrole"
      ],
      "Submodule": "VcRoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".vcrolelist"
      ],
      "Description": "Shows a list of currently set voice channel roles.",
      "Usage": [
        ".vcrolelist"
      ],
      "Submodule": "VcRoleCommands",
      "Module": "Administration",
      "Options": null,
      "Requirements": []
    }
  ],
  "CustomReactions": [
    {
      "Aliases": [
        ".addcustreact",
        ".acr"
      ],
      "Description": "Add a custom reaction with a trigger and a response. Running this command in server requires the Administration permission. Running this command in DM is Bot Owner only and adds a new global custom reaction. Guide here: <http://nadekobot.readthedocs.io/en/latest/Custom%20Reactions/>",
      "Usage": [
        ".acr \"hello\" Hi there %user%"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".editcustreact",
        ".ecr"
      ],
      "Description": "Edits the custom reaction's response given its ID.",
      "Usage": [
        ".ecr 123 I'm a magical girl"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listcustreact",
        ".lcr"
      ],
      "Description": "Lists global or server custom reactions (20 commands per page). Running the command in DM will list global custom reactions, while running it in server will list that server's custom reactions. Specifying `all` parameter instead of the number will DM you a text file with a list of all custom reactions.",
      "Usage": [
        ".lcr 1",
        ".lcr all"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listcustreactg",
        ".lcrg"
      ],
      "Description": "Lists global or server custom reactions (20 commands per page) grouped by trigger, and show a number of responses for each. Running the command in DM will list global custom reactions, while running it in server will list that server's custom reactions.",
      "Usage": [
        ".lcrg 1"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".showcustreact",
        ".scr"
      ],
      "Description": "Shows a custom reaction's response on a given ID.",
      "Usage": [
        ".scr 1"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".delcustreact",
        ".dcr"
      ],
      "Description": "Deletes a custom reaction on a specific index. If ran in DM, it is bot owner only and deletes a global custom reaction. If ran in a server, it requires Administration privileges and removes server custom reaction.",
      "Usage": [
        ".dcr 5"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".crca"
      ],
      "Description": "Toggles whether the custom reaction will trigger if the triggering message contains the keyword (instead of only starting with it).",
      "Usage": [
        ".crca 44"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".crdm"
      ],
      "Description": "Toggles whether the response message of the custom reaction will be sent as a direct message.",
      "Usage": [
        ".crdm 44"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".crad"
      ],
      "Description": "Toggles whether the message triggering the custom reaction will be automatically deleted.",
      "Usage": [
        ".crad 59"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".crsreload"
      ],
      "Description": "Reloads all custom reactions on all shards. Use this if you've made changes to the database while the bot is running, or used `.deleteunusedcrnq`",
      "Usage": [
        ".crsreload"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".crclear"
      ],
      "Description": "Deletes all custom reactions on this server.",
      "Usage": [
        ".crclear"
      ],
      "Submodule": "CustomReactions",
      "Module": "CustomReactions",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    }
  ],
  "Gambling": [
    {
      "Aliases": [
        ".economy"
      ],
      "Description": "Breakdown of the current state of the bot's economy. Updates every 3 minutes.",
      "Usage": [
        ".economy"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".timely"
      ],
      "Description": "Use to claim your 'timely' currency. Bot owner has to specify the amount and the period on how often you can claim your currency.",
      "Usage": [
        ".timely"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".timelyreset"
      ],
      "Description": "Resets all user timeouts on `.timely` command.",
      "Usage": [
        ".timelyreset"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".timelyset"
      ],
      "Description": "Sets the 'timely' currency allowance amount for users. Second parameter is period in hours, default is 24 hours.",
      "Usage": [
        ".timelyset 100",
        ".timelyset 50 12"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".raffle"
      ],
      "Description": "Prints a name and ID of a random online user from the server, or from the online user in the specified role.",
      "Usage": [
        ".raffle",
        ".raffle RoleName"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".raffleany"
      ],
      "Description": "Prints a name and ID of a random user from the server, or from the specified role.",
      "Usage": [
        ".raffleany",
        ".raffleany  RoleName"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".$",
        ".currency",
        ".$$",
        ".$$$",
        ".cash",
        ".cur"
      ],
      "Description": "Check how much currency a person has. (Defaults to yourself)",
      "Usage": [
        ".$",
        ".$ @SomeGuy"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".curtrs"
      ],
      "Description": "Shows your currency transactions on the specified page. Bot owner can see other people's transactions too.",
      "Usage": [
        ".curtrs 2",
        ".curtrs @SomeUser 2"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".give"
      ],
      "Description": "Give someone a certain amount of currency. You can specify the reason after the mention.",
      "Usage": [
        ".give 1 @SomeGuy",
        ".give 5 @CootGurl Ur so pwetty"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".award"
      ],
      "Description": "Awards someone a certain amount of currency. You can specify the reason after the Username. You can also specify a role name to award currency to all users in a role.",
      "Usage": [
        ".award 100 @person",
        ".award 5 Role Of Gamblers"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".take"
      ],
      "Description": "Takes a certain amount of currency from someone.",
      "Usage": [
        ".take 1 @SomeGuy"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".rollduel"
      ],
      "Description": "Challenge someone to a roll duel by specifying the amount and the user you wish to challenge as the parameters. To accept the challenge, just specify the name of the user who challenged you, without the amount.",
      "Usage": [
        ".rollduel 50 @SomeGuy",
        ".rollduel @Challenger"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".betroll",
        ".br"
      ],
      "Description": "Bets a certain amount of currency and rolls a dice. Rolling over 66 yields x2 of your currency, over 90 - x4 and 100 x10.",
      "Usage": [
        ".br 5"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".leaderboard",
        ".lb"
      ],
      "Description": "Displays the bot's currency leaderboard.",
      "Usage": [
        ".lb"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rps"
      ],
      "Description": "Play a game of Rocket-Paperclip-Scissors with Nadeko. You can bet on it. Multiplier is the same as on betflip.",
      "Usage": [
        ".rps r 100",
        ".rps scissors"
      ],
      "Submodule": "Gambling",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".race"
      ],
      "Description": "Starts a new animal race.",
      "Usage": [
        ".race"
      ],
      "Submodule": "AnimalRacingCommands",
      "Module": "Gambling",
      "Options": "`--start-time` (`-s`)     ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".joinrace",
        ".jr"
      ],
      "Description": "Joins a new race. You can specify an amount of currency for betting (optional). You will get YourBet*(participants-1) back if you win.",
      "Usage": [
        ".jr",
        ".jr 5"
      ],
      "Submodule": "AnimalRacingCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".blackjack",
        ".bj"
      ],
      "Description": "Start or join a blackjack game. You must specify the amount you're betting. Use `.hit`, `.stand` and `.double` commands to play. Game is played with 4 decks. Dealer hits on soft 17 and wins draws.",
      "Usage": [
        ".bj 50"
      ],
      "Submodule": "BlackJackCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hit"
      ],
      "Description": "In the blackjack game, ask the dealer for an extra card.",
      "Usage": [
        ".hit"
      ],
      "Submodule": "BlackJackCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".stand"
      ],
      "Description": "Finish your turn in the blackjack game.",
      "Usage": [
        ".stand"
      ],
      "Submodule": "BlackJackCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".double"
      ],
      "Description": "In the blackjack game, double your bet in order to receive exactly one more card, and your turn ends.",
      "Usage": [
        ".double"
      ],
      "Submodule": "BlackJackCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".connect4",
        ".con4"
      ],
      "Description": "Creates or joins an existing connect4 game. 2 players are required for the game. Objective of the game is to get 4 of your pieces next to each other in a vertical, horizontal or diagonal line. You can specify a bet when you create a game and only users who bet the same amount will be able to join your game.",
      "Usage": [
        ".connect4"
      ],
      "Submodule": "Connect4Commands",
      "Module": "Gambling",
      "Options": "`--turn-timer` (`-t`)   Turn time in seconds. It has to be between 5 and 60. Default 15.  \n`--bet` (`-b`)   Amount you bet. Default 0.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".eventstart"
      ],
      "Description": "Starts one of the events seen on public nadeko. Events: `reaction`, `gamestatus`",
      "Usage": [
        ".eventstart reaction",
        ".eventstart reaction -d 1 -a 50 --pot-size 1500"
      ],
      "Submodule": "CurrencyEventsCommands",
      "Module": "Gambling",
      "Options": "`--amount` (`-a`)   Amount of currency each user receives.  \n`--pot-size` (`-p`)   The maximum amount of currency that can be rewarded. 0 means no limit.  \n`--duration` (`-d`)   Number of hours the event should run for. Default 24.  ",
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".rafflecur"
      ],
      "Description": "Starts or joins a currency raffle with a specified amount. Users who join the raffle will lose the amount of currency specified and add it to the pot. After 30 seconds, random winner will be selected who will receive the whole pot. There is also a `mixed` mode in which the users will be able to join the game with any amount of currency, and have their chances be proportional to the amount they've bet.",
      "Usage": [
        ".rafflecur 20",
        ".rafflecur mixed 15"
      ],
      "Submodule": "CurrencyRaffleCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".roll"
      ],
      "Description": "Rolls 0-100. If you supply a number `X` it rolls up to 30 normal dice. If you split 2 numbers with letter `d` (`xdy`) it will roll `X` dice from 1 to `y`. `Y` can be a letter 'F' if you want to roll fate dice instead of dnd.",
      "Usage": [
        ".roll",
        ".roll 7",
        ".roll 3d5",
        ".roll 5dF"
      ],
      "Submodule": "DiceRollCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rolluo"
      ],
      "Description": "Rolls `X` normal dice (up to 30) unordered. If you split 2 numbers with letter `d` (`xdy`) it will roll `X` dice from 1 to `y`.",
      "Usage": [
        ".rolluo",
        ".rolluo 7",
        ".rolluo 3d5"
      ],
      "Submodule": "DiceRollCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".nroll"
      ],
      "Description": "Rolls in a given range. If you specify just one number instead of the range, it will role from 0 to that number.",
      "Usage": [
        ".nroll 5",
        ".nroll 5-15"
      ],
      "Submodule": "DiceRollCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".draw"
      ],
      "Description": "Draws a card from this server's deck. You can draw up to 10 cards by supplying a number of cards to draw.",
      "Usage": [
        ".draw",
        ".draw 5"
      ],
      "Submodule": "DrawCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".drawnew"
      ],
      "Description": "Draws a card from the NEW deck of cards. You can draw up to 10 cards by supplying a number of cards to draw.",
      "Usage": [
        ".drawnew",
        ".drawnew 5"
      ],
      "Submodule": "DrawCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".deckshuffle",
        ".dsh"
      ],
      "Description": "Reshuffles all cards back into the deck.",
      "Usage": [
        ".dsh"
      ],
      "Submodule": "DrawCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".flip"
      ],
      "Description": "Flips coin(s) - heads or tails, and shows an image.",
      "Usage": [
        ".flip",
        ".flip 3"
      ],
      "Submodule": "FlipCoinCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".betflip",
        ".bf"
      ],
      "Description": "Bet to guess will the result be heads or tails. Guessing awards you 1.95x the currency you've bet (rounded up). Multiplier can be changed by the bot owner.",
      "Usage": [
        ".bf 5 heads",
        ".bf 3 t"
      ],
      "Submodule": "FlipCoinCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".shop"
      ],
      "Description": "Lists this server's administrators' shop. Paginated.",
      "Usage": [
        ".shop",
        ".shop 2"
      ],
      "Submodule": "FlowerShopCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".buy"
      ],
      "Description": "Buys an item from the shop on a given index. If buying items, make sure that the bot can DM you.",
      "Usage": [
        ".buy 2"
      ],
      "Submodule": "FlowerShopCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".shopadd"
      ],
      "Description": "Adds an item to the shop by specifying type price and name. Available types are role and list. 90% of currency from each purchase will be received by the user who added the item to the shop.",
      "Usage": [
        ".shopadd role 1000 Rich"
      ],
      "Submodule": "FlowerShopCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".shoplistadd"
      ],
      "Description": "Adds an item to the list of items for sale in the shop entry given the index. You usually want to run this command in the secret channel, so that the unique items are not leaked.",
      "Usage": [
        ".shoplistadd 1 Uni-que-Steam-Key"
      ],
      "Submodule": "FlowerShopCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".shoprem",
        ".shoprm"
      ],
      "Description": "Removes an item from the shop by its ID.",
      "Usage": [
        ".shoprm 1"
      ],
      "Submodule": "FlowerShopCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".slotstats"
      ],
      "Description": "Shows the total stats of the slot command for this bot's session.",
      "Usage": [
        ".slotstats"
      ],
      "Submodule": "SlotCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".slottest"
      ],
      "Description": "Tests to see how much slots payout for X number of plays.",
      "Usage": [
        ".slottest 1000"
      ],
      "Submodule": "SlotCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".slot"
      ],
      "Description": "Play Nadeko slots. Max bet is 9999. 1.5 second cooldown per user.",
      "Usage": [
        ".slot 5"
      ],
      "Submodule": "SlotCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".waifureset"
      ],
      "Description": "Resets your waifu stats, except current waifus.",
      "Usage": [
        ".waifureset"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".claimwaifu",
        ".claim"
      ],
      "Description": "Claim a waifu for yourself by spending currency.  You must spend at least 10% more than her current value unless she set `.affinity` towards you.",
      "Usage": [
        ".claim 50 @Himesama"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".waifutransfer"
      ],
      "Description": "Transfer the ownership of one of your waifus to another user. You must pay 10% of your waifu's value.",
      "Usage": [
        ".waifutransfer @ExWaifu @NewOwner"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".divorce"
      ],
      "Description": "Releases your claim on a specific waifu. You will get some of the money you've spent back unless that waifu has an affinity towards you. 6 hours cooldown.",
      "Usage": [
        ".divorce @CheatingSloot"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".affinity"
      ],
      "Description": "Sets your affinity towards someone you want to be claimed by. Setting affinity will reduce their `.claim` on you by 20%. Provide no parameters to clear your affinity. 30 minutes cooldown.",
      "Usage": [
        ".affinity @MyHusband",
        ".affinity"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".waifus",
        ".waifulb"
      ],
      "Description": "Shows top 9 waifus. You can specify another page to show other waifus.",
      "Usage": [
        ".waifus",
        ".waifulb 3"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".waifuinfo",
        ".waifustats"
      ],
      "Description": "Shows waifu stats for a target person. Defaults to you if no user is provided.",
      "Usage": [
        ".waifuinfo @MyCrush",
        ".waifuinfo"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".waifugift",
        ".gift",
        ".gifts"
      ],
      "Description": "Gift an item to someone. This will increase their waifu value by 50% of the gifted item's value if you are not their waifu, or 95% if you are. Provide no parameters to see a list of items that you can gift.",
      "Usage": [
        ".gifts",
        ".gift Rose @Himesama"
      ],
      "Submodule": "WaifuClaimCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".wheeloffortune",
        ".wheel"
      ],
      "Description": "Bets a certain amount of currency on the wheel of fortune. Wheel can stop on one of many different multipliers. Won amount is rounded down to the nearest whole number.",
      "Usage": [
        ".wheel 10"
      ],
      "Submodule": "WheelOfFortuneCommands",
      "Module": "Gambling",
      "Options": null,
      "Requirements": []
    }
  ],
  "Games": [
    {
      "Aliases": [
        ".choose"
      ],
      "Description": "Chooses a thing from a list of things",
      "Usage": [
        ".choose Get up;Sleep;Sleep more"
      ],
      "Submodule": "Games",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".8ball"
      ],
      "Description": "Ask the 8ball a yes/no question.",
      "Usage": [
        ".8ball Is b1nzy a nice guy?"
      ],
      "Submodule": "Games",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rategirl"
      ],
      "Description": "Use the universal hot-crazy wife zone matrix to determine the girl's worth. It is everything young men need to know about women. At any moment in time, any woman you have previously located on this chart can vanish from that location and appear anywhere else on the chart.",
      "Usage": [
        ".rategirl @SomeGurl"
      ],
      "Submodule": "Games",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".linux"
      ],
      "Description": "Prints a customizable Linux interjection",
      "Usage": [
        ".linux Spyware Windows"
      ],
      "Submodule": "Games",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".acrophobia",
        ".acro"
      ],
      "Description": "Starts an Acrophobia game.",
      "Usage": [
        ".acro",
        ".acro -s 30"
      ],
      "Submodule": "AcropobiaCommands",
      "Module": "Games",
      "Options": "`--submission-time` (`-s`)   Time after which the submissions are closed and voting starts.  \n`--vote-time` (`-v`)   Time after which the voting is closed and the winner is declared.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".cleverbot"
      ],
      "Description": "Toggles cleverbot session. When enabled, the bot will reply to messages starting with bot mention in the server. Custom reactions starting with %mention% won't work if cleverbot is enabled.",
      "Usage": [
        ".cleverbot"
      ],
      "Submodule": "ChatterBotCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".hangmanlist"
      ],
      "Description": "Shows a list of hangman term types.",
      "Usage": [
        ".hangmanlist"
      ],
      "Submodule": "HangmanCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hangman"
      ],
      "Description": "Starts a game of hangman in the channel. Use `.hangmanlist` to see a list of available term types. Defaults to 'all'.",
      "Usage": [
        ".hangman",
        ".hangman movies"
      ],
      "Submodule": "HangmanCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hangmanstop"
      ],
      "Description": "Stops the active hangman game on this channel if it exists.",
      "Usage": [
        ".hangmanstop"
      ],
      "Submodule": "HangmanCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".nunchi"
      ],
      "Description": "Creates or joins an existing nunchi game. Users have to count up by 1 from the starting number shown by the bot. If someone makes a mistake (types an incorrect number, or repeats the same number) they are out of the game and a new round starts without them.  Minimum 3 users required.",
      "Usage": [
        ".nunchi"
      ],
      "Submodule": "NunchiCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pick"
      ],
      "Description": "Picks the currency planted in this channel. If the plant has a password, you need to specify it.",
      "Usage": [
        ".pick",
        ".pick passwd"
      ],
      "Submodule": "PlantPickCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".plant"
      ],
      "Description": "Spend an amount of currency to plant it in this channel. Default is 1. You can specify the password after the amount. Password has to be alphanumeric and it will be trimmed down to 10 characters if it's longer.",
      "Usage": [
        ".plant 5",
        ".plant 10 meow"
      ],
      "Submodule": "PlantPickCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".gencurrency",
        ".gc"
      ],
      "Description": "Toggles currency generation on this channel. Every posted message will have chance to spawn currency. Chance is specified by the Bot Owner. (default is 2%)",
      "Usage": [
        ".gc"
      ],
      "Submodule": "PlantPickCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".gencurlist",
        ".gclist"
      ],
      "Description": "Shows the list of server and channel ids where gc is enabled. Paginated with 9 per page.",
      "Usage": [
        ".gclist"
      ],
      "Submodule": "PlantPickCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".poll",
        ".ppoll"
      ],
      "Description": "Creates a public poll which requires users to type a number of the voting option in the channel command is ran in.",
      "Usage": [
        ".ppoll Question?;Answer1;Answ 2;A_3"
      ],
      "Submodule": "PollCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".pollstats"
      ],
      "Description": "Shows the poll results without stopping the poll on this server.",
      "Usage": [
        ".pollstats"
      ],
      "Submodule": "PollCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".pollend"
      ],
      "Description": "Stops active poll on this server and prints the results in this channel.",
      "Usage": [
        ".pollend"
      ],
      "Submodule": "PollCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".typestart"
      ],
      "Description": "Starts a typing contest.",
      "Usage": [
        ".typestart"
      ],
      "Submodule": "SpeedTypingCommands",
      "Module": "Games",
      "Options": "`--start-time` (`-s`)   How long does it take for the race to start. Default 5.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".typestop"
      ],
      "Description": "Stops a typing contest on the current channel.",
      "Usage": [
        ".typestop"
      ],
      "Submodule": "SpeedTypingCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".typeadd"
      ],
      "Description": "Adds a new article to the typing contest.",
      "Usage": [
        ".typeadd wordswords"
      ],
      "Submodule": "SpeedTypingCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".typelist"
      ],
      "Description": "Lists added typing articles with their IDs. 15 per page.",
      "Usage": [
        ".typelist",
        ".typelist 3"
      ],
      "Submodule": "SpeedTypingCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".typedel"
      ],
      "Description": "Deletes a typing article given the ID.",
      "Usage": [
        ".typedel 3"
      ],
      "Submodule": "SpeedTypingCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".tictactoe",
        ".ttt"
      ],
      "Description": "Starts a game of tic tac toe. Another user must run the command in the same channel in order to accept the challenge. Use numbers 1-9 to play.",
      "Usage": [
        ".ttt"
      ],
      "Submodule": "TicTacToeCommands",
      "Module": "Games",
      "Options": "`--turn-timer` (`-t`)   Turn time in seconds. Default 15.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".trivia",
        ".t"
      ],
      "Description": "Starts a game of trivia. You can add `nohint` to prevent hints. First player to get to 10 points wins by default. You can specify a different number. 30 seconds per question.",
      "Usage": [
        ".t",
        ".t --timeout 5 -p -w 3 -q 10"
      ],
      "Submodule": "TriviaCommands",
      "Module": "Games",
      "Options": "`--pokemon` (`-p`)   Whether it's 'Who's that pokemon?' trivia.  \n`--nohint`   Don't show any hints.  \n`--win-req` (`-w`)   Winning requirement. Set 0 for an infinite game. Default 10.  \n`--question-timer` (`-q`)   How long until the question ends. Default 30.  \n`--timeout` (`-t`)   Number of questions of inactivity in order stop. Set 0 for never. Default 10.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".tl"
      ],
      "Description": "Shows a current trivia leaderboard.",
      "Usage": [
        ".tl"
      ],
      "Submodule": "TriviaCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".tq"
      ],
      "Description": "Quits current trivia after current question.",
      "Usage": [
        ".tq"
      ],
      "Submodule": "TriviaCommands",
      "Module": "Games",
      "Options": null,
      "Requirements": []
    }
  ],
  "Help": [
    {
      "Aliases": [
        ".modules",
        ".mdls"
      ],
      "Description": "Lists all bot modules.",
      "Usage": [
        ".modules"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".commands",
        ".cmds"
      ],
      "Description": "List all of the bot's commands from a certain module. You can either specify the full name or only the first few letters of the module name.",
      "Usage": [
        ".cmds Admin",
        ".cmds Admin --view 1"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": "`--view` (`-v`)   Specifies how to output the list of commands. 0 - Hide commands which you can't use, 1 - Cross out commands which you can't use, 2 - Show all.  ",
      "Requirements": []
    },
    {
      "Aliases": [
        ".help",
        ".h"
      ],
      "Description": "Either shows a help for a single command, or DMs you help link if no parameters are specified.",
      "Usage": [
        ".h .cmds",
        ".h"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hgit"
      ],
      "Description": "Generates the commandlist.md file.",
      "Usage": [
        ".hgit"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".readme",
        ".guide"
      ],
      "Description": "Sends a readme and a guide links to the channel.",
      "Usage": [
        ".readme",
        ".guide"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".donate"
      ],
      "Description": "Instructions for helping the project financially.",
      "Usage": [
        ".donate"
      ],
      "Submodule": "Help",
      "Module": "Help",
      "Options": null,
      "Requirements": []
    }
  ],
  "Music": [
    {
      "Aliases": [
        ".play",
        ".start"
      ],
      "Description": "If no parameters are specified, acts as `.next 1` command. If you specify a song number, it will jump to that song. If you specify a search query, acts as a `.q` command",
      "Usage": [
        ".play",
        ".play 5",
        ".play Dream Of Venice"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".queue",
        ".q",
        ".yq"
      ],
      "Description": "Queue a song using keywords or a link. Bot will join your voice channel. **You must be in a voice channel**.",
      "Usage": [
        ".q Dream Of Venice"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".queuenext",
        ".qn"
      ],
      "Description": "Works the same as `.queue` command, except it enqueues the new song after the current one. **You must be in a voice channel**.",
      "Usage": [
        ".qn Dream Of Venice"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".queuesearch",
        ".qs",
        ".yqs"
      ],
      "Description": "Search for top 5 youtube song result using keywords, and type the index of the song to play that song. Bot will join your voice channel. **You must be in a voice channel**.",
      "Usage": [
        ".qs Dream Of Venice"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listqueue",
        ".lq"
      ],
      "Description": "Lists 10 currently queued songs per page. Default page is 1.",
      "Usage": [
        ".lq",
        ".lq 2"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".next",
        ".n"
      ],
      "Description": "Goes to the next song in the queue. You have to be in the same voice channel as the bot. You can skip multiple songs, but in that case songs will not be requeued if .rcs or .rpl is enabled.",
      "Usage": [
        ".n",
        ".n 5"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".stop",
        ".s"
      ],
      "Description": "Stops the music and preserves the current song index. Stays in the channel.",
      "Usage": [
        ".s"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".autodisconnect",
        ".autodc"
      ],
      "Description": "Toggles whether the bot should disconnect from the voice channel once it's done playing all of the songs.",
      "Usage": [
        ".autodc"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".destroy",
        ".d"
      ],
      "Description": "Completely stops the music and unbinds the bot from the channel. (may cause weird behaviour)",
      "Usage": [
        ".d"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pause",
        ".p"
      ],
      "Description": "Pauses or Unpauses the song.",
      "Usage": [
        ".p"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".volume",
        ".vol"
      ],
      "Description": "Sets the music playback volume (0-100%)",
      "Usage": [
        ".vol 50"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".defvol",
        ".dv"
      ],
      "Description": "Sets the default music volume when music playback is started (0-100). Persists through restarts.",
      "Usage": [
        ".dv 80"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".songremove",
        ".srm"
      ],
      "Description": "Remove a song by its # in the queue, or 'all' to remove all songs from the queue and reset the song index.",
      "Usage": [
        ".srm 5"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".playlists",
        ".pls"
      ],
      "Description": "Lists all playlists. Paginated, 20 per page.",
      "Usage": [
        ".pls 1"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".deleteplaylist",
        ".delpls"
      ],
      "Description": "Deletes a saved playlist using its id. Works only if you made it or if you are the bot owner.",
      "Usage": [
        ".delpls 5"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".playlistshow",
        ".plshow"
      ],
      "Description": "Lists all songs in a playlist spepcified by its id. Paginated, 20 per page.",
      "Usage": [
        ".plshow 1"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".save"
      ],
      "Description": "Saves a playlist under a certain name. Playlist name must be no longer than 20 characters and must not contain dashes.",
      "Usage": [
        ".save classical1"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".load"
      ],
      "Description": "Loads a saved playlist using its ID. Use `.pls` to list all saved playlists and `.save` to save new ones.",
      "Usage": [
        ".load 5"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".fairplay",
        ".fp"
      ],
      "Description": "Toggles fairplay. While enabled, the bot will prioritize songs from users who didn't have their song recently played instead of the song's position in the queue.",
      "Usage": [
        ".fp"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".songautodelete",
        ".sad"
      ],
      "Description": "Toggles whether the song should be automatically removed from the music queue when it finishes playing.",
      "Usage": [
        ".sad"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".soundcloudqueue",
        ".sq"
      ],
      "Description": "Queue a soundcloud song using keywords. Bot will join your voice channel. **You must be in a voice channel**.",
      "Usage": [
        ".sq Dream Of Venice"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".soundcloudpl",
        ".scpl"
      ],
      "Description": "Queue a Soundcloud playlist using a link.",
      "Usage": [
        ".scpl soundcloudseturl"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".nowplaying",
        ".np"
      ],
      "Description": "Shows the song that the bot is currently playing.",
      "Usage": [
        ".np"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".shuffle",
        ".sh",
        ".plsh"
      ],
      "Description": "Shuffles the current playlist.",
      "Usage": [
        ".plsh"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".playlist",
        ".pl"
      ],
      "Description": "Queues up to 500 songs from a youtube playlist specified by a link, or keywords.",
      "Usage": [
        ".pl <youtube_playlist_link>"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".radio",
        ".ra"
      ],
      "Description": "Queues a radio stream from a link. It can be a direct mp3 radio stream, .m3u, .pls .asx or .xspf (Usage Video: <https://streamable.com/al54>)",
      "Usage": [
        ".ra radio link here"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".local",
        ".lo"
      ],
      "Description": "Queues a local file by specifying a full path.",
      "Usage": [
        ".lo C:/music/mysong.mp3"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".localplaylst",
        ".lopl"
      ],
      "Description": "Queues all songs from a directory.",
      "Usage": [
        ".lopl C:/music/classical"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".move",
        ".mv"
      ],
      "Description": "Moves the bot to your voice channel. (works only if music is already playing)",
      "Usage": [
        ".mv"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".movesong",
        ".ms"
      ],
      "Description": "Moves a song from one position to another.",
      "Usage": [
        ".ms 5>3"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".setmaxqueue",
        ".smq"
      ],
      "Description": "Sets a maximum queue size. Specify no parameters to have no limit.",
      "Usage": [
        ".smq 50",
        ".smq"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".setmaxplaytime",
        ".smp"
      ],
      "Description": "Sets a maximum number of seconds (>14) a song can run before being skipped automatically. Set 0 to have no limit.",
      "Usage": [
        ".smp 0",
        ".smp 270"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".reptcursong",
        ".rcs"
      ],
      "Description": "Toggles repeat of current song.",
      "Usage": [
        ".rcs"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rpeatplaylst",
        ".rpl"
      ],
      "Description": "Toggles repeat of all songs in the queue (every song that finishes is added to the end of the queue).",
      "Usage": [
        ".rpl"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".autoplay",
        ".ap"
      ],
      "Description": "Toggles autoplay - When the song is finished, automatically queue a related Youtube song. (Works only for Youtube songs and when queue is empty)",
      "Usage": [
        ".ap"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".setmusicchannel",
        ".smch"
      ],
      "Description": "Sets the current channel as the default music output channel. This will output playing, finished, paused and removed songs to that channel instead of the channel where the first song was queued in.",
      "Usage": [
        ".smch"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".unsetmusicchannel",
        ".usmch"
      ],
      "Description": "Bot will output playing, finished, paused and removed songs to the channel where the first song was queued in.",
      "Usage": [
        ".smch"
      ],
      "Submodule": "Music",
      "Module": "Music",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    }
  ],
  "NSFW": [
    {
      "Aliases": [
        ".autohentai"
      ],
      "Description": "Posts a hentai every X seconds with a random tag from the provided tags. Use `|` to separate tag groups. Random group will be chosen every time the image is sent. Use `+` for multiple tags (max 2 per group). 20 seconds minimum. Provide no parameters to disable.",
      "Usage": [
        ".autohentai 30 yuri+kissing|tail+long_hair",
        ".autohentai"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": [
        "ManageMessages Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".autoboobs"
      ],
      "Description": "Posts a boobs every X seconds. 20 seconds minimum. Provide no parameters to disable.",
      "Usage": [
        ".autoboobs 30",
        ".autoboobs"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": [
        "ManageMessages Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".autobutts"
      ],
      "Description": "Posts a butt every X seconds. 20 seconds minimum. Provide no parameters to disable.",
      "Usage": [
        ".autobutts 30",
        ".autobutts"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": [
        "ManageMessages Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".hentai"
      ],
      "Description": "Shows a hentai image from a random website (gelbooru, danbooru, konachan or yandere) with a given tag. Tag is optional but preferred. Only 1 tag allowed.",
      "Usage": [
        ".hentai yuri"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hentaibomb"
      ],
      "Description": "Shows a total 5 images (from gelbooru, danbooru, konachan, yandere and atfbooru). Tag is optional but preferred.",
      "Usage": [
        ".hentaibomb yuri"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".yandere"
      ],
      "Description": "Shows a random image from yandere with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".yandere tag1+tag2"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".konachan"
      ],
      "Description": "Shows a random hentai image from konachan with a given tag. Tag is optional but preferred.",
      "Usage": [
        ".konachan yuri"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".e621"
      ],
      "Description": "Shows a random hentai image from e621.net with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".e621 yuri+kissing"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rule34"
      ],
      "Description": "Shows a random image from rule34.xx with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".rule34 yuri+kissing"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".danbooru"
      ],
      "Description": "Shows a random hentai image from danbooru with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".danbooru yuri+kissing"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".gelbooru"
      ],
      "Description": "Shows a random hentai image from gelbooru with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".gelbooru yuri+kissing"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".derpibooru",
        ".derpi"
      ],
      "Description": "Shows a random image from derpibooru with a given tag. Tag is optional but preferred.",
      "Usage": [
        ".derpi yuri+kissing"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".boobs"
      ],
      "Description": "Real adult content.",
      "Usage": [
        ".boobs"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".butts",
        ".ass",
        ".butt"
      ],
      "Description": "Real adult content.",
      "Usage": [
        ".butts",
        ".ass"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".nsfwtagbl",
        ".nsfwtbl"
      ],
      "Description": "Toggles whether the tag is blacklisted or not in nsfw searches. Provide no parameters to see the list of blacklisted tags.",
      "Usage": [
        ".nsfwtbl poop"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".nsfwcc"
      ],
      "Description": "Clears nsfw cache.",
      "Usage": [
        ".nsfwcc"
      ],
      "Submodule": "NSFW",
      "Module": "NSFW",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    }
  ],
  "Permissions": [
    {
      "Aliases": [
        ".verbose",
        ".v"
      ],
      "Description": "Sets whether to show when a command/module is blocked.",
      "Usage": [
        ".verbose true"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".permrole",
        ".pr"
      ],
      "Description": "Sets a role which can change permissions. Supply no parameters to see the current one. Type 'reset' instead of the role name to reset the currently set permission role. Users with Administrator server permissions can use permission commands regardless of whether they have the specified role. There is no default permission role.",
      "Usage": [
        ".pr Some Role",
        ".pr reset"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".listperms",
        ".lp"
      ],
      "Description": "Lists whole permission chain with their indexes. You can specify an optional page number if there are a lot of permissions.",
      "Usage": [
        ".lp",
        ".lp 3"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".removeperm",
        ".rp"
      ],
      "Description": "Removes a permission from a given position in the Permissions list.",
      "Usage": [
        ".rp 1"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".moveperm",
        ".mp"
      ],
      "Description": "Moves permission from one position to another in the Permissions list.",
      "Usage": [
        ".mp 2 4"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".srvrcmd",
        ".sc"
      ],
      "Description": "Sets a command's permission at the server level.",
      "Usage": [
        ".sc \"command name\" disable"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".srvrmdl",
        ".sm"
      ],
      "Description": "Sets a module's permission at the server level.",
      "Usage": [
        ".sm ModuleName enable"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".usrcmd",
        ".uc"
      ],
      "Description": "Sets a command's permission at the user level.",
      "Usage": [
        ".uc \"command name\" enable SomeUsername"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".usrmdl",
        ".um"
      ],
      "Description": "Sets a module's permission at the user level.",
      "Usage": [
        ".um ModuleName enable SomeUsername"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rolecmd",
        ".rc"
      ],
      "Description": "Sets a command's permission at the role level.",
      "Usage": [
        ".rc \"command name\" disable MyRole"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rolemdl",
        ".rm"
      ],
      "Description": "Sets a module's permission at the role level.",
      "Usage": [
        ".rm ModuleName enable MyRole"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".chnlcmd",
        ".cc"
      ],
      "Description": "Sets a command's permission at the channel level.",
      "Usage": [
        ".cc \"command name\" enable SomeChannel"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".chnlmdl",
        ".cm"
      ],
      "Description": "Sets a module's permission at the channel level.",
      "Usage": [
        ".cm ModuleName enable SomeChannel"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".allchnlmdls",
        ".acm"
      ],
      "Description": "Enable or disable all modules in a specified channel.",
      "Usage": [
        ".acm enable #SomeChannel"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".allrolemdls",
        ".arm"
      ],
      "Description": "Enable or disable all modules for a specific role.",
      "Usage": [
        ".arm [enable/disable] MyRole"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".allusrmdls",
        ".aum"
      ],
      "Description": "Enable or disable all modules for a specific user.",
      "Usage": [
        ".aum enable @someone"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".allsrvrmdls",
        ".asm"
      ],
      "Description": "Enable or disable all modules for your server.",
      "Usage": [
        ".asm [enable/disable]"
      ],
      "Submodule": "Permissions",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".ubl"
      ],
      "Description": "Either [add]s or [rem]oves a user specified by a Mention or an ID from a blacklist.",
      "Usage": [
        ".ubl add @SomeUser",
        ".ubl rem 12312312313"
      ],
      "Submodule": "BlacklistCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".cbl"
      ],
      "Description": "Either [add]s or [rem]oves a channel specified by an ID from a blacklist.",
      "Usage": [
        ".cbl rem 12312312312"
      ],
      "Submodule": "BlacklistCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".sbl"
      ],
      "Description": "Either [add]s or [rem]oves a server specified by a Name or an ID from a blacklist.",
      "Usage": [
        ".sbl add 12312321312",
        ".sbl rem SomeTrashServer"
      ],
      "Submodule": "BlacklistCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".cmdcooldown",
        ".cmdcd"
      ],
      "Description": "Sets a cooldown per user for a command. Set it to 0 to remove the cooldown.",
      "Usage": [
        ".cmdcd \"some cmd\" 5"
      ],
      "Submodule": "CmdCdsCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".allcmdcooldowns",
        ".acmdcds"
      ],
      "Description": "Shows a list of all commands and their respective cooldowns.",
      "Usage": [
        ".acmdcds"
      ],
      "Submodule": "CmdCdsCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".fwclear"
      ],
      "Description": "Deletes all filtered words on this server.",
      "Usage": [
        ".fwclear"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".srvrfilterinv",
        ".sfi"
      ],
      "Description": "Toggles automatic deletion of invites posted in the server. Does not affect the Bot Owner.",
      "Usage": [
        ".sfi"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".chnlfilterinv",
        ".cfi"
      ],
      "Description": "Toggles automatic deletion of invites posted in the channel. Does not negate the `.srvrfilterinv` enabled setting. Does not affect the Bot Owner.",
      "Usage": [
        ".cfi"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".srvrfilterwords",
        ".sfw"
      ],
      "Description": "Toggles automatic deletion of messages containing filtered words on the server. Does not affect the Bot Owner.",
      "Usage": [
        ".sfw"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".chnlfilterwords",
        ".cfw"
      ],
      "Description": "Toggles automatic deletion of messages containing filtered words on the channel. Does not negate the `.srvrfilterwords` enabled setting. Does not affect the Bot Owner.",
      "Usage": [
        ".cfw"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".fw"
      ],
      "Description": "Adds or removes (if it exists) a word from the list of filtered words. Use`.sfw` or `.cfw` to toggle filtering.",
      "Usage": [
        ".fw poop"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".lstfilterwords",
        ".lfw"
      ],
      "Description": "Shows a list of filtered words.",
      "Usage": [
        ".lfw"
      ],
      "Submodule": "FilterCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listglobalperms",
        ".lgp"
      ],
      "Description": "Lists global permissions set by the bot owner.",
      "Usage": [
        ".lgp"
      ],
      "Submodule": "GlobalPermissionCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".globalmodule",
        ".gmod"
      ],
      "Description": "Toggles whether a module can be used on any server.",
      "Usage": [
        ".gmod nsfw"
      ],
      "Submodule": "GlobalPermissionCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".globalcommand",
        ".gcmd"
      ],
      "Description": "Toggles whether a command can be used on any server.",
      "Usage": [
        ".gcmd .stats"
      ],
      "Submodule": "GlobalPermissionCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".resetperms"
      ],
      "Description": "Resets the bot's permissions module on this server to the default value.",
      "Usage": [
        ".resetperms"
      ],
      "Submodule": "ResetPermissionsCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".resetglobalperms"
      ],
      "Description": "Resets global permissions set by bot owner.",
      "Usage": [
        ".resetglobalperms"
      ],
      "Submodule": "ResetPermissionsCommands",
      "Module": "Permissions",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    }
  ],
  "Searches": [
    {
      "Aliases": [
        ".lolban"
      ],
      "Description": "Shows top banned champions ordered by ban rate.",
      "Usage": [
        ".lolban"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".rip"
      ],
      "Description": "rip",
      "Usage": [
        "rip"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".say"
      ],
      "Description": "Bot will send the message you typed in this channel. Supports embeds.",
      "Usage": [
        ".say hi"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".weather",
        ".we"
      ],
      "Description": "Shows weather data for a specified city. You can also specify a country after a comma.",
      "Usage": [
        ".we Moscow, RU"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".time"
      ],
      "Description": "Shows the current time and timezone in the specified location.",
      "Usage": [
        ".time London, UK"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".youtube",
        ".yt"
      ],
      "Description": "Searches youtubes and shows the first result",
      "Usage": [
        ".yt query"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".movie",
        ".omdb",
        ".imdb"
      ],
      "Description": "Queries omdb for movies or series, show first result.",
      "Usage": [
        ".imdb Batman vs Superman"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".randomcat",
        ".meow"
      ],
      "Description": "Shows a random cat image.",
      "Usage": [
        ".meow"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".randomdog",
        ".woof"
      ],
      "Description": "Shows a random dog image.",
      "Usage": [
        ".woof"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".randomfood",
        ".yum"
      ],
      "Description": "Shows a random food image.",
      "Usage": [
        ".yum"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".randombird",
        ".birb",
        ".bird"
      ],
      "Description": "Shows a random bird image.",
      "Usage": [
        ".birb"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".image",
        ".img",
        ".rimg"
      ],
      "Description": "Pulls a random image using a search parameter.",
      "Usage": [
        ".rimg cute kitten"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".lmgtfy"
      ],
      "Description": "Google something for an idiot.",
      "Usage": [
        ".lmgtfy query"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".shorten"
      ],
      "Description": "Attempts to shorten an URL, if it fails, returns the input URL.",
      "Usage": [
        ".shorten https://google.com"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".google",
        ".g"
      ],
      "Description": "Get a Google search link for some terms.",
      "Usage": [
        ".google query"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".magicthegathering",
        ".mtg"
      ],
      "Description": "Searches for a Magic The Gathering card.",
      "Usage": [
        ".magicthegathering about face",
        ".mtg about face"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".hearthstone",
        ".hs"
      ],
      "Description": "Searches for a Hearthstone card and shows its image. Takes a while to complete.",
      "Usage": [
        ".hs Ysera"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".urbandict",
        ".ud"
      ],
      "Description": "Searches Urban Dictionary for a word.",
      "Usage": [
        ".ud Pineapple"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".define",
        ".def"
      ],
      "Description": "Finds a definition of a word.",
      "Usage": [
        ".def heresy"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".#"
      ],
      "Description": "Searches Tagdef.com for a hashtag.",
      "Usage": [
        ".# ff"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".catfact"
      ],
      "Description": "Shows a random catfact from <http://catfacts-api.appspot.com/api/facts>",
      "Usage": [
        ".catfact"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".revav"
      ],
      "Description": "Returns a Google reverse image search for someone's avatar.",
      "Usage": [
        ".revav @SomeGuy"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".revimg"
      ],
      "Description": "Returns a Google reverse image search for an image from a link.",
      "Usage": [
        ".revimg Image link"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".safebooru"
      ],
      "Description": "Shows a random image from safebooru with a given tag. Tag is optional but preferred. (multiple tags are appended with +)",
      "Usage": [
        ".safebooru yuri+kissing"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".wikipedia",
        ".wiki"
      ],
      "Description": "Gives you back a wikipedia link",
      "Usage": [
        ".wiki query"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".color",
        ".clr"
      ],
      "Description": "Shows you pictures of colors which correspond to the inputed hex values. Max 10.",
      "Usage": [
        ".color 00ff00",
        ".color f00 0f0 00f"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".avatar",
        ".av"
      ],
      "Description": "Shows a mentioned person's avatar.",
      "Usage": [
        ".av @SomeGuy"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".wikia"
      ],
      "Description": "Gives you back a wikia link",
      "Usage": [
        ".wikia mtg Vigilance",
        ".wikia mlp Dashy"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".bible"
      ],
      "Description": "Shows bible verse. You need to supply book name and chapter:verse",
      "Usage": [
        ".bible genesis 3:19"
      ],
      "Submodule": "Searches",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".novel"
      ],
      "Description": "Searches for a novel on `http://novelupdates.com/`. You have to provide an exact name.",
      "Usage": [
        ".novel the nine cauldrons"
      ],
      "Submodule": "AnimeSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".mal"
      ],
      "Description": "Shows basic info from a MyAnimeList profile.",
      "Usage": [
        ".mal straysocks"
      ],
      "Submodule": "AnimeSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".anime",
        ".ani",
        ".aq"
      ],
      "Description": "Queries anilist for an anime and shows the first result.",
      "Usage": [
        ".ani aquarion evol"
      ],
      "Submodule": "AnimeSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".manga",
        ".mang",
        ".mq"
      ],
      "Description": "Queries anilist for a manga and shows the first result.",
      "Usage": [
        ".mq Shingeki no kyojin"
      ],
      "Submodule": "AnimeSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".crypto",
        ".c"
      ],
      "Description": "Shows basic stats about a cryptocurrency from coinmarketcap.com. You can use either a name or an abbreviation of the currency.",
      "Usage": [
        ".c btc",
        ".c bitcoin"
      ],
      "Submodule": "CryptoCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".feed",
        ".feedadd"
      ],
      "Description": "Subscribes to a feed. Bot will post an update up to once every 10 seconds. You can have up to 10 feeds on one server. All feeds must have unique URLs.",
      "Usage": [
        ".feed https://www.rt.com/rss/"
      ],
      "Submodule": "FeedCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".feedremove",
        ".feedrm",
        ".feeddel"
      ],
      "Description": "Stops tracking a feed on the given index. Use `.feeds` command to see a list of feeds and their indexes.",
      "Usage": [
        ".feedremove 3"
      ],
      "Submodule": "FeedCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".feeds",
        ".feedlist"
      ],
      "Description": "Shows the list of feeds you've subscribed to on this server.",
      "Usage": [
        ".feeds"
      ],
      "Submodule": "FeedCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".yomama",
        ".ym"
      ],
      "Description": "Shows a random joke from <http://api.yomomma.info/>",
      "Usage": [
        ".ym"
      ],
      "Submodule": "JokeCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".randjoke",
        ".rj"
      ],
      "Description": "Shows a random joke from <http://tambal.azurewebsites.net/joke/random>",
      "Usage": [
        ".rj"
      ],
      "Submodule": "JokeCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".chucknorris",
        ".cn"
      ],
      "Description": "Shows a random Chuck Norris joke from <http://api.icndb.com/jokes/random/>",
      "Usage": [
        ".cn"
      ],
      "Submodule": "JokeCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".wowjoke"
      ],
      "Description": "Get one of Kwoth's penultimate WoW jokes.",
      "Usage": [
        ".wowjoke"
      ],
      "Submodule": "JokeCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".magicitem",
        ".mi"
      ],
      "Description": "Shows a random magic item from <https://1d4chan.org/wiki/List_of_/tg/%27s_magic_items>",
      "Usage": [
        ".mi"
      ],
      "Submodule": "JokeCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".memelist"
      ],
      "Description": "Pulls a list of memes you can use with `.memegen` from http://memegen.link/templates/",
      "Usage": [
        ".memelist"
      ],
      "Submodule": "MemegenCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".memegen"
      ],
      "Description": "Generates a meme from memelist with top and bottom text.",
      "Usage": [
        ".memegen biw \"gets iced coffee\" \"in the winter\""
      ],
      "Submodule": "MemegenCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".osu"
      ],
      "Description": "Shows osu stats for a player.",
      "Usage": [
        ".osu Name",
        ".osu Name taiko"
      ],
      "Submodule": "OsuCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".osub"
      ],
      "Description": "Shows information about an osu beatmap.",
      "Usage": [
        ".osub https://osu.ppy.sh/s/127712"
      ],
      "Submodule": "OsuCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".osu5"
      ],
      "Description": "Displays a user's top 5 plays.",
      "Usage": [
        ".osu5 Name"
      ],
      "Submodule": "OsuCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pathofexile",
        ".poe"
      ],
      "Description": "Searches characters for a given Path of Exile account. May specify league name to filter results.",
      "Usage": [
        ".poe \"Zizaran\""
      ],
      "Submodule": "PathOfExileCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pathofexileleagues",
        ".poel"
      ],
      "Description": "Returns a list of the main Path of Exile leagues.",
      "Usage": [
        ".poel"
      ],
      "Submodule": "PathOfExileCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pathofexilecurrency",
        ".poec"
      ],
      "Description": "Returns the chaos equivalent of a given currency or exchange rate between two currencies.",
      "Usage": [
        ".poec Standard \"Mirror of Kalandra\""
      ],
      "Submodule": "PathOfExileCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".placelist"
      ],
      "Description": "Shows the list of available tags for the `.place` command.",
      "Usage": [
        ".placelist"
      ],
      "Submodule": "PlaceCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".place"
      ],
      "Description": "Shows a placeholder image of a given tag. Use `.placelist` to see all available tags. You can specify the width and height of the image as the last two optional parameters.",
      "Usage": [
        ".place Cage",
        ".place steven 500 400"
      ],
      "Submodule": "PlaceCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pokemon",
        ".poke"
      ],
      "Description": "Searches for a pokemon.",
      "Usage": [
        ".poke Sylveon"
      ],
      "Submodule": "PokemonSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".pokemonability",
        ".pokeab"
      ],
      "Description": "Searches for a pokemon ability.",
      "Usage": [
        ".pokeab overgrow"
      ],
      "Submodule": "PokemonSearchCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".smashcast",
        ".hb"
      ],
      "Description": "Notifies this channel when the specified user starts streaming.",
      "Usage": [
        ".smashcast SomeStreamer"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".twitch",
        ".tw"
      ],
      "Description": "Notifies this channel when the specified user starts streaming.",
      "Usage": [
        ".twitch SomeStreamer"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".picarto",
        ".pa"
      ],
      "Description": "Notifies this channel when the specified user starts streaming.",
      "Usage": [
        ".picarto SomeStreamer"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".mixer",
        ".bm"
      ],
      "Description": "Notifies this channel when the specified user starts streaming.",
      "Usage": [
        ".mixer SomeStreamer"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamadd",
        ".stadd"
      ],
      "Description": "Notifies this channel when the user's stream on the specified URL goes online or offline.",
      "Usage": [
        ".stadd twitch.tv/someguy"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamremove",
        ".strm"
      ],
      "Description": "Removes notifications of a specified stream on the specified platform on this channel. You can also just specify an url.",
      "Usage": [
        ".strm Twitch SomeGuy",
        ".strm twitch.tv/someguy"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamsclear"
      ],
      "Description": "Deletes all followed streams on this server.",
      "Usage": [
        ".streamsclear"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".liststreams",
        ".ls"
      ],
      "Description": "Lists all streams you are following on this server.",
      "Usage": [
        ".ls"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".streamoff",
        ".stoff"
      ],
      "Description": "Toggles whether the bot will notify about streams going offline.",
      "Usage": [
        ".stoff"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streammsg"
      ],
      "Description": "Specify an url of a stream you're already following, and a message in order to set a stream notification message which will show up every time stream comes online.",
      "Usage": [
        ".streammsg https://www.twitch.tv/trolhamonas/ Hello world"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".checkstream",
        ".cs"
      ],
      "Description": "Checks if a user is online on a certain streaming platform.",
      "Usage": [
        ".cs twitch MyFavStreamer"
      ],
      "Submodule": "StreamNotificationCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".translate",
        ".trans"
      ],
      "Description": "Translates from>to text. From the given language to the destination language.",
      "Usage": [
        ".trans en>fr Hello"
      ],
      "Submodule": "TranslateCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".autotrans",
        ".at"
      ],
      "Description": "Starts automatic translation of all messages by users who set their `.atl` in this channel. You can set \"del\" parameter to automatically delete all translated user messages.",
      "Usage": [
        ".at",
        ".at del"
      ],
      "Submodule": "TranslateCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission",
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".autotranslang",
        ".atl"
      ],
      "Description": "Sets your source and target language to be used with `.at`. Specify no parameters to remove previously set value.",
      "Usage": [
        ".atl en>fr"
      ],
      "Submodule": "TranslateCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".translangs"
      ],
      "Description": "Lists the valid languages for translation.",
      "Usage": [
        ".translangs"
      ],
      "Submodule": "TranslateCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xkcd"
      ],
      "Description": "Shows a XKCD comic. Specify no parameters to retrieve a random one. Number parameter will retrieve a specific comic, and \"latest\" will get the latest one.",
      "Usage": [
        ".xkcd",
        ".xkcd 1400",
        ".xkcd latest"
      ],
      "Submodule": "XkcdCommands",
      "Module": "Searches",
      "Options": null,
      "Requirements": []
    }
  ],
  "Utility": [
    {
      "Aliases": [
        ".togethertube",
        ".totube"
      ],
      "Description": "Creates a new room on <https://togethertube.com> and shows the link in the chat.",
      "Usage": [
        ".totube"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".whosplaying",
        ".whpl"
      ],
      "Description": "Shows a list of users who are playing the specified game.",
      "Usage": [
        ".whpl Overwatch"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".inrole"
      ],
      "Description": "Lists every person from the specified role on this server. You can use role ID, role name.",
      "Usage": [
        ".inrole Some Role"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".checkperms"
      ],
      "Description": "Checks yours or bot's user-specific permissions on this channel.",
      "Usage": [
        ".checkperms me",
        ".checkperms bot"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".userid",
        ".uid"
      ],
      "Description": "Shows user ID.",
      "Usage": [
        ".uid",
        ".uid @SomeGuy"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".roleid",
        ".rid"
      ],
      "Description": "Shows the id of the specified role.",
      "Usage": [
        ".rid Some Role"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".channelid",
        ".cid"
      ],
      "Description": "Shows current channel ID.",
      "Usage": [
        ".cid"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".serverid",
        ".sid"
      ],
      "Description": "Shows current server ID.",
      "Usage": [
        ".sid"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".roles"
      ],
      "Description": "List roles on this server or roles of a user if specified. Paginated, 20 roles per page.",
      "Usage": [
        ".roles 2",
        ".roles @Someone"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".channeltopic",
        ".ct"
      ],
      "Description": "Sends current channel's topic as a message.",
      "Usage": [
        ".ct"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".stats"
      ],
      "Description": "Shows some basic stats for Nadeko.",
      "Usage": [
        ".stats"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".showemojis",
        ".se"
      ],
      "Description": "Shows a name and a link to every SPECIAL emoji in the message.",
      "Usage": [
        ".se A message full of SPECIAL emojis"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listservers"
      ],
      "Description": "Lists servers the bot is on with some basic info. 15 per page.",
      "Usage": [
        ".listservers 3"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".savechat"
      ],
      "Description": "Saves a number of messages to a text file and sends it to you.",
      "Usage": [
        ".savechat 150"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".ping"
      ],
      "Description": "Ping the bot to see if there are latency issues.",
      "Usage": [
        ".ping"
      ],
      "Submodule": "Utility",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".botconfigedit",
        ".bce"
      ],
      "Description": "Sets one of available bot config settings to a specified value. Use the command without any parameters to get a list of available settings.",
      "Usage": [
        ".bce CurrencyName b1nzy",
        ".bce"
      ],
      "Submodule": "BotConfigCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".calculate",
        ".calc"
      ],
      "Description": "Evaluate a mathematical expression.",
      "Usage": [
        ".calc 1+1"
      ],
      "Submodule": "CalcCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".calcops"
      ],
      "Description": "Shows all available operations in the `.calc` command",
      "Usage": [
        ".calcops"
      ],
      "Submodule": "CalcCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".aliasesclear",
        ".aliasclear"
      ],
      "Description": "Deletes all aliases on this server.",
      "Usage": [
        ".aliasclear"
      ],
      "Submodule": "CommandMapCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".alias",
        ".cmdmap"
      ],
      "Description": "Create a custom alias for a certain Nadeko command. Provide no alias to remove the existing one.",
      "Usage": [
        ".alias allin .bf all h",
        ".alias \"linux thingy\" >loonix Spyware Windows"
      ],
      "Submodule": "CommandMapCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".aliaslist",
        ".cmdmaplist",
        ".aliases"
      ],
      "Description": "Shows the list of currently set aliases. Paginated.",
      "Usage": [
        ".aliaslist",
        ".aliaslist 3"
      ],
      "Submodule": "CommandMapCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".serverinfo",
        ".sinfo"
      ],
      "Description": "Shows info about the server the bot is on. If no server is supplied, it defaults to current one.",
      "Usage": [
        ".sinfo Some Server"
      ],
      "Submodule": "InfoCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".channelinfo",
        ".cinfo"
      ],
      "Description": "Shows info about the channel. If no channel is supplied, it defaults to current one.",
      "Usage": [
        ".cinfo #some-channel"
      ],
      "Submodule": "InfoCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".userinfo",
        ".uinfo"
      ],
      "Description": "Shows info about the user. If no user is supplied, it defaults a user running the command.",
      "Usage": [
        ".uinfo @SomeUser"
      ],
      "Submodule": "InfoCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".activity"
      ],
      "Description": "Checks for spammers.",
      "Usage": [
        ".activity"
      ],
      "Submodule": "InfoCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".invitecreate",
        ".invcr"
      ],
      "Description": "Creates a new invite which has infinite max uses and never expires.",
      "Usage": [
        ".invcr"
      ],
      "Submodule": "InviteCommands",
      "Module": "Utility",
      "Options": "`--max-uses` (`-m`)   Maximum number of times the invite can be used. Default 0 (never).  \n`--unique` (`-u`)   Not setting this flag will result in bot getting the existing invite with the same settings if it exists, instead of creating a new one.  \n`--temporary` (`-t`)   If this flag is set, the user will be kicked from the guild once they close their client.  \n`--expire` (`-e`)   Time in seconds to expire the invite. Default 0 (no expiry).  ",
      "Requirements": [
        "CreateInstantInvite Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".invitelist",
        ".invlist",
        ".invlst"
      ],
      "Description": "Lists all invites for this channel. Paginated with 9 per page.",
      "Usage": [
        ".invitelist",
        ".invlist 3"
      ],
      "Submodule": "InviteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageChannels Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".invitedelete",
        ".invrm",
        ".invdel"
      ],
      "Description": "Deletes an invite on the specified index. Use `.invitelist` to see the list of invites.",
      "Usage": [
        ".invrm 2"
      ],
      "Submodule": "InviteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageChannels Channel Permission"
      ]
    },
    {
      "Aliases": [
        ".parewrel"
      ],
      "Description": "Forces the update of the list of patrons who are eligible for the reward.",
      "Usage": [
        ".parewrel"
      ],
      "Submodule": "PatreonCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".clparew",
        ".claparew"
      ],
      "Description": "Claim patreon rewards. If you're subscribed to bot owner's patreon you can use this command to claim your rewards - assuming bot owner did setup has their patreon key.",
      "Usage": [
        ".clparew"
      ],
      "Submodule": "PatreonCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".listquotes",
        ".liqu"
      ],
      "Description": "Lists all quotes on the server ordered alphabetically or by ID. 15 Per page.",
      "Usage": [
        ".liqu 3",
        ".liqu 3 id"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        "..."
      ],
      "Description": "Shows a random quote with a specified name.",
      "Usage": [
        "... abc"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".qsearch"
      ],
      "Description": "Shows a random quote for a keyword that contains any text specified in the search.",
      "Usage": [
        ".qsearch keyword text"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".quoteid",
        ".qid"
      ],
      "Description": "Displays the quote with the specified ID number. Quote ID numbers can be found by typing `.liqu [num]` where `[num]` is a number of a page which contains 15 quotes.",
      "Usage": [
        ".qid 123456"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".."
      ],
      "Description": "Adds a new quote with the specified name and message.",
      "Usage": [
        ".. sayhi Hi"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".quotedel",
        ".qdel"
      ],
      "Description": "Deletes a quote with the specified ID. You have to be either server Administrator or the creator of the quote to delete it.",
      "Usage": [
        ".qdel 123456"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".delallq",
        ".daq"
      ],
      "Description": "Deletes all quotes on a specified keyword.",
      "Usage": [
        ".delallq kek"
      ],
      "Submodule": "QuoteCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".remind"
      ],
      "Description": "Sends a message to you or a channel after certain amount of time (max 2 months). First parameter is `me`/`here`/'channelname'. Second parameter is time in a descending order (mo>w>d>h>m) example: 1w5d3h10m. Third parameter is a (multiword) message.",
      "Usage": [
        ".remind me 1d5h Do something",
        ".remind #general 1m Start now!"
      ],
      "Submodule": "RemindCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".remindlist",
        ".remindl",
        ".remindlst"
      ],
      "Description": "Lists all reminders you created. Paginated.",
      "Usage": [
        ".remindlist 1"
      ],
      "Submodule": "RemindCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".reminddel",
        ".remindrm"
      ],
      "Description": "Deletes a reminder on the specified index.",
      "Usage": [
        ".remindrm 3"
      ],
      "Submodule": "RemindCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".remindtemplate"
      ],
      "Description": "Sets message for when the remind is triggered.  Available placeholders are `%user%` - user who ran the command, `%message%` - Message specified in the remind, `%target%` - target channel of the remind.",
      "Usage": [
        ".remindtemplate %user%, do %message%!"
      ],
      "Submodule": "RemindCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".repeatinvoke",
        ".repinv"
      ],
      "Description": "Immediately shows the repeat message on a certain index and restarts its timer.",
      "Usage": [
        ".repinv 1"
      ],
      "Submodule": "RepeatCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".repeatremove",
        ".reprm"
      ],
      "Description": "Removes a repeating message on a specified index. Use `.repeatlist` to see indexes.",
      "Usage": [
        ".reprm 2"
      ],
      "Submodule": "RepeatCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".repeat"
      ],
      "Description": "Repeat a message every specified number of minutes in the current channel. You can instead specify time of day for the message to be repeated at daily (make sure you've set your server's timezone). You can have up to 5 repeating messages on the server in total.",
      "Usage": [
        ".repeat -i 5 -m \"Hello there\" -n",
        ".repeat 17:30 -m \"tea time\""
      ],
      "Submodule": "RepeatCommands",
      "Module": "Utility",
      "Options": "`--message` (`-m`)   Message to be repeated  \n`--no-redundant` (`-n`)   Whether the message should be reposted if the last message in the channel is this same message.  \n`--interval` (`-i`)   How frequently the repeating message is posted, in minutes.  ",
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".repeatlist",
        ".replst"
      ],
      "Description": "Shows currently repeating messages and their indexes.",
      "Usage": [
        ".repeatlist"
      ],
      "Submodule": "RepeatCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamrole"
      ],
      "Description": "Sets a role which is monitored for streamers (FromRole), and a role to add if a user from 'FromRole' is streaming (AddRole). When a user from 'FromRole' starts streaming, they will receive an 'AddRole'. Provide no parameters to disable",
      "Usage": [
        ".streamrole \"Eligible Streamers\" \"Featured Streams\""
      ],
      "Submodule": "StreamRoleCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamrolekw",
        ".srkw"
      ],
      "Description": "Sets keyword which is required in the stream's title in order for the streamrole to apply. Provide no keyword in order to reset.",
      "Usage": [
        ".srkw",
        ".srkw PUBG"
      ],
      "Submodule": "StreamRoleCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamrolebl",
        ".srbl"
      ],
      "Description": "Adds or removes a blacklisted user. Blacklisted users will never receive the stream role.",
      "Usage": [
        ".srbl add @b1nzy#1234",
        ".srbl rem @b1nzy#1234"
      ],
      "Submodule": "StreamRoleCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".streamrolewl",
        ".srwl"
      ],
      "Description": "Adds or removes a whitelisted user. Whitelisted users will receive the stream role even if they don't have the specified keyword in their stream title.",
      "Usage": [
        ".srwl add @b1nzy#1234",
        ".srwl rem @b1nzy#1234"
      ],
      "Submodule": "StreamRoleCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".convertlist"
      ],
      "Description": "List of the convertible dimensions and currencies.",
      "Usage": [
        ".convertlist"
      ],
      "Submodule": "UnitConverterCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".convert"
      ],
      "Description": "Convert quantities. Use `.convertlist` to see supported dimensions and currencies.",
      "Usage": [
        ".convert m km 1000"
      ],
      "Submodule": "UnitConverterCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".verboseerror",
        ".ve"
      ],
      "Description": "Toggles whether the bot should print command errors when a command is incorrectly used.",
      "Usage": [
        ".ve"
      ],
      "Submodule": "VerboseErrorCommands",
      "Module": "Utility",
      "Options": null,
      "Requirements": [
        "ManageMessages Server Permission"
      ]
    }
  ],
  "Xp": [
    {
      "Aliases": [
        ".experience",
        ".xp"
      ],
      "Description": "Shows your xp stats. Specify the user to show that user's stats instead.",
      "Usage": [
        ".xp",
        ".xp @someguy"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xplvluprewards",
        ".xprews",
        ".xpcrs",
        ".xprrs",
        ".xprolerewards",
        ".xpcurrewards"
      ],
      "Description": "Shows currently set level up rewards.",
      "Usage": [
        ".xprews"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xprolereward",
        ".xprr"
      ],
      "Description": "Sets a role reward on a specified level. Provide no role name in order to remove the role reward.",
      "Usage": [
        ".xprr 3 Social"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "ManageRoles Server Permission"
      ]
    },
    {
      "Aliases": [
        ".xpcurreward",
        ".xpcr"
      ],
      "Description": "Sets a currency reward on a specified level. Provide no amount in order to remove the reward.",
      "Usage": [
        ".xpcr 3 50"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".xpnotify",
        ".xpn"
      ],
      "Description": "Sets how the bot should notify you when you get a `server` or `global` level. You can set `dm` (for the bot to send a direct message), `channel` (to get notified in the channel you sent the last message in) or `none` to disable.",
      "Usage": [
        ".xpn global dm",
        ".xpn server channel"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xpexclude",
        ".xpex"
      ],
      "Description": "Exclude a channel, role or current server from the xp system.",
      "Usage": [
        ".xpex Role Excluded-Role",
        ".xpex Server"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".xpexclusionlist",
        ".xpexl"
      ],
      "Description": "Shows the roles and channels excluded from the XP system on this server, as well as whether the whole server is excluded.",
      "Usage": [
        ".xpexl"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xpleaderboard",
        ".xplb"
      ],
      "Description": "Shows current server's xp leaderboard.",
      "Usage": [
        ".xplb"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xpgleaderboard",
        ".xpglb"
      ],
      "Description": "Shows the global xp leaderboard.",
      "Usage": [
        ".xpglb"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xpadd"
      ],
      "Description": "Adds xp to a user on the server. This does not affect their global ranking. You can use negative values.",
      "Usage": [
        ".xpadd 100 @b1nzy"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    },
    {
      "Aliases": [
        ".xptempreload",
        ".xptr"
      ],
      "Description": "Reloads the xp template file. Xp template file allows you to customize the position and color of elements on the `.xp` card.",
      "Usage": [
        ".xptr"
      ],
      "Submodule": "Xp",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "Bot Owner Only"
      ]
    },
    {
      "Aliases": [
        ".clubtransfer"
      ],
      "Description": "Transfers the ownership of the club to another member of the club.",
      "Usage": [
        ".clubtransfer @b1nzy"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubadmin"
      ],
      "Description": "Assigns (or unassigns) staff role to the member of the club. Admins can ban, kick and accept applications.",
      "Usage": [
        ".clubadmin"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubcreate"
      ],
      "Description": "Creates a club. You must be at least level 5 and not be in the club already.",
      "Usage": [
        ".clubcreate b1nzy's friends"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubicon"
      ],
      "Description": "Sets the club icon.",
      "Usage": [
        ".clubicon https://i.imgur.com/htfDMfU.png"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubinfo"
      ],
      "Description": "Shows information about the club.",
      "Usage": [
        ".clubinfo b1nzy's friends#123"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubbans"
      ],
      "Description": "Shows the list of users who have banned from your club. Paginated. You must be club owner to use this command.",
      "Usage": [
        ".clubbans 2"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubapps"
      ],
      "Description": "Shows the list of users who have applied to your club. Paginated. You must be club owner to use this command.",
      "Usage": [
        ".clubapps 2"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubapply"
      ],
      "Description": "Apply to join a club. You must meet that club's minimum level requirement, and not be on its ban list.",
      "Usage": [
        ".clubapply b1nzy's friends#123"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubaccept"
      ],
      "Description": "Accept a user who applied to your club.",
      "Usage": [
        ".clubaccept b1nzy#1337"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubleave"
      ],
      "Description": "Leaves the club you're currently in.",
      "Usage": [
        ".clubleave"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubkick"
      ],
      "Description": "Kicks the user from the club. You must be the club owner. They will be able to apply again.",
      "Usage": [
        ".clubkick b1nzy#1337"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubban"
      ],
      "Description": "Bans the user from the club. You must be the club owner. They will not be able to apply again.",
      "Usage": [
        ".clubban b1nzy#1337"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubunban"
      ],
      "Description": "Unbans the previously banned user from the club. You must be the club owner.",
      "Usage": [
        ".clubunban b1nzy#1337"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clublevelreq"
      ],
      "Description": "Sets the club required level to apply to join the club. You must be club owner. You can't set this number below 5.",
      "Usage": [
        ".clublevelreq 7"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubdesc"
      ],
      "Description": "Sets the club description. Maximum 150 characters. Club owner only.",
      "Usage": [
        ".clubdesc This is the best club please join."
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clubdisband"
      ],
      "Description": "Disbands the club you're the owner of. This action is irreversible.",
      "Usage": [
        ".clubdisband"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".clublb"
      ],
      "Description": "Shows club rankings on the specified page.",
      "Usage": [
        ".clublb 2"
      ],
      "Submodule": "Club",
      "Module": "Xp",
      "Options": null,
      "Requirements": []
    },
    {
      "Aliases": [
        ".xpreset"
      ],
      "Description": "Resets specified user's XP, or the XP of all users in the server. You can't reverse this action.",
      "Usage": [
        ".xpreset @b1nzy",
        ".xpreset"
      ],
      "Submodule": "ResetCommands",
      "Module": "Xp",
      "Options": null,
      "Requirements": [
        "Administrator Server Permission"
      ]
    }
  ]
}
