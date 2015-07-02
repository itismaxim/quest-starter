QuestStarter.Views.GameMiniShow = Backbone.View.extend({
  template_row_1: JST['users/mini_show_row_1'],
  template_row_2: JST['users/mini_show_row_2'],

  tagName: 'a',

  initialize: function (options) {
    this.chooseTemplate(options.index);
    this.listenTo(this.model, 'sync change', this.render);
  },

  chooseTemplate: function (num) {
    if (num % 6 < 3) {
      this.template = this.template_row_1;
    } else {
      this.template = this.template_row_2;
    }
  },

  render: function () {
    var view = this.template({
      game: this.model
    });

    this.$el.html(view);
    return this;
  }
});
