QuestStarter.Views.Authored = Backbone.CompositeView.extend({
  template: JST['users/authored'],

  tagName: 'section',

  className: 'authored-games',

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGame);
    this.collection.each(function(game) {
      this.addGame(game);
    }, this);
  },

  addGame: function (game) {
    var view = new QuestStarter.Views.GameMiniShow({
      model: game
    });
    this.addSubview('#all-authored-games', view);
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
