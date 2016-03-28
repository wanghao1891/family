// App component - represents the whole app
App = React.createClass({
  getFoods() {
    return [
      { _id: 1, text: "This is food 1" },
      { _id: 2, text: "This is food 2" },
      { _id: 3, text: "This is food 3" }
    ];
  },

  renderFoods() {
    return this.getFoods().map((food) => {
      return <Food key={food._id} food={food} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Food List</h1>
        </header>

        <ul>
          {this.renderFoods()}
        </ul>
      </div>
    );
  }
});
