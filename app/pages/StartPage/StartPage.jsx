'use strict';

var React = require('react');

var PlaylistsSection = React.createFactory(require('../../sections/PlaylistsSection/PlaylistsSection'));
var TracksSection = React.createFactory(require('../../sections/TracksSection/TracksSection'));

var StartPage = React.createClass({
    'displayName': 'StartPage',
    componentDidMount: function(){
    },
    render: function () {
        return (
            <section className="StartPage">
                <PlaylistsSection />
                <TracksSection />
            </section>
        )
    }

});

module.exports = StartPage;