QuestStarter.Views.Update = Backbone.View.extend({
  template: JST['games/update'],

  events: {
    'click .edit-update': 'changeIntoEditForm',
    'click .delete-update': 'deleteUpdate'
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
  },

  changeIntoEditForm: function () {
    // do that as a once
    // 'click .submit-edit': 'editUpdate',
    // do that as a once
    // 'click .edit-update': 'closeEditForm',
    // You could make them the same thing!
  },

  editUpdate: function () {

  },

  deleteUpdate: function () {
    this.model.destroy({data: {update: {game_id: this.model.get('game_id')}}, processData: true});
  },

  render: function () {
    var view = this.template({
      update: this.model
    });
    console.log(view);
    this.$el.html(view);
    return this;
  }
});
