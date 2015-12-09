QuestStarter.Views.AllGames = Backbone.CompositeView.extend({
  template: JST['games/all'],

  tagName: 'article',

  className: 'all-games',

  initialize: function () {
    // this.listenTo(this.model, 'sync', this.render);
    //
    debugger;
    this.listenTo(this.collection, 'update', this.render)
    // !!!!!!!!!!!!!!
    // Maybe both?
    this.addSubview('#all-games', new QuestStarter.Views.GamesSection({
      //collection: this.collection.responseText,
      collection: this.collection,
      className: "all-games",
      model: this.model
    }));
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
