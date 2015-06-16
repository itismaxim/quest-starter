QuestStarter.Views.Updates = Backbone.CompositeView.extend({
  template: JST['games/updates'],

  events: {
    'click #new-update-submit': 'addNewUpdate',
  },

  initialize: function (options) {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addUpdate);
    this.collection.each(function(update) {
      this.addUpdate(update);
    }, this);
  },

  addUpdate: function (update) {
    var view = new QuestStarter.Views.Update({
      model: update,
    });
    this.addSubview('#game-show-updates', view);
  },

  addNewUpdate: function (event) {
    event.preventDefault();
    var title = $('#update-title').val();
    var text = $('#update-text').val();

    this.collection.create({
      title: title,
      text: text,
      user_id: this.model.get('user_id'),
      game_id: this.model.id
    });
  },

  render: function () {
    var view = this.template({
      authorId: this.model.get('author_id')
    });
    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
