QuestStarter.Views.Search = Backbone.View.extend({
  template: JST['navbar'],

  tagName: 'nav',

  className: 'group',

  events : {
    'keystroke .search-bar': 'search'
    // 'submit input' : 'fuckoff'
  },

  initialize: function (options) {
    this.users = options.users;
    this.games = options.games;
  },

  search: function () {

  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
