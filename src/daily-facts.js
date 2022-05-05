const cron = require('cron');
const client = require('./utils/Client.js');
const GetFact = require('./utils/GetFact.js');
const PostTweet = require('./utils/PostTweet.js');

const DailyTweetCronJob = cron.job('0 0 * * *', async () => {
    var day_counter = 1
    const facts = await GetFact(1);
    const tweet_data = facts[0].fact;
    await PostTweet(`Daily Facts , Day ${day_counter} : \n` + tweet_data).then(day_counter++);
})


DailyTweetCronJob.start();