QuestStarter.Views.Splash = Backbone.CompositeView.extend({
  template: JST['splash'],

  // className: 'boards-index',

  initialize: function () {
    // this.followedGames = model.followed_games;
    // this.authoredGames = model.authored_games;

    // this.listenTo(this.authoredGames, 'sync', this.render);
    // this.listenTo(this.followedGames, 'sync', this.render);
    // $('body').css('background-color', 'rgb(255, 255, 255)')
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
