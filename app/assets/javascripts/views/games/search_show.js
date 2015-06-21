QuestStarter.Views.GameSearchShow = Backbone.View.extend({
  template: JST['games/search_show'],

  // tagName: 'a', ???

  // className: 'user-mini-show',

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  }
});
