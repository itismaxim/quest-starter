QuestStarter.Views.Comment = Backbone.View.extend({
  template: JST['games/comment'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var view = this.template({
      comment: this.model
    });
    this.$el.html(view);
    return this;
  }
});
