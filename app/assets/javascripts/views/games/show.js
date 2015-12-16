QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  tagname: 'article',

  className: 'game',

  events: {
    'click .unselected'        : 'switchView',
    'click .follow'            : 'followGame',
    'click .unfollow'          : 'unfollowGame',
    'click .activate'          : 'activateGame',
    'click .deactivate'        : 'deactivateGame',
    'click .delete'            : 'deleteGame',
    'click .edit'              : 'toggleEditForm',
    'input *[data-placeholder]': 'divPlaceholder',
    'blur  *[data-placeholder]': 'divPlaceholder',
    'click .outer'             : 'submitImage',
  },

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.page = options.page;
    this.currentView;
    this.createCurrentView(options.page);
    this.editing = this.model.get('id') ? false : true;
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

  toggleEditForm: function () {
    //debugger;
    if (this.editing) {
      this.saveGame();

      $('.header-inside').removeClass('editing').removeAttr( 'contenteditable' ).removeAttr( 'id' )
      $('.game-summary').removeClass('editing').removeAttr( 'contenteditable' ).removeAttr( 'id' )
      $('.the-game-description').removeClass('editing-description').removeAttr( 'contenteditable' ).removeAttr( 'id' )
      $('.game-image-container').removeClass('outer');
      $('.edit').text('Edit');
      // and also change it into a save button instead

      //then add the delete button
      $('.nav-option-left').addClass('unselected').removeClass('invisible-tab');
      $('.nav-option-right').addClass('unselected').removeClass('invisible-tab');

      this.editing = false;
    } else {
      $('.nav-option').removeClass('unselected').removeClass('selected').addClass('invisible-tab');
      $('.nav-option-center').addClass('selected').removeClass('invisible-tab');
      this.createCurrentView('description');
      this.renderCurrentView();

      $('.header-inside').addClass('editing').attr( 'contenteditable', 'true' ).attr( 'id', 'title' );
      $('.game-summary').addClass('editing').attr( 'contenteditable', 'true' ).attr( 'id', 'summary' );
      $('.the-game-description').addClass('editing-description').attr( 'contenteditable', 'true' ).attr( 'id', 'description' );
      $('.game-image-container').addClass('outer');
      $('.edit').text('Save');
      // turn this into the save button also
      //$('.delete').addClass('delete-disabled')
      // hmmmm

// <div class='sidebar-el-small delete cursor-hover'>Delete</div>
//  var $delete = $('<div>', { class: 'sidebar-el-small delete cursor-hover' }).text('Delete');

      this.editing = true;
    }
  },

  saveGame: function () {
    var title = $('#title').text();
    var summary = $('#summary').text();
    // debugger;
    var description = $('#description').text();
    var that = this;
    this.model.save({
      title: title,
      summary: summary,
      image_url: this.imageUrl,
      description: description
    }, {error: that.error});
  },

  submitImage: function () {
    cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS,
      function (error, result) {
        var uncutImageArray = result[0].url.split("upload/");
        var cutImageUrl = uncutImageArray[0].concat('upload/w_700,h_500,c_fill/').concat(uncutImageArray[1]);
        this.imageUrl = cutImageUrl;
        // only uncomment then next line if you want to ignore all
        // uploaded images in favor of a photo of Nick Cage
        // this.imageUrl = "http://holdupnow.com/wp-content/uploads/2014/10/cage1.jpg";
        $('.game-image').attr( "src", this.imageUrl );
      }.bind(this)
    );
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
      var $activeButton = $('<div>', { class: 'sidebar-el-small game-activate cursor-hover' });
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

  createCurrentView: function (newPage) {
    if (newPage === 'comments') {
      this.currentView = new QuestStarter.Views.Comments({
        collection: this.model.comments(),
        gameId: this.model.id
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

  render: function () {
    var view = this.template({
      game: this.model,
      gameIsNew: this.gameIsNew
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
