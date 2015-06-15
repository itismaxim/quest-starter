QuestStarter.Views.Updates = Backbone.CompositeView.extend({
  template: JST['games/updates'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addUpdate);
    this.collection.each(function(update) {
      this.addUpdate(update);
    }, this);
  },

  addUpdate: function (update) {
    var view = new QuestStarter.Views.Update({
      model: update
    });
    this.addSubview('#game-show-updates', view);
  },

  render: function () {
    var view = this.template();
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
