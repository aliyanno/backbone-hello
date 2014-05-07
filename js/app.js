
(function ($) {
  "use strict";

  // Controller for the body view
  var AppView = Backbone.View.extend({
    el: $('body'), // Attaches the body to the backbone view

    nameTemplate: _.template( ' \
      <h3>Hello <%= name || "World" %></h3> \
      <input id="input" type="text" placeholder="Name" data="name"> \
      <input id="submit" type="submit"> ' 
    ),

    events: {
      'click input#submit': 'addValue'
    },

    models: {
      who: false,
    },

    initialize: function () {
      _.bindAll(this, 'render', 'addValue');
      this.render();
    },

    render: function () {
      $(this.el).html(this.nameTemplate({ name: this.models.who }));
      return this;
    },

    addValue: function () {
      var val = $('input#input').val();
      this.models.who = val;
      this.render();
    },

  });

  var appView = new AppView();

})(jQuery);
