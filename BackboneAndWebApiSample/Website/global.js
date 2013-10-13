/// <reference path="/lib/backbone.js" />
/// <reference path="/lib/jquery-1.10.2.js" />
/// <reference path="/lib/underscore.js" />
$(function () {

    skillsList = new ItemSet();

    skillsList.fetch({ data: { page: 'no' } });

    var app = new AppView({ model: skillsList });
    app.render();
});