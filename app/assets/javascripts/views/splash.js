QuestStarter.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  tagName: 'article',

  className: 'splash group',

  events: {
    "click .makeAGame":  'goToNewGame',
    "click .seeYourGames":  'goToYourGames',
    "click .loginAsGuest": 'loginAsGuest',
    "click .howItWorks": 'revealHowTo',
    "click .goToAllGames": 'goToAllGames',
  },

  goToNewGame: function () {
    if (QuestStarter.currentUser) {
      Backbone.history.navigate('#/games/new', {trigger: true});
    } else {
      window.location.href="/session/new";
    };
  },

  // goToSearch: function () {
  //   Backbone.history.navigate('#/search', {trigger: true});
  // },

  goToYourGames: function () {
    if (QuestStarter.currentUser) {
      Backbone.history.navigate('#/users/' + QuestStarter.currentUser.id, {trigger: true});
    } else {
      window.location.href="/session/new";
    };
  },

  goToAllGames: function () {
    Backbone.history.navigate('#/games', {trigger: true});
  },

  revealHowTo: function () {
    if ($('.how-to').hasClass("hidden")) {
      $('.how-to').removeClass('hidden').addClass('revealed');
    } else {
      $('.how-to').removeClass('revealed').addClass('hidden');
    };
  },

  loginAsGuest: function () {
    QuestStarter.currentUser = {
      name: "Hiring Guy",
      id: 6
    };
    var nav = new QuestStarter.Views.Nav();
    $('#navbar').html(nav.render().$el);
    $.ajax({
      type   : "POST",
      url    : "session",
      data   : {
        user: {
          name: "Hiring Guy",
          password: "pleasehireme"
        }
      },
      success : function() {
        Backbone.history.navigate('#/users/' + QuestStarter.currentUser.id);
      }
    });
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
