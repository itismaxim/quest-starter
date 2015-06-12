QuestStarter.Models.Game = Backbone.Model.extend({
  urlRoot: 'api/games',

  updates: function () {
    if (!this._updates) {
      this._updates = new QuestStarter.Collections.Updates();
    }

    return this._updates;
  },

  comments: function () {
    if (!this._comments) {
      this._comments = new QuestStarter.Collections.Comments();
    }

    return this._comments;
  },

  parse: function (response) {
    if (response.authored_games) {
      this.updates().set(response.updates, { parse: true });
      delete response.updates;
    }

    if (response.followed_games) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    return response;
  }
});
