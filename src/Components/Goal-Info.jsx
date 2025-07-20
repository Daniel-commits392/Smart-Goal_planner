import { useState, useEffect } from 'react';
import GoalForm from './GoalForm';

function Information() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }

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

      <GoalForm onAddGoal={handleAddGoal} />
    </div>
  );
}

export default Information;
