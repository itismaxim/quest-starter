QuestStarter.Models.Game = Backbone.Model.extend({
  urlRoot: 'api/games',

  // lists: function () {
  //   if (!this._lists) {
  //     this._lists = new QuestStarter.Collections.Lists([], { game: this });
  //   }
  //
  //   return this._lists;
  // },

  // parse: function (response) {
  //   if (response.lists) {
  //     this.lists().set(response.lists, { parse: true });
  //     delete response.lists;
  //   }
  //
  //   return response;
  // }
});
