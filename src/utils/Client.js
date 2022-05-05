const {TwitterApi} = require("twitter-api-v2");
const twit = require('twit')

const API_KEY = "2pMxZ7vYAbVJqYNLOFkCGaXG9";
const API_SECRET = "61hhzG9xDBUOB9CF58N4GyxEwmZXDLqoKQ1AJKG66Xq9C7o0MB";
const BEARER_TOKEN ="AAAAAAAAAAAAAAAAAAAAANyLcAEAAAAA%2FOsaLQwQGS1vK5MSyp7XsUiv1QU%3D9lId7J90bvtK8YUVn66jGsQsWgJRIUVSzQqJoIRsMHADV00u7P";
const ACCESS_TOKEN = "1350109410505355265-m1xWdXSCnSQO1Y5JtvIZCclyF1dvAI";
const ACCESS_TOKEN_SECRET = "apx1UwNHXpu6vVsDa0lTMloeG7P9ZwIJ3Pm3m0YMkunbe";


const T = new twit({
  consumer_key: API_KEY,
  consumer_secret: API_SECRET,
  access_token: ACCESS_TOKEN,
  access_token_secret: ACCESS_TOKEN_SECRET
});

module.exports = T;
