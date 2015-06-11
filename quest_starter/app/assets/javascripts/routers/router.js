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
    'api/users/:id': 'usersShow',
    // 'api/games/:id': 'gamesShow',
    // 'api/games/:id/edit': 'gamesEdit',
    // 'api/games/new': 'gamesNew',
    // // '': 'splash',
    // // '': 'splash',
  },

  splash: function () {
    var view = new QuestStarter.Views.Splash();
    this._swapView(view);
  },

  usersShow: function (id) {
    var user = QuestStarter.Collections.users.getOrFetch(id);
    var view = new QuestStarter.Views.UserShow({
      model: user
    });

    this._swapView(view);
  },

  // gamesIndex: function () {
  //   QuestStarter.Collections.games.fetch();
  //
  //   var view = new QuestStarter.Views.gamesIndex({
  //     collection: QuestStarter.Collections.games
  //   });
  //
  //   this._swapView(view);
  // },
  //
  // gameShow: function (id) {
  //   var game = QuestStarter.Collections.games.getOrFetch(id);
  //
  //   var view = new QuestStarter.Views.gameShow({
  //     model: game
  //   });
  //
  //   this._swapView(view);
  // },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
