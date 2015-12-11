QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  tagname: 'article',

  className: 'game',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.page = options.page;
    this.currentView;
    this.createCurrentView(options.page);
    debugger;
  },

  createCurrentView: function (newPage) {
    if (newPage === 'comments') {
      this.currentView = new QuestStarter.Views.Comments({
        collection: this.model.comments(),
        gameId: this.model.id,
        authorId: this.model.get('author_id')
      });
    } else if (newPage === 'updates') {
      this.currentView = new QuestStarter.Views.Updates({
        collection: this.model.updates(),
        model: this.model
      });
    } else {
      this.currentView = new QuestStarter.Views.Description({
        model: this.model
      });
    }
  },

  events: {
    'click .unselected'        : 'switchView',
    'click .follow'            : 'followGame',
    'click .unfollow'          : 'unfollowGame',
    'click .activate'          : 'activateGame',
    'click .deactivate'        : 'deactivateGame',
    'click .delete'            : 'deleteGame',
    'click .edit'              : 'editGame',
    'input *[data-placeholder]': 'divPlaceholder',
    'blur  *[data-placeholder]': 'divPlaceholder',
  },

  divPlaceholder: function (event) {
    if (event.currentTarget.text) {
			$(event.currentTarget).removeAttribute('data-div-placeholder-content');
		} else {
      $(event.currentTarget).attr('data-div-placeholder-content', 'true');
      // doesn't put it back. Maybe cause you took away not:focus?
		}
  },

  deleteGame: function () {
    this.model.destroy({
      success: function() {
        Backbone.history.navigate('users/' + QuestStarter.currentUser.id, {trigger: true});
      }
    });
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
  },

  activateGame: function () {
    this.model.save({active: true}, {patch: true});
  },

  deactivateGame: function () {
    this.model.save({active: false}, {patch: true});
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
      var $activeButton = $('<div>', { class: 'sidebar-el-small active-button game-activate cursor-hover' });
      if (active === true) {
        $activeButton.text('Deactivate This Game').addClass('deactivate');
      } else {
        $activeButton.text('Activate This Game').addClass('activate');
      }
      this.$sidebar.append($activeButton);
    } else {
      var $author = $('<div>', { class: 'sidebar-el-small game-author cursor-hover' });
      $author.html("<a href='#/users/" + this.model.get('author_id') + "'>By " + this.model.escape('author_name') + "</a>");
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
    if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    this.$sidebar.append($followers);

    if (authored) {
      var $edit = $('<div>', { class: 'sidebar-el-small edit cursor-hover' }).text('Edit');
      var $delete = $('<div>', { class: 'sidebar-el-small delete cursor-hover' }).text('Delete');
      this.$sidebar.append($edit).append($delete);
    } else {
      var $following = $('<div>', { class: 'sidebar-el-small game-following cursor-hover' });
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
    this.$sidebar = $('.game-sidebar');
    this.buildSideBar();
    this.renderCurrentView();
    $( "[name='" + this.page + "']" ).addClass('selected').removeClass('unselected');
    return this;
  },

  renderCurrentView: function () {
    $('.game-tab').html(this.currentView.render().$el);
  },

  switchView: function (event) {
    $('.nav-option').removeClass('selected').addClass('unselected');
    $(event.currentTarget).addClass('selected').removeClass('unselected');
    var destination = $(event.currentTarget).attr('name')
    window.history.pushState('These Defaults are Silly', 'Game Show', '#games/' + this.model.id + '/' + destination);
    this.createCurrentView(destination);
    this.renderCurrentView();
  }
});
