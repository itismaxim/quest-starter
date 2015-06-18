QuestStarter.Collections.Comments = Backbone.Collection.extend({
  model: QuestStarter.Models.Comment,
  url: 'api/comments',

  getOrFetch: function (id) {
    var comment = this.get(id);

    if (!comment) {
      comment = new QuestStarter.Models.Comment({ id: id });
      comment.fetch({
        success: function () {
          this.add(comment);
        }.bind(this)
      });
    } else {
      comment.fetch();
    }

    return comment;
  }
});
