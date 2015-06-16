QuestStarter.Views.Comments = Backbone.CompositeView.extend({
  template: JST['games/comments'],

  events: {
    'click #new-comment-submit': 'addNewComment',
  },

  initialize: function (options) {
    this.gameId = options.gameId;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addComment);
    this.listenTo(this.collection, 'destroy', this.removeComment);
    this.collection.each(function(comment) {
      this.addComment(comment);
    }, this);
  },

  addComment: function (comment) {
    var view = new QuestStarter.Views.Comment({
      model: comment,
      gameId: this.gameId
    });
    this.addSubview('#game-show-old-comments', view);
  },

  addNewComment: function (event) {
    event.preventDefault();
    var name;
    if (QuestStarter.currentUser) {
      name = QuestStarter.currentUser.name;
    } else {
      name = $('#anon-name').val();
    }
    var body = $('#comment-body').val();

    this.collection.create({
      poster_name: name,
      game_id: this.gameId,
      text: body
    });
  },

  removeComment: function(model) {
    this.removeModelSubview('#game-show-old-comments', model);
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
