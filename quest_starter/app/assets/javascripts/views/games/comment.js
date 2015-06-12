QuestStarter.Views.Comment = Backbone.View.extend({
  template: JST['games/comment'],

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  }
});
