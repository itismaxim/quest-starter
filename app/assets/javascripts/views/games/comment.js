QuestStarter.Views.Comment = Backbone.View.extend({
  template: JST['games/comment'],

  // tagName: '',
  className: 'comment',

  events: {
    'click .delete-color': 'deleteComment'
  },

  initialize: function (options) {
    this.gameId = options.gameId;
    this.listenTo(this.model, 'sync', this.render);
  },

  deleteComment: function () {
    this.model.destroy();
  },

  render: function () {
    var view = this.template({
      comment: this.model,
      gameId: this.gameId
    });
    this.$el.html(view);
    return this;
  }
});
