window.QuestStarter = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Mixins: {},
  initialize: function() {
    new QuestStarter.Routers.Router();
    Backbone.history.start();
  }
};
