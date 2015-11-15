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
  },

  activateGame: function () {
    this.model.save({active: true}, {patch: true});
  },

  deactivateGame: function () {
    this.model.save({active: false}, {patch: true});
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
    var view = this.template({
      game: this.model
    });
    this.$el.html(view);
    return this;
  },
});
