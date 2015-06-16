QuestStarter.Views.Update = Backbone.View.extend({
  template: JST['games/update'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
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
