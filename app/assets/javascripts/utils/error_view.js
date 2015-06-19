Backbone.ErrorView = Backbone.View.extend({
  error: function (model, response) {
    var errors = response.responseText.slice(2,-2);
    // On a comma, remove it, and put in a new line.
    // I think you can do that with regex?
    $('.display-errors').html(errors);
  }
});
