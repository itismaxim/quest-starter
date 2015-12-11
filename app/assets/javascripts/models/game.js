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
    if (response.updates) {
      this.updates().set(response.updates, { parse: true });
      delete response.updates;
    }

    if (response.comments) {
      this.comments().set(response.comments, { parse: true });
      delete response.comments;
    }

    // response.createdAt = new Date(response.created_at);
    // response.updatedAt = new Date(response.updated_at);

    return response;
  }
});
