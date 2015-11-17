QuestStarter.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'splash',
    'users/:id': 'userShow',
    'games/new': 'gameForm',
    'games/:id/edit': 'gameForm',
    'games/:id': 'gameShow',
    'games': 'allGames',
  },

  splash: function () {
    var view = new QuestStarter.Views.Splash();
    this._swapView(view);
  },

  search: function () {
    var view = new QuestStarter.Views.Search({
      collection: QuestStarter.Collections.games
    });
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

  gameForm: function (id) {
    var game = id ? QuestStarter.Collections.games.getOrFetch(id) : new QuestStarter.Models.Game ({
      title: 'My Cool Game',
      summary: 'Summarize your game here. Make is short but sweet!',
      description: 'Describe your game here. This is where you can get in depth and describe what system you want to run, what the setting will be, and what kind of characters the players will have. Feel free to add anything else!',
      image_url: 'http://res.cloudinary.com/dar1oti2e/image/upload/w_700,h_500,c_fill/v1447300087/kpzpw79z8k4lq6e7a52o.jpg',
      active: false,
      followers: 0,
    });
    var view = new QuestStarter.Views.GameForm({
      model: game
    });

    this._swapView(view);
  },

  allGames: function () {
    var games = QuestStarter.Collections.games;
    var view = new QuestStarter.Views.AllGames({
      collection: games
    });

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
