QuestStarter.Views.Description = Backbone.View.extend({
  template: JST['games/description'],

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  }
});
