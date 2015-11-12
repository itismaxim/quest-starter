QuestStarter.Views.GameForm = Backbone.CompositeView.extend({
  template: JST['games/form'],

  tagName: 'form',

  className: 'game',

  events: {
    'click .activate'              : 'activateGame',
    'click .deactivate'            : 'deactivateGame',
    'click .save'                  : 'saveGame',
    'click .game-image-container'  : 'submitImage',
  },

  initialize: function () {
    this.listenTo(this.model, 'all', this.render);
    this.imageUrl = this.model.get("imageUrl"); // Kill this too
  },

  buildSideBar: function () {
    this.addActive();
    this.addSummary();
    this.addFollowers();
  },

  addActive: function () {
    // debugger;
    var active = this.model.get('active');
    var authored = this.model.get('authored'); // Kill this

    var $activeButton = $('<div>',
            { class: 'sidebar-el-small active-button game-activate cursor-hover' });
    if (active === true) {
      $activeButton.text('Deactivate This Game').addClass('deactivate');
    } else {
      $activeButton.text('Activate This Game').addClass('activate');
    }
    this.$sidebar.append($activeButton);

    var $active = $('<div>', { class: 'sidebar-el-small game-active' });
    if (active === true) {
      $active.text('Running').addClass('running');
    } else {
      $active.text('Dormant').addClass('dormant');
    }
    this.$sidebar.append($active);
  },

  addSummary: function () {
    var $summary = $('<p>', { class: 'game-summary editing', id: 'summary', contenteditable: "true" });
    $summary.html(this.model.escape('summary'));
    this.$sidebar.append($summary);
  },

  addFollowers: function () {
    var authored = this.model.get('authored');
    var followers = this.model.get('followers');
    var follow_id = this.model.get('follow_id');

    var $followers = $('<div>', { class: 'sidebar-el-small game-followers' });
    if (followers === 0) {
      $followers.text('0 Followers');
    } else if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    this.$sidebar.append($followers);

    var $save = $('<div>', { class: 'sidebar-el-small save cursor-hover' }).text('Save Game');
    this.$sidebar.append($save);
  },

  activateGame: function () {
    this.model.save({active: true}, {patch: true});
  },

  deactivateGame: function () {
    this.model.save({active: false}, {patch: true});
  },

  submitImage: function () {
    var that = this
    cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS,
      function (error, result) {
        // var uncutImage = result[0].url;
        // var cutImage = uncutImage.split("upload/")
        var uncutImageArray = result[0].url.split("upload/");
        var cutImage = uncutImageArray[0].concat('upload/w_700,h_500,c_fill/').concat(uncutImageArray[1]);
        //this.imageUrl =  result[0].url;
        this.imageUrl = cutImage;
        // only uncomment then next line if you want to ignore all
        // uploaded images in favor of a photo of Nick Cage
        // this.imageUrl = "http://holdupnow.com/wp-content/uploads/2014/10/cage1.jpg";
        var $image = $('<img>', { class: 'game-image', src: this.imageUrl });
        that.$gameImage.html($image);
      }.bind(this)
    );
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

  render: function () {
    // var activate = this.model.get('status') === "active" ? "activate " : "deactivate";
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    this.$gameImage = $('.game-image-container');
    this.$sidebar = $('.game-sidebar');
    debugger;
    this.buildSideBar();
    debugger;
    return this;
  },
});
