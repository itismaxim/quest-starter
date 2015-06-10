QuestStarter.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  // className: 'boards-index',

  // initialize: function () {
  //   this.listenTo(this.collection, 'sync', this.render);
  //   $('body').css('background-color', 'rgb(255, 255, 255)')
  // },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
