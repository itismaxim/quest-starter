QuestStarter.Views.Comment = Backbone.View.extend({
  template: JST['games/comment'],
  editTemplate: JST['games/comment-form'],

  className: 'comment',

  events: {
    'click .edit-button-smaller': 'toggleEditForm',
    'click .delete-button-smaller': 'deleteComment'
  },

  initialize: function (options) {
    this.indexClass = 'comment' + options.index;
    this.listenTo(this.model, 'sync', this.render);
    this.editing = false;
  },

  toggleEditForm: function (event) {
    if (this.editing) {
      var that = this;
      this.editing = false;
      var text = $('.' + this.indexClass + "-text").text();
      this.model.save({
        text: text,
      }, {error: that.error});
    } else {
      this.editing = true;
      this.render();
    }
  },

  deleteComment: function () {
    this.model.destroy();
  },

  render: function () {
    var template = this.editing ? this.editTemplate : this.template;
    var view = template({
      comment: this.model,
      indexClass: this.indexClass
    });
    this.$el.html(view);
    return this;
  }
});
