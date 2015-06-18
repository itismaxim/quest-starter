window.QuestStarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    new QuestStarter.Routers.Router();
    Backbone.history.start();

    var nav = new QuestStarter.Views.Nav();
    $('#navbar').html(nav.render().$el);
  }
};
