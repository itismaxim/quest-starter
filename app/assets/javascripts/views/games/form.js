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
        // you should probably have something about errors here. If error, then shit,
        // else this:
        this.imageUrl =  result[0].url;
        //only uncomment this if you want all uploaded images to instead upload Nick Cage
        // this.imageUrl = "http://holdupnow.com/wp-content/uploads/2014/10/cage1.jpg";
      }.bind(this)
    );
  },

  saveGame: function () {
    var title = $('#title').val();
    var summary = $('#summary').val();
    var description = $('#description').val();
    this.model.save({
      title: title,
      summary: summary,
      image_url: this.imageUrl,
      description: description
    }, {success: function (){
      Backbone.history.navigate("games/" + this.model.id, {trigger: true});
    }.bind(this)});
    // Error call backs!
  },

  render: function () {
    var view = this.template({
      game: this.model
    });

    this.$el.html(view);
    return this;
  },
});
