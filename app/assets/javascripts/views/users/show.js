QuestStarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  tagName: 'article',

  className: 'user-show',

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview('#authored-games', new QuestStarter.Views.GamesSection({
      collection: this.model.authoredGames(),
      className: "authored-games",
      model: this.model
    }));
    this.addSubview('#followed-games', new QuestStarter.Views.GamesSection({
      collection: this.model.followedGames(),
      className: "followed-games",
      model: this.model
    }));
  },

  determineNames: function () {
    this.authoredText = "Games " + this.model.escape("name") + " Runs";
    this.followingText = "Games " + this.model.escape("name") + " Follows";
    if (QuestStarter.currentUser && QuestStarter.currentUser.id === this.model.id) {
      this.authoredText = "Games You Run";
      this.followingText = "Games You Follow";
    }
  },

  render: function () {
    this.determineNames();
    var view = this.template({
      user:           this.model,
      authoredText:   this.authoredText,
      followingText:  this.followingText
    });

    this.$el.html(view);
    this.attachSubviews();
    return this;
  }
});
