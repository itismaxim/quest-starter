QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.description = new QuestStarter.Views.Description({
      model: this.model
    });
    this.updates = new QuestStarter.Views.Updates({
      collection: this.model.updates(),
      model: this.model
    });
    this.comments = new QuestStarter.Views.Comments({
      collection: this.model.comments(),
      gameId: this.model.id
    });
    this.surveys = new QuestStarter.Views.Surveys({
      model: this.model
      // CHange this to be collection: this.model.surveys
    });
    this.currentView = this.description;
    // this.currentView = this.comments;
  },

  events: {
    'click .nav-option': 'switchView',
    'click .follow':     'followGame',
    'click .unfollow':   'unfollowGame',
    'click .activate':   'activateGame',
    'click .deactivate': 'deactivateGame',
    'click .delete':     'deleteGame',
    'click .edit':       'editGame',
  },

  deleteGame: function () {
    this.model.destroy({
      success: function() {
        Backbone.history.navigate('users/' + QuestStarter.currentUser.id, {trigger: true});
      }
    });
    // HO HO ALMOST MISSED THIS.
  },

  editGame: function () {
    Backbone.history.navigate('games/' + this.model.id + '/edit', {trigger: true});
  },

  followGame: function () {
    var newFollow = new QuestStarter.Models.Follow({
      user_id: QuestStarter.currentUser.id,
      game_id: this.model.id
    });

    var currrentFollowers = this.model.get('followers')

    newFollow.save({}, {
      success: function () {
        this.model.set({follow_id: newFollow.id, followers: currrentFollowers + 1});
        this.render();
      }.bind(this)
    });
    // TAQ: Do I need the error callbacks here? It's possible that... what?
  },

  unfollowGame: function () {
    var killThis = new QuestStarter.Models.Follow({id: this.model.get('follow_id')})

    var currrentFollowers = this.model.get('followers')

    killThis.destroy({
      success: function () {
        this.model.set({follow_id: null, followers: currrentFollowers - 1});
        this.render();
      }.bind(this)
    });

    // Same as above.
  },

  activateGame: function () {
    this.model.save({active: true}, {patch: true});
    // Same as above.
  },

  deactivateGame: function () {
    this.model.save({active: false}, {patch: true});
    // Okay: this error callback should be generic. You should write it for ALL Views
    // Wait, does that mean Backbone already has one?
  },

  buildSideBar: function () {
    this.addSummary();
    this.addActive();
    this.addFollowers();
  },

  addSummary: function () {
    var $summary = $('<div>', { class: '.summary game-show-sidebar-el' });
    $summary.html(this.model.escape('summary'));
    this.$sidebar.append($summary);
  },

  addActive: function () {
    var active = this.model.get('active');
    var authored = this.model.get('authored');

    var $active = $('<div>', { class: '.active game-show-sidebar-el' });
    if (active === true) {
      $active.text('Running');
    } else {
      $active.text('Dormant');
    }
    this.$sidebar.append($active);

    if (authored === true) {
      var $activeButton = $('<div>', { class: '.active-button game-show-sidebar-el' });
      if (active === true) {
        $activeButton.text('Deactivate This Game').addClass('deactivate');
      } else {
        $activeButton.text('Activate This Game').addClass('activate');
      }
      this.$sidebar.append($activeButton);
    }
  },

  addFollowers: function () {
    var authored = this.model.get('authored');
    var followers = this.model.get('followers');
    var follow_id = this.model.get('follow_id');

    var $followers = $('<div>', { class: '.followers game-show-sidebar-el' });
    if (followers === 0) {
      $followers.text('0 Followers :c');
    } else if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    this.$sidebar.append($followers);

    if (!authored) {
      var $following = $('<div>', { class: '.following game-show-sidebar-el' });
      if (!QuestStarter.currentUser) {
        $following.text('Log In To Follow');
      } else if (follow_id) {
        $following.text('Unfollow').addClass('unfollow');
      } else {
        $following.text('Follow').addClass('follow');
      }
      this.$sidebar.append($following);
    }
  },

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    this.$sidebar = $('.game-show-sidebar');
    this.buildSideBar();
    this.renderCurrentView();
    return this;
  },

  renderCurrentView: function () {
    $('.game-show-tab').html(this.currentView.render().$el);
    // $('.game-show-tab').html('QUACK');
  },

  switchView: function (event) {
    this.currentView && this.currentView.remove();
    var newTabName = event.currentTarget.getAttribute('name');
    if (newTabName === 'description') {
      this.currentView = this.description;
    } else if (newTabName === 'updates') {
      this.currentView = this.updates;
    } else if (newTabName === 'comments') {
      this.currentView = this.comments;
    } else if (newTabName === 'surveys') {
      this.currentView = this.surveys;
    } else {
      return;
    }
    this.renderCurrentView();
  }
});
