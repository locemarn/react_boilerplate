var React = require('react')
var createReactClass = require('create-react-class')

var Title = createReactClass({
  render: function() {
    return React.createElement('h1', null, 'Title')
  }
})

module.exports = Title