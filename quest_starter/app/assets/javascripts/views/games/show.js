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
    'click .follow': 'followGame',
    'click .unfollow': 'unfollowGame',
    'click .activate': 'activateGame',
    'click .deactivate': 'deactivateGame',
    // 'sortstop': 'saveOrds'
  },

  followGame: function () {
    // var newFollow = new QuestStarter.Models.Follow
  },

  unfollowGame: function () {

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
    var following = this.model.get('following');

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

    if (authored === false) {
      var $following = $('<div>', { class: '.following game-show-sidebar-el' });
      if (following === null) {
        $following.text('Log In To Follow');
      } else if (following === true) {
        $following.text('Follow').addClass('followGame');
      } else {
        $following.text('Unfollow').addClass('unfollowGame');
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
