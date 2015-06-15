QuestStarter.Views.Comments = Backbone.CompositeView.extend({
  template: JST['games/comments'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addComment);
    this.collection.each(function(comment) {
      this.addComment(comment);
    }, this);
  },

  addComment: function (comment) {
    var view = new QuestStarter.Views.Comment({
      model: comment
    });
    this.addSubview('#game-show-comments', view);
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
