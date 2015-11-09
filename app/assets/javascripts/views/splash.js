QuestStarter.Views.Splash = Backbone.View.extend({
  template: JST['splash'],

  tagName: 'article',

  className: 'splash group',

  events: {
    "click .first":  'goToNewGame',
    "click .second":  'goToYourGames',
    "click .third": 'loginAsGuest',
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

  saveGame: function () {
    var title = $('#title').text();
    var summary = $('#summary').text();
    var description = $('#description').text();
    var that = this;
    this.model.save({
      title: title,
      summary: summary,
      image_url: this.imageUrl,
      description: description
    }, {success: function (){
      Backbone.history.navigate("games/" + that.model.id, {trigger: true});
    }, error: that.error
    });
  },

  goToYourGames: function () {
    if (QuestStarter.currentUser) {
      Backbone.history.navigate('#/users/' + QuestStarter.currentUser.id, {trigger: true});
    } else {
      window.location.href="/session/new";
    };
  },

  revealHowTo: function () {
    if ($('.how-to').hasClass("hidden")) {
      $('.how-to').removeClass('hidden').addClass('revealed');
    } else {
      $('.how-to').removeClass('revealed').addClass('hidden');
    };
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
