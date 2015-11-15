QuestStarter.Views.GamesSection = Backbone.CompositeView.extend({

  template: JST['users/games_section'],

  tagName: 'section',

  initialize: function (options) {
    this.index = 0;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'remove', this.removeGame);
    this.collection.each( function (game) {
      this.addGame(game);
    }, this);
  },

  addGame: function (game) {
    var view = new QuestStarter.Views.GameMiniShow({
      index: this.index,
      model: game,
      className: "mini-show index-" + this.index,
      tagName: 'a',
      attributes: {'href': "#/games/" + game.id}
    });
    this.addSubview("." + this.className, view);
    this.index++;
  },

  removeGame: function (game) {
    this.removeModelSubview("." + this.className, game);
  },

  render: function () {
    // this.index = 1;
    var classes = this.className + ' group';
    var view = this.template({
      className: classes
    });
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
