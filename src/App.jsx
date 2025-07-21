import React, { useState } from 'react';
import Information from './Components/Goal-Information';
import GoalList from './Components/GoalList';
import'./Components/style.css';

function App () {
  const [goals, setGoals] = useState([]);


  function handleAddGoal(newGoal) {
     console.log("📌 New goal received in App:", newGoal);
    setGoals([...goals, newGoal]);
  }


   function handleDeleteGoal(id) {
      setGoals(goals.filter(goal => goal.id !== id));
  }
  
  return (
    <div>
      <h1>Welcome to the Smart Goal Planner</h1>
      <p>Just write down your goals to keep track of them .</p>
      <GoalList  goals={goals} onAddGoal={handleAddGoal} onDeleteGoal={handleDeleteGoal} />
      <Information goals={goals}/>
    </div>
  );
}
export default App;