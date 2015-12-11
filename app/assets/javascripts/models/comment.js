QuestStarter.Models.Comment = Backbone.Model.extend({
  urlRoot: 'api/comments',

  // parse: function (response) {
  //   response.createdAt = new Date(response.created_at);
  //   return response;
  // }
});
