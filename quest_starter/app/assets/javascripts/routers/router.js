QuestStarter.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    this.$rootEl = $('#main');
  },

  // initialize: function() {
  //   var dropDownView = new TrelloClone.Views.DropDownView({
  //     collection: TrelloClone.Collections.games
  //   });
  //   $('#add-dropdown').append(dropDownView.render().$el);
  //   this.$rootEl = $('#main');
  // },

  routes: {
    '': 'splash',
    // 'users/:id': 'userShow',
    // 'games/:id': 'gameShow',
    // 'games/:id/edit': 'gameEdit',
    // 'games/new': 'gamesNew',
    // // '': 'splash',
    // // '': 'splash',
  },

  splash: function () {
    var view = new QuestStarter.Views.Splash();
    this._swapView(view);
  },

  // gamesIndex: function () {
  //   TrelloClone.Collections.games.fetch();
  //
  //   var view = new TrelloClone.Views.gamesIndex({
  //     collection: TrelloClone.Collections.games
  //   });
  //
  //   this._swapView(view);
  // },
  //
  // gameShow: function (id) {
  //   var game = TrelloClone.Collections.games.getOrFetch(id);
  //
  //   var view = new TrelloClone.Views.gameShow({
  //     model: game
  //   });
  //
  //   this._swapView(view);
  // },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    var elem = view.render().$el;
    console.log(elem);
    this.$rootEl.html(elem);


    // this.$rootEl.html(view.render().$el);
  }
});
