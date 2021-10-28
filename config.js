module.exports = {
    defaultPrefix: 'f.', /// prefix bot
    ownerID: '622509869546602506', // id onwer
    _limits: 'The following are defaults.',
    adminCanChangeLimits: true, // limite stting
    limits: {
        user_removals: {
            per_minute:2 ,
            per_hour: 2
        },
        role_creations: {
            per_minute: 2,
            per_hour: 2
        },
        channel_creations: {
            per_minute: 2,
            per_hour: 2
        },
        role_deletions: {
            per_minute: 1,
            per_hour: 1
        },
        channel_deletions: {
            per_minute:2,
            per_hour: 2
        },
        unbans: {
            per_minute: 2,
            per_hour: 2
        
    },
        emoji_creations: {
            per_minute: 3,
            per_hour: 3
        },
        emoji_deletions: {
            per_minute: 3,
            per_hour: 3
        }
    },
    
    
    _config: 'The following are defaults.',
    config: {
        _null: 'No options to configure currently.'
    }
};
