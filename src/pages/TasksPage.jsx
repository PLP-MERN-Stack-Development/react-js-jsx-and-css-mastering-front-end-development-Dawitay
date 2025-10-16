import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import useLocalStorage from '../hooks/useLocalStorage';

export default function TasksPage() {
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, text: 'Example task', done: false },
  ]);

  const [text, setText] = useState('');
  const [filter, setFilter] = useState('All');

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = { id: Date.now(), text: text.trim(), done: false };
    setTasks([newTask, ...tasks]);
    setText('');
  }

  function toggleDone(id) {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  function deleteTask(id) {
    setTasks(tasks.filter(t => t.id !== id));
  }

  const filtered = tasks.filter(t => {
    if (filter === 'Active') return !t.done;
    if (filter === 'Completed') return t.done;
    return true;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Task Manager</h2>

      <Card>
        <form onSubmit={addTask} className="flex gap-2">
          <input className="flex-grow border rounded px-3 py-2" value={text} onChange={e => setText(e.target.value)} placeholder="Add a task..." />
          <Button type="submit">Add</Button>
        </form>
        <div className="mt-3 flex gap-2">
          <Button variant={filter === 'All' ? 'primary' : 'secondary'} onClick={() => setFilter('All')}>All</Button>
          <Button variant={filter === 'Active' ? 'primary' : 'secondary'} onClick={() => setFilter('Active')}>Active</Button>
          <Button variant={filter === 'Completed' ? 'primary' : 'secondary'} onClick={() => setFilter('Completed')}>Completed</Button>
        </div>
      </Card>

      <div className="space-y-3">
        {filtered.length === 0 && <Card><p className="text-gray-500">No tasks</p></Card>}
        {filtered.map(task => (
          <Card key={task.id} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.done} onChange={() => toggleDone(task.id)} />
              <span className={task.done ? 'line-through text-gray-500' : ''}>{task.text}</span>
            </div>
            <div>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
