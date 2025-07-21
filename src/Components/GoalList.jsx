import React from "react";
import GoalForm from "./GoalForm";

function GoalList ({goals, onAddGoal,onDeleteGoal}) {
    return (
        <div>
            <h2>The Goal List</h2>
            <GoalForm onAddGoal={onAddGoal} />
           <ul>
                {goals.map(goal => (
                    <li key={goal.id}>
                        <h3>{goal.name}</h3>
                        <p>Target: {goal.target}</p>
                        <p>Deadline: {goal.deadline}</p>
                        <p>Progress: {goal.progress}</p>
                        <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
                    </li>
                ))}
           </ul>

        </div>
    )
}
export default GoalList;