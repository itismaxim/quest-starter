QuestStarter.Views.Comment = Backbone.View.extend({
  template: JST['games/comment'],

  className: 'comment',

  events: {
    'click .delete-button': 'deleteComment'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  deleteComment: function () {
    this.model.destroy();
  },

  render: function () {
    var view = this.template({
      comment: this.model
    });
    this.$el.html(view);
    return this;
  }
});
