const FollowToggle = require('./follow_toggle');
// if (this.followState ==='unfollowed') 

$(function () {
  $('div.infinite-tweets').each( (i, tweet) => new InfiniteTweets(tweet) );
}