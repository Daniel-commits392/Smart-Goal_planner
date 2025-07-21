function Information({goals}) {
  return (
    <div>
      <h2>Goal Information</h2>

      {goals.map(goal => (
        <div key={goal.id}>
          <p>Name: {goal.name}</p>
          <p>Target: {goal.target}</p>
          <p>Deadline: {goal.deadline}</p>
          <p>Progress: {goal.progress}</p>
        </div>
      ))}
    </div>
  );
}
  
export default Information;
