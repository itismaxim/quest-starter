QuestStarter.Views.UserShow = Backbone.CompositeView.extend({
  template: JST['users/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.addSubview('#authored', new QuestStarter.Views.Authored({
      collection: this.model.authoredGames()
    }));
    this.addSubview('#followed', new QuestStarter.Views.Followed({
      collection: this.model.followedGames()
    }));
  },

  render: function () {
    var view = this.template({
      user: this.model
    });

    this.$el.html(view);
    this.attachSubviews();
    return this;
  }

  // className: 'boards-index',

  // events: {
  //   'sortstop': 'saveOrds'
  // },
});
