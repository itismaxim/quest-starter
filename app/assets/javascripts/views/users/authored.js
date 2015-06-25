QuestStarter.Views.Authored = Backbone.CompositeView.extend({
  template: JST['users/authored'],

  tagName: 'section',

  className: 'authored-games',

  initialize: function (options) {
    this.mine = options.mine;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addGame);
    this.listenTo(this.collection, 'remove', this.removeGame);
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

  removeGame: function (game) {
    this.removeModelSubview('#all-authored-games', game);
  },

  render: function () {
    var text = this.mine ? "Games You Follow" : "Games " + this.model.escape("name") + " Follows"
    var view = this.template({
      text: text
    });
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
