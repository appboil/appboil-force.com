/**
 * Created by Piotr Walczyszyn (outof.me | @pwalczyszyn)
 *
 * User: pwalczys
 * Date: 8/30/12
 * Time: 2:35 PM
 */

define(['jquery', 'underscore', 'Backbone', 'text!./MainView.tpl'],
    function ($, _, Backbone, MainTemplate) {

        var MainView = Backbone.View.extend({

            initialize:function (options) {
            },

            render:function () {
                // Setting view HTML from a template
                this.$el.html(MainTemplate);

                return this;
            }

        });

        return MainView;
    });