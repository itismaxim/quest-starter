QuestStarter.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  games: function () {
    if (!this._games) {
      this._games = new QuestStarter.Collections.games([], { user: this });
    }

    return this._games;
  },

  parse: function (response) {
    if (response.games) {
      this.games().set(response.games, { parse: true });
      delete response.games;
    }

    return response;
  }
});
