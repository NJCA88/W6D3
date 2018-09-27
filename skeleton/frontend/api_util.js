const APIUtil = {
  followUser: id => {
    // ...
    $.ajax({
      url: `users/$id}/follow`,
      dataType: 'json',
      
    })
      
  },

  unfollowUser: id => {
    // ...
  }
}

module.exports = APIUtil;