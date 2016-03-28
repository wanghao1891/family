// App component - represents the whole app
function get_foods() {
  return [
    { _id: 1, text: "This is food 1" },
    { _id: 2, text: "This is food 2" },
    { _id: 3, text: "This is food 3" }
  ];
}

function render_foods() {
  return this.get_foods().map((food) => {
    return <Food key={food._id} food={food} />;
  });
}

function render() {
  return (
    <div className="container">
      <header>
        <h1>Food List</h1>
      </header>

      <ul>
        {this.render_foods()}
      </ul>
    </div>
  );
}

var options = {
  get_foods: get_foods,
  render_foods: render_foods,
  render: render
};

App = React.createClass(options);
