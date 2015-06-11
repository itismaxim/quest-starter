QuestStarter.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  authored_games: function () {
    if (!this._authored_games) {
      this._authored_games = new QuestStarter.Collections.games([], { user: this });
    }

    return this._games;
  },

  followed_games: function () {
    if (!this._followed_games) {
      this._followed_games = new QuestStarter.Collections.games([], { user: this });
    }

    return this._games;
  },

  parse: function (response) {
    if (response.authored_games) {
      this.authored_games().set(response.authored_games, { parse: true });
      delete response.authored_games;
    }

    if (response.followed_games) {
      this.followed_games().set(response.followed_games, { parse: true });
      delete response.followed_games;
    }

    return response;
  }
});
