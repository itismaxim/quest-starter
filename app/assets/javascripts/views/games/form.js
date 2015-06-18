QuestStarter.Views.GameForm = Backbone.CompositeView.extend({
  template: JST['games/form'],

  tagName: 'form',

  className: 'game-form',

  events: {
    'click .submit': 'saveGame',
  },

  saveGame: function () {
    var title = $('#title').val();
    var summary = $('#summary').val();
    var imageUrl = $('#imageUrl').val();
    var description = $('#description').val();
    this.model.save({
      title: title,
      summary: summary,
      image_url: imageUrl,
      description: description
    }, {success: function (){
      Backbone.history.navigate("games/" + this.model.id, {trigger: true});
    }.bind(this)});
  },

  render: function () {
    var view = this.template({
      game: this.model
    });

    this.$el.html(view);
    return this;
  },
});
