QuestStarter.Views.GameForm = Backbone.CompositeView.extend({
  template: JST['games/form'],

  tagName: 'form',

  className: 'game-form',

  events: {
    'click .submit': 'saveGame',
    'click #cloudinary': 'submitImage'
  },

  initialize: function () {
    this.imageUrl = this.model.get("imageUrl");
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
    var title = $('#title').val();
    var summary = $('#summary').val();
    var description = $('#description').val();
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
