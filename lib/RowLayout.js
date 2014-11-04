/** @jsx React.DOM */

'use strict';

var React = require('react')

module.exports = React.createClass({

    displayName: 'RowLayout',

    mixins: [
        require('./common')
    ],

    orientation: 'horizontal',

    getInitialState: function(){
        return {}
    },

    render: function(){
        return (
            React.DOM.div({className: "rf-row rf-layout"}, 
                this.renderChildren()
            )
        )
    }
})