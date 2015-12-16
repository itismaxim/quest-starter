QuestStarter.Collections.Updates = Backbone.Collection.extend({
  model: QuestStarter.Models.Update,
  url: 'api/updates',

  // comparator: function(model) {
  //     // debugger;
  //     return -model.get('createdAt').getTime();
  // },

  getOrFetch: function (id) {
    var update = this.get(id);

    if (!update) {
      update = new QuestStarter.Models.Update({ id: id });
      update.fetch({
        success: function () {
          this.add(update);
        }.bind(this)
      });
    } else {
      update.fetch();
    }

    return update;
  }
});
