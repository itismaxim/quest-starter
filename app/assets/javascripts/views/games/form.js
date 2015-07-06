QuestStarter.Views.GameForm = Backbone.CompositeView.extend({
  template: JST['games/form'],

  tagName: 'form',

  className: 'game',

  events: {
    'click .submit': 'saveGame',
    'click #cloudinary': 'submitImage',
    // 'click h2': 'render',
  },

  initialize: function () {
    this.listenTo(this.model, 'all', this.render);
    this.imageUrl = this.model.get("imageUrl");
  },

  buildSideBar: function () {
    var active = this.model.get('active');
    var followers = this.model.get('followers');

    var $activeButton = $('<div>', { class: 'sidebar-el-small active-button game-activate' });
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

    var $summary = $('<p>', { class: 'game-summary' });
    // add content editable
    $summary.html(this.model.escape('summary'));
    this.$sidebar.append($summary);

    var $followers = $('<div>', { class: 'sidebar-el-small game-followers' });
    if (followers === 0) {
      $followers.text('0 Followers :c');
    } else if (followers === 1) {
      $followers.text('1 Follower');
    } else {
      $followers.text(followers +' Followers');
    }
    this.$sidebar.append($followers);

    var $edit = $('<div>', { class: 'sidebar-el-small edit' }).text('Edit');
    var $delete = $('<div>', { class: 'sidebar-el-small delete' }).text('Delete');
    this.$sidebar.append($edit).append($delete);
  },

  submitImage: function () {
    cloudinary.openUploadWidget(
      CLOUDINARY_OPTIONS,
      function (error, result) {
        // WOW: THAT MEANS     // Error Call Back: We're Sorry, Something Went Wrong Isn't used here!
        // you should probably have something about errors here. If error, then shit,
        // else this:
        this.imageUrl =  result[0].url;
        // only uncomment then next line
        // if you want all uploaded images to instead upload Nick Cage
        // this.imageUrl = "http://holdupnow.com/wp-content/uploads/2014/10/cage1.jpg";
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
    this.$sidebar = $('.game-sidebar');
    this.buildSideBar();
    return this;
  },
});
