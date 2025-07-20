import { useState } from 'react';

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [progress, setProgress] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      name,
      target: parseFloat(target),
      deadline,
      progress: parseFloat(progress)
    };

    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newGoal)
    })
      .then(res => res.json())
      .then(data => {
        onAddGoal(data); 
                setName('');
        setTarget('');
        setDeadline('');
        setProgress('');
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Goal</h3>
      <input
        type="text"
        placeholder="Goal Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={target}
        onChange={e => setTarget(e.target.value)}
        required
      />
      <input
        type="date"
        value={deadline}
        onChange={e => setDeadline(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Progress"
        value={progress}
        onChange={e => setProgress(e.target.value)}
        required
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
