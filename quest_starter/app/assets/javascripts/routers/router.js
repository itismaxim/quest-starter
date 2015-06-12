QuestStarter.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  // initialize: function() {
  //   var dropDownView = new QuestStarter.Views.DropDownView({
  //     collection: QuestStarter.Collections.games
  //   });
  //   $('#add-dropdown').append(dropDownView.render().$el);
  //   this.$rootEl = $('#main');
  // },

  routes: {
    '': 'splash',
    'users/:id': 'userShow',
    'games/:id': 'gameShow',
    // 'api/games/:id/edit': 'gamesEdit',
    // 'api/games/new': 'gamesNew',
    // // '': 'splash',
    // // '': 'splash',
  },

  splash: function () {
    var view = new QuestStarter.Views.Splash();
    this._swapView(view);
  },

  userShow: function (id) {
    var user = QuestStarter.Collections.users.getOrFetch(id);
    var view = new QuestStarter.Views.UserShow({
      model: user
    });

    this._swapView(view);
  },

  gameShow: function (id) {
    var game = QuestStarter.Collections.games.getOrFetch(id);
    var view = new QuestStarter.Views.GameShow({
      model: game
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
