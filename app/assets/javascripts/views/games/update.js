QuestStarter.Views.Update = Backbone.View.extend({
  template: JST['games/update'],
  editTemplate: JST['games/update-form'],

  tagName: 'li',

  className: 'game-show-update',

  events: {
    'click .edit-update': 'toggleEditForm',
    'click .delete-update': 'deleteUpdate'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.editing = false;
  },

  toggleEditForm: function () {
    if (this.editing) {
      this.editing = false;

      var title = $('.update-title').val();
      var text = $('.update-text').val();
      this.model.save({
        title: title,
        text: text,
      });
    } else {
      this.editing = true;
      this.render();
    }
  },

  deleteUpdate: function () {
    this.model.destroy({
      data: {
        update: {game_id: this.model.get('game_id')}
      }, processData: true});

    // BOOM ANOTHER ERROR CALLBACK
  },

  render: function () {
    var template = this.editing ? this.editTemplate : this.template;
    var view = template({
      update: this.model
    });
    this.$el.html(view);
    return this;
  }
});
