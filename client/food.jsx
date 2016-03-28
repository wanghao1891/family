// Task component - represents a single todo item
Food = React.createClass({
  propTypes: {
    // This component gets the task to display through a React prop.
    // We can use propTypes to indicate it is required
    food: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <li>{this.props.food.text}</li>
    );
  }
});
