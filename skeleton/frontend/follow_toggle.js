const APIUtil = require('./api_util');


class FollowToggle {
  constructor(el, options) {
  this.$el = el;
  this.userid = this.$el.date('user-id') || options.userId;
  this.followState = (this.$el.data('initial-follow-state') || options.followState);
  this.render();
  }
  
  handleClick(event) {
    let followToggle = this;
    event.preventDefault();
    if (this.followState = 'followed') {
      this.followState = 'unfollowing'
      this.render()
    }
    
  }
  
}


module.exports = FollowToggle;