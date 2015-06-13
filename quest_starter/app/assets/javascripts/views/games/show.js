QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.description = new QuestStarter.Views.Description({
    //   model: this.model
    // });
    // this.updates = new QuestStarter.Views.Updates({
    //   model: this.model
    // });
    // this.comments = new QuestStarter.Views.Comments({
    //   model: this.model
    // });
    // this.surveys = new QuestStarter.Views.Surveys({
    //   model: this.model
    // });
  },

  events: {
    // 'click ': '',
    // 'click ': '',
    // 'click ': '',
    // 'click ': '',
    'click .followGame': 'followGame',
    'click .unfollowGame': 'unfollowGame',
    'click .activate': 'activateGame',
    'click .deactivate': 'deactivateGame',
    // 'sortstop': 'saveOrds'
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
    var $sidebar = $('.game-show-sidebar');

    var active = this.model.get('active');
    var authored = this.model.get('authored');
    var followers = this.model.get('followers');
    var follow_id = this.model.get('follow_id');

    var $summary = $('<div>', { class: '.summary game-show-sidebar-el' });
    $summary.text(this.model.escape('summary'));
    $sidebar.append($summary);

    var $active = $('<div>', { class: '.active game-show-sidebar-el' });
    if (active === true) {
      $active.text('Active');
    } else {
      $active.text('Inactive');
    }
    $sidebar.append($active);

    if (authored === true) {
      var $activeButton = $('<div>', { class: '.active-button game-show-sidebar-el' });
      if (active === true) {
        $activeButton.text('Deactivate This Game').addClass('deactivate');
      } else {
        $activeButton.text('Activate This Game').addClass('activate');
      }
      $sidebar.append($activeButton);
    }

    var $followers = $('<div>', { class: '.followers game-show-sidebar-el' });
    if (followers === 0) {
      $followers.text('0 Followers :c');
    } else if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    $sidebar.append($followers);

    if (!authored) {
      var $following = $('<div>', { class: '.following game-show-sidebar-el' });
      if (!QuestStarter.currentUser) {
        $following.text('Log In To Follow');
      } else if (follow_id) {
        $following.text('Unfollow').addClass('unfollowGame');
      } else {
        $following.text('Follow').addClass('followGame');
      }
      $sidebar.append($following);
    }
  },

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.renderCurrentView();
    this.$el.html(view);
    this.buildSideBar();
    return this;
  },

  renderCurrentView: function () {

  },

  swapView: function (view) {
    // this.currentView ||= descritpion actually. How I do that?
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.renderCurrentView();
  }
});
