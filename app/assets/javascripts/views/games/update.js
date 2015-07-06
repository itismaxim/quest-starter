QuestStarter.Views.Update = Backbone.ErrorView.extend({
  template: JST['games/update'],
  editTemplate: JST['games/update-form'],

  className: 'update',

  events: {
    'click .edit-color': 'toggleEditForm',
    'click .delete-color': 'deleteUpdate'
  },

  initialize: function (options) {
    this.indexClass = 'update' + options.index
    this.listenTo(this.model, 'sync', this.render);
    this.editing = false;
  },

  toggleEditForm: function (event) {
    if (this.editing) {
      var that = this;
      this.editing = false;
      debugger;
      var title = $('.' + this.indexClass + "-title").text();
      var text = $('.' + this.indexClass + "-text").text();
      this.model.save({
        title: title,
        text: text,
      }, {error: that.error});
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
    // Error Call Back: We're Sorry, Something Went Wrong
  },

  render: function () {
    var template = this.editing ? this.editTemplate : this.template;
    var view = template({
      update: this.model,
      indexClass: this.indexClass
    });
    this.$el.html(view);
    return this;
  }
});
