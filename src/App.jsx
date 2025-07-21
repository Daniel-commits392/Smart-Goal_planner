import React, { useState,useEffect } from 'react';
import Information from './Components/Goal-Information';
import GoalList from './Components/GoalList';
import'./Components/style.css';

function App () {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then(res => res.json())
      .then(data => setGoals(data));
  }, []);

  function handleAddGoal(newGoal) {
    setGoals([...goals, newGoal]);
  }


   function handleDeleteGoal(id) {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "DELETE"
    }).then(() => {
      setGoals(goals.filter(goal => goal.id !== id));
    });
  }
  

  return (
    <div>
      <h1>Welcome to the Smart Goal Planner</h1>
      <GoalList  goals={goals} onAddGoal={handleAddGoal} onDeleteGoal={handleDeleteGoal} />
      <Information goals={goals}/>
    </div>
  );
}
export default App;