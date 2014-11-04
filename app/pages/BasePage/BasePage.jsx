'use strict';

var React = require('react');
var DOM = React.DOM;

var BasePage = React.createClass({

    displayName: 'BasePage',

    render: function () {
        return (
            DOM.html(null,
                DOM.head(null,
                    DOM.meta({charSet: 'utf-8'}),
                    DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE-Edge'}),
                    DOM.title(null, 'Filtr'),
                    DOM.link({rel: 'stylesheet', href: '/static/bundle.css'})),

                DOM.body(null,
                    DOM.div({id:'page'}, this.props.app),
                    DOM.script({
                        id: 'bootdata',
                        type: 'application/json',
                        dangerouslySetInnerHTML: {
                            __html: this.props.bootData
                        }
                    }),

                    DOM.script({src: '/static/bundle.js?v=' + Date.now()})))
        );
    }

});

module.exports = BasePage;