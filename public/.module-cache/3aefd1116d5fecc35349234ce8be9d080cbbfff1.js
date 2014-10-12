/** @jsx React.DOM */
(function(root, factory) {

  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-stylesheet', 'exports'], function(React, exports) {
      root.CheckboxWithLabel = factory(root, exports, React);
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(root, exports, require('react'));
  } else {
    root.CheckboxWithLabel = factory(root, {}, root.React);
  }

}(this, function(root, CheckboxWithLabel, React) {

  CheckboxWithLabel = React.createClass({displayName: 'CheckboxWithLabel',

    getInitialState: function() {
      return { isChecked: false };
    },

    onChange: function() {
      this.setState({isChecked: !this.state.isChecked});
    },

    render: function() {
      return (
        React.DOM.label({className: "checkbox-with-label"}, 
          React.DOM.input({
            type: "checkbox", 
            checked: this.state.isChecked, 
            onChange: this.onChange}
          ), 
          this.state.isChecked ? this.props.labelOn : this.props.labelOff
        )
      );
    }
  });

  return CheckboxWithLabel;
}));
