export const tweetsData = [   
    {
        handle: `@AfroSamurai 🗡️`,
        profilePic: `images/afro-samurai-1.jpg`,
        likes: 1200,
        retweets: 300,
        tweetText: `The path of vengeance never ends. Only blood stains the number one headband.`,
        replies: [
            {
                handle: `@NinjaNinja 😂`,
                profilePic: `images/Ninja_Ninja.webp`,
                tweetText: `Man, Afro… you ever think about chillin’ out? 🍃`,
                timestamp: new Date().toISOString()
            }
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: 'afro-uuid-1',
        timestamp: new Date().toISOString()
        
    },    
    {
        handle: `@Justice 🎩`,
        profilePic: `images/justice.png`,
        likes: 800,
        retweets: 150,
        tweetText: `Still wearin’ that headband, boy? Don’t forget who took your father’s.`,
        replies: [
            {
                handle: `@Kuma 🐻`,
                profilePic: `images/kuma.jpg`,
                tweetText: `Justice… your time’s coming.`,
                timestamp: new Date().toISOString()
            }
        ],
        isLiked: false,
        isRetweeted: false,
        uuid: 'justice-uuid-2',
        timestamp: new Date().toISOString()
    },
    {
        handle: `@Kuma 🐻`,
        profilePic: `images/kuma.jpg`,
        likes: 500,
        retweets: 100,
        tweetText: `The bear mask hides the pain, but revenge drives me forward.`,
        replies: [],
        isLiked: false,
        isRetweeted: false,
        uuid: 'kuma-uuid-3',
        timestamp: new Date().toISOString()
    }
]
