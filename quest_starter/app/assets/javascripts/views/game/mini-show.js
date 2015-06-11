QuestStarter.Views.GameMiniShow = Backbone.View.extend({
  template: JST['games/mini_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var view = this.template({
      game: this.model
    });

    this.$el.html(view);
    return this;
  }
});
