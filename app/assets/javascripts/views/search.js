QuestStarter.Views.Search = Backbone.View.extend({
  template: JST['search'],

  tagName: 'nav',

  className: 'group',

  events : {
    'keyup .search-bar': 'search'
  },

    // send an ajax request?
    // and in the success call back
    // turn all the results into views?
  search: function (event) {
    var searchTerm = $(".search-bar").val();

    // Might not need this bit at all
    if (searchTerm === "") {
      this.makeResultSubviews([]);
      return;
    }

    // Is the URL right?
    // Doesn't it default to JSON?

    $.ajax({
      url: "/api/games/search",
      dataType: "json",
      method: "GET",
      data: { query: searchTerm },
      success: this.makeResultSubviews.bind(this)
    });
  },

  makeResultSubviews: function (results) {
    console.log(results);
  },

  render: function () {
    this.$el.html(this.template);
    // run makeResultSubviews();
    return this;
  }
});
