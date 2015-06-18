QuestStarter.Views.FuckOff = Backbone.View.extend({
  template: JST['fuckoff'],

  className: 'fuckoff',

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
