const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue',
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(item => {
    return <li key={item.toLowerCase()}>{item}</li>;
  }); // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
