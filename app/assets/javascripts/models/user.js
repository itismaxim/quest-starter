QuestStarter.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  authoredGames: function () {
    if (!this._authoredGames) {
      this._authoredGames = new QuestStarter.Collections.Games();
    }

    return this._authoredGames;
  },

  followedGames: function () {
    if (!this._followedGames) {
      this._followedGames = new QuestStarter.Collections.Games();
    }

    return this._followedGames;
  },

  parse: function (response) {
    if (response.authored_games) {
      this.authoredGames().set(response.authored_games, { parse: true });
      delete response.authored_games;
    }

    if (response.followed_games) {
      this.followedGames().set(response.followed_games, { parse: true });
      delete response.followed_games;
    }

    return response;
  }
});
