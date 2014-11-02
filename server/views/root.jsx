'use strict';

var React = require('react');
var DOM = React.DOM;

var RootView = React.createClass({

    displayName: 'Root',

    render: function () {
        return (
            DOM.html(null,
                DOM.head(null,
                    DOM.meta({charSet: 'utf-8'}),
                    DOM.meta({httpEquiv: 'X-UA-Compatible', content: 'IE-Edge'}),
                    DOM.title(null, 'Filtr'),
                    DOM.link({rel: 'stylesheet', href: '/static/bundle.css'})),

                DOM.body(null,
                    DOM.div(null, 'Hey!'),
                    //DOM.div({
                    //    id: 'root',
                    //    dangerouslySetInnerHTML: {
                    //        __html: this.props.appMarkup
                    //    }
                    //}),
                    //
                    //DOM.script({
                    //    id: 'bootdata',
                    //    type: 'application/json',
                    //    dangerouslySetInnerHTML: {
                    //        __html: this.props.bootData
                    //    }
                    //}),

                    DOM.script({src: '/static/bundle.js?v=' + Date.now()})))
        );
    }

});

module.exports = RootView;