/// <reference path="/backbone.js" />
/// <reference path="/jquery-1.10.2.js" />
/// <reference path="/underscore.js" />
/// <reference path="/model.js" />

$(function () {
    SkillView = Backbone.View.extend({
        template: _.template($('#skill-template').html()),

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
});