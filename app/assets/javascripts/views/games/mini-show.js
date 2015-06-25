QuestStarter.Views.GameMiniShow = Backbone.View.extend({
  template1: JST['users/mini_show_top_left'],
  template2: JST['users/mini_show_top_right'],
  template3: JST['users/mini_show_bottom_left'],
  template4: JST['users/mini_show_bottom_right'],

  tagName: 'figure',

  initialize: function (options) {
    this.chooseTemplateAndClassName(options.index)
    this.listenTo(this.model, 'sync change', this.render);
  },

  chooseTemplateAndClassName: function (index) {
    if (index === 1) {
      this.template = this.template1;
      this.className = "odd-row";
    } else if (index === 2) {
      this.template = this.template2;
      this.className = "odd-row";
    } else if (index === 3) {
      this.template = this.template3;
      this.className = "even-row";
    } else {
      this.template = this.template4;
      this.className = "even-row";
    };
  },

  render: function () {
    var view = this.template({
      game: this.model
    });

    this.$el.html(view);
    return this;
  }
});
