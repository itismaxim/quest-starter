QuestStarter.Views.Update = Backbone.View.extend({
  template: JST['games/update'],

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  }
});
