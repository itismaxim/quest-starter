QuestStarter.Views.Followed = Backbone.CompositeView.extend({
  template: JST['users/followed'],

  tagName: 'section',

  className: 'followed-games',

  initialize: function (options) {
    this.mine = options.mine;
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
    this.addSubview('#all-followed-games', view);
  },

  render: function () {
    var text = this.mine ? "Games You Follow" : "Games " + this.model.escape("name") + " Follows"
    debugger;
    var view = this.template({
      text: text
    });
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
