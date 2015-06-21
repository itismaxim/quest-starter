QuestStarter.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  tagName: 'article',

  className: 'splash',

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});