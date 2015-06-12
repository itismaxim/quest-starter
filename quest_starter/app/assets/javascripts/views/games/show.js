QuestStarter.Views.GameShow = Backbone.CompositeView.extend({
  template: JST['games/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    make the currentView equal the thing under this comment
    this.description = new QuestStarter.Views.Description({
      model: this.model
    });
    this.updates = new QuestStarter.Views.Updates({
      model: this.model
    });
    this.comments = new QuestStarter.Views.Comments({
      model: this.model
    });
    this.surveys = new QuestStarter.Views.Surveys({
      model: this.model
    });
  },

  events: {
    'click ': '',
    'click ': '',
    'click ': '',
    'click ': '',
    'click ': '',
    'click ': '',
    // 'sortstop': 'saveOrds'
  },

  render: function () {
    var view = this.template({
      game: this.model
    });
    this.renderCurrentView()
    this.$el.html(view);
    return this;
  },

  renderCurrentView: function () {

  },

  swapView: function (view) {
    // this.currentView ||= descritpion actually. How I do that?
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.renderCurrentView();
  }
});
