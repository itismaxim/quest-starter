QuestStarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  tagName: 'article',

  className: 'user-show',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);

    var thisMine = false
    if (QuestStarter.currentUser && QuestStarter.currentUser.id === this.model.id) {
      thisMine = true
    }

    this.addSubview('#authored-games', new QuestStarter.Views.Authored({
      collection: this.model.authoredGames(),
      model: this.model,
      mine: thisMine
    }));
    this.addSubview('#followed-games', new QuestStarter.Views.Followed({
      collection: this.model.followedGames(),
      model: this.model,
      mine: thisMine
    }));
  },

  render: function () {
    var view = this.template({
      user: this.model
    });

    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
