QuestStarter.Views.Update = Backbone.View.extend({
  template: JST['games/update'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var view = this.template({
      update: this.model
    });
    this.$el.html(view);
    return this;
  }
});
