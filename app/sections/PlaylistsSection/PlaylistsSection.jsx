'use strict';

var React = require('react');
var PlaylistActionCreators = require('../../actions/PlaylistActionCreators');
var PlaylistStore = require('../../stores/PlaylistStore');

var PlaylistSection = React.createClass({
    displayName: 'PlaylistSection',
    getInitialState: function () {
        PlaylistActionCreators.fetchAll();
        return {
            playlists: PlaylistStore.getAll()
        };
    },
    componentDidMount: function () {
        PlaylistStore.subscribe(this.onStoreChange);
    },

    componentWillUnmount: function () {
        PlaylistStore.unsubscribe(this.onStoreChange);
    },

    onStoreChange: function () {
        this.setState({playlists: PlaylistStore.getAll()});
    },
    render: function () {

        var items = this.state.playlists.map(function (playlist) {
            return (
                <li key={playlist.id}>{playlist.label}</li>
            );
        });

        return (
            <section className="PlaylistsSection">
                <ul>{items}</ul>
            </section>
        )
    }

});

module.exports = PlaylistSection;