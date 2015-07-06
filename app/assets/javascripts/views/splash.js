QuestStarter.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  tagName: 'article',

  className: 'splash group',

  events: {
    "click .first":  'goToNewGame',
    "click .second": 'goToSearch',
    "click .third":  'goToYourGames',
    "click .fourth": 'revealHowTo',
  },

  goToNewGame: function () {
    if (QuestStarter.currentUser) {
      Backbone.history.navigate('#/games/new', {trigger: true});
    } else {
      window.location.href="/session/new";
    };
  },

  goToSearch: function () {
    Backbone.history.navigate('#/search', {trigger: true});
  },

  goToYourGames: function () {
    if (QuestStarter.currentUser) {
      Backbone.history.navigate('#/users/' + QuestStarter.currentUser.id, {trigger: true});
    } else {
      window.location.href="/session/new";
    };
  },

  revealHowTo: function () {
    $('.hidden').removeClass('hidden').addClass('revealed');
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
