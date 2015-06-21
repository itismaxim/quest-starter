QuestStarter.Views.Search = Backbone.View.extend({
  template: JST['search/search'],

  tagName: 'nav',

  className: 'group',

  events : {
    'keypress .search-bar': 'search'
  },

  search: function () {
    // send an ajax request?
    // and in the success call back
    // turn all the results into views?
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});
