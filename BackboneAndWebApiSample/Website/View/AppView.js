/// <reference path="/backbone.js" />
/// <reference path="/jquery-1.10.2.js" />
/// <reference path="/underscore.js" />
/// <reference path="/model.js" />


$(function () {

    // Our overall **AppView** is the top-level piece of UI.
    AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        el: $("#app"),

        events: {
            "click #addSkill": "addSkill"
        },

        addSkill: function () {
            var item = {
                title: this.newSkillName.val(),
                description: this.newSkillDescription.val()
            };

            skillsList.create(item);

            this.newSkillName.val('');
            this.newSkillDescription.val('');
        },

        initialize: function () {
            this.newSkillName = this.$("#skillName");
            this.newSkillDescription = this.$("#skillDescription");

            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'add', this.render);
        },

        render: function () {
            $("#skillList").html("");
            if (this.model.length) {
                for (var i = 0; i < this.model.length; i++) {
                    var view = new SkillView({ model: this.model.at(i) });
                    $("#skillList").append(view.render().el);
                }
            }
        }
    });
});