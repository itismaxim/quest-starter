QuestStarter.Views.Nav = Backbone.View.extend({
  template: JST['navbar'],

  tagName: 'nav',

  className: 'group',

  events : {
    'click .log-out': 'logOut'
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

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
