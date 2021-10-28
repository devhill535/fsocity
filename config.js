module.exports = {
    defaultPrefix: 'f.', /// prefix bot
    ownerID: '622509869546602506', // id onwer
    _limits: 'The following are defaults.',
    adminCanChangeLimits: true, // limite stting
    limits: {
        user_removals: {
            per_minute:5 ,
            per_hour: 5
        },
        role_creations: {
            per_minute: 10,
            per_hour: 10
        },
        channel_creations: {
            per_minute: 10,
            per_hour: 10
        },
        role_deletions: {
            per_minute: 10,
            per_hour: 10
        },
        channel_deletions: {
            per_minute:10,
            per_hour: 10
        },
        unbans: {
            per_minute: 5,
            per_hour: 5
        
    },
        emoji_creations: {
            per_minute: 10,
            per_hour: 10
        },
        emoji_deletions: {
            per_minute: 10,
            per_hour: 10
        }
    },
    
    
    _config: 'The following are defaults.',
    config: {
        _null: 'No options to configure currently.'
    }
};
