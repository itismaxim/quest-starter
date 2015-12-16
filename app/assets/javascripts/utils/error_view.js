Backbone.ErrorView = Backbone.View.extend({
  error: function (model, response) {
    // $('.display-errors').html();

    var allErrors = "";
    for (var i = 0; i < response.responseJSON.length; i++) {
      allErrors += response.responseJSON[i];
      allErrors += ".\n";
    };
    //debugger;
    $('.display-errors').html(allErrors);
  }
});
