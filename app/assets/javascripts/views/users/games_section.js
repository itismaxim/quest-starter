QuestStarter.Views.GamesSection = Backbone.CompositeView.extend({

  template: JST['users/games_section'],

  tagName: 'section',

  initialize: function (options) {
    this.index = 1
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'remove', this.removeGame);
    this.collection.each(function(game) {
      this.addGame(game);
    }, this);
  },

  addGame: function (game, index) {
    // add these two at a time
    // the whole index thing will be way diff.
    // It will be a binary choice.

    var view = new QuestStarter.Views.GameMiniShow({
      model: game,
      index: this.index
    });
    this.addSubview("." + this.className, view);

    if (this.index < 4) {
      this.index++;
    } else {
      this.index = 1
    }
  },

  removeGame: function (game) {
    this.removeModelSubview("." + this.className, game);
  },

  render: function () {
    // this.index = 1;
    var view = this.template({
      className: this.className
    });
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
