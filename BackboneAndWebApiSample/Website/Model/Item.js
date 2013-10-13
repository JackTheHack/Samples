/// <reference path="/backbone.js" />
/// <reference path="/jquery-1.10.2.js" />
/// <reference path="/underscore.js" />

$(function () {
    Item = Backbone.Model.extend({
        defaults: function () {
            return {
                id: -1,
                title: null,
                description: null
            }
        }
    });

    ItemSet = Backbone.Collection.extend({
        url: "http://localhost:8080/api/Skills/",
        model: Item
    });


});