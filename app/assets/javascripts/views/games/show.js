QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  tagname: 'article',

  className: 'game',

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
    // I want this to happen in the router.
  },

  events: {
    'click .nav-option': 'switchView',
    'click .follow':     'followGame',
    'click .unfollow':   'unfollowGame',
    'click .activate':   'activateGame',
    'click .deactivate': 'deactivateGame',
    'click .delete':     'deleteGame',
    'click .edit':       'editGame',
    'click .nav-option': 'selectNav',
  },

  deleteGame: function () {
    this.model.destroy({
      success: function() {
        Backbone.history.navigate('users/' + QuestStarter.currentUser.id, {trigger: true});
      }
    });
    // Error Call Back: We're Sorry, Something Went Wrong
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
    // Error Call Back: We're Sorry, Something Went Wrong
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
    // Error Call Back: We're Sorry, Something Went Wrong
  },

  activateGame: function () {
    this.model.save({active: true}, {patch: true});
    // Error Call Back: We're Sorry, Something Went Wrong
  },

  deactivateGame: function () {
    this.model.save({active: false}, {patch: true});
    // Error Call Back: We're Sorry, Something Went Wrong
  },

  buildSideBar: function () {
    this.addActive();
    this.addSummary();
    this.addFollowers();
  },

  addActive: function () {
    var active = this.model.get('active');
    var authored = this.model.get('authored');

    if (authored === true) {
      var $activeButton = $('<div>', { class: 'sidebar-el-small active-button game-activate' });
      if (active === true) {
        $activeButton.text('Deactivate This Game').addClass('deactivate');
      } else {
        $activeButton.text('Activate This Game').addClass('activate');
      }
      this.$sidebar.append($activeButton);
    } else {
      var $author = $('<div>', { class: 'sidebar-el-small game-author' });
      $author.html("<a href='#/users/" + this.model.get('author_id') + "'>By " + this.model.escape('author_name') + "</a>");

      // $author.text('By ' + this.model.escape('author_name'));
      // $author.attr('href', '#/users/' + this.model.get('author_id'))
      this.$sidebar.append($author);
    }

    var $active = $('<div>', { class: 'sidebar-el-small game-active' });
    if (active === true) {
      $active.text('Running').addClass('running');
    } else {
      $active.text('Dormant').addClass('dormant');
    }
    this.$sidebar.append($active);
  },

  addSummary: function () {
    var $summary = $('<p>', { class: 'game-summary' });
    $summary.html(this.model.escape('summary'));
    this.$sidebar.append($summary);
  },

  addFollowers: function () {
    var authored = this.model.get('authored');
    var followers = this.model.get('followers');
    var follow_id = this.model.get('follow_id');

    var $followers = $('<div>', { class: 'sidebar-el-small game-followers' });
    if (followers === 0) {
      $followers.text('0 Followers :c');
    } else if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    this.$sidebar.append($followers);

    if (authored) {
      var $edit = $('<div>', { class: 'sidebar-el-small edit' }).text('Edit');
      var $delete = $('<div>', { class: 'sidebar-el-small delete' }).text('Delete');
      this.$sidebar.append($edit).append($delete);
    } else {
      var $following = $('<div>', { class: 'sidebar-el-small game-following' });
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

  selectNav: function (target) {
    $('.nav-option').removeClass('selected');
    $(target.currentTarget).addClass('selected');
  },

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    this.$sidebar = $('.game-sidebar');
    this.buildSideBar();
    this.renderCurrentView();
    return this;
  },

  renderCurrentView: function () {
    $('.game-tab').html(this.currentView.render().$el);
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
