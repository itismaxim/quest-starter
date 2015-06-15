QuestStarter.Views.Surveys = Backbone.CompositeView.extend({
  template: JST['games/surveys'],

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  }
});
