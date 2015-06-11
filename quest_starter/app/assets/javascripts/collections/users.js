
QuestStarter.Collections.Users = Backbone.Collection.extend({
  model: QuestStarter.Models.User,
  url: 'api/users',

  getOrFetch: function (id) {
    var user = this.get(id);

    if (!user) {
      user = new QuestStarter.Models.User({ id: id });
      user.fetch({
        success: function () {
          this.add(user);
        }.bind(this)
      });
    } else {
      user.fetch();
    }

    return user;
  }
});

QuestStarter.Collections.users = new QuestStarter.Collections.Users
