QuestStarter.Views.Nav = Backbone.View.extend({
  template: JST['navbar'],

  tagName: 'nav',

  className: 'group',

  events : {
    'click .log-out': 'logOut',
    'submit input' : 'fuckoff'
  },

  logOut: function (event) {
    event.preventDefault();
    $.ajax({
      method: "DELETE",
      url: "/session",
      success: function () {
        location.href = '/session/new';
      }
    });
  },

  fuckoff: function () {
    Backbone.history.navigate('#fuckoff', {trigger: true});
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
