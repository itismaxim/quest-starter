QuestStarter.Views.Updates = Backbone.CompositeView.extend({
  template: JST['games/updates'],

  // className: 'updates',

  events: {
    'click #update-form-submit': 'addNewUpdate',
  },

  initialize: function (options) {
    this.lastIndex = 0;
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addUpdate);
    this.listenTo(this.collection, 'destroy', this.removeComment);
    this.collection.each(function(update) {
      this.addUpdate(update);
    }, this);
  },

  addUpdate: function (update) {
    var view = new QuestStarter.Views.Update({
      model: update,
      index: this.lastIndex
    });
    this.addSubview('#game-updates', view);
    this.lastIndex++;
  },

  addNewUpdate: function (event) {
    var title = $('#update-title').text();
    var text = $('#update-text').text();
    var that = this;

    var update = new QuestStarter.Models.Update({
      title: title,
      text: text,
      user_id: this.model.get('user_id'),
      game_id: this.model.id
    });

    update.save({},
      {success: function (model) {
        that.collection.add(model);
      }, error: that.error
    });
  },

  removeComment: function(model) {
    this.removeModelSubview('#game-updates', model);
  },

  render: function () {
    var view = this.template({
      authorId: this.model.get('author_id')
    });
    this.$el.html(view);
    this.attachSubviews();
    this.lastIndex = 0;
    return this;
  }
});
