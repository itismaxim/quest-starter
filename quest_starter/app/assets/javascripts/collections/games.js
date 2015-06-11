QuestStarter.Collections.Games = Backbone.Collection.extend({
  model: QuestStarter.Models.Game,
  url: 'api/games',

  getOrFetch: function (id) {
    var game = this.get(id);

    if (!game) {
      game = new QuestStarter.Models.Game({ id: id });
      game.fetch({
        success: function () {
          this.add(game);
        }.bind(this)
      });
    } else {
      game.fetch();
    }

    return game;
  }
});

QuestStarter.Collections.games = new QuestStarter.Collections.Games
