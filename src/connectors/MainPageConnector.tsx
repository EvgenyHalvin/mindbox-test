import { useState } from 'react';

import { TToDoItem } from '../shared/types';
import { PageTemplate, ToDoForm, ToDoList } from '../components';
import { initialToDoTasks, sortByName, sortByCompleted } from '../libs';

export const MainPageConnector = () => {
  const [todos, setTodos] = useState<TToDoItem[]>(initialToDoTasks);
  const [sortNameOrder, setSortNameOrder] = useState<'asc' | 'desc'>('asc');
  const [sortCompletedOrder, setSortCompletedOrder] = useState<'asc' | 'desc'>(
    'asc'
  );

  const onSubmitHandler = (value: string) => {
    setTodos(prev => [
      {
        id: Date.now().toString(),
        name: value,
        completed: false,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const onToggleHandler = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDeleteHandler = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const sortByNameHandler = () => {
    setSortNameOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    setTodos(sortByName(todos, sortNameOrder));
  };

  const sortByCompletedHandler = () => {
    setSortCompletedOrder(prev => (prev === 'asc' ? 'desc' : 'asc'));
    setTodos(sortByCompleted(todos, sortCompletedOrder));
  };

  return (
    <PageTemplate title="TO-DO List">
      <ToDoForm onSubmit={onSubmitHandler} />
      <ToDoList
        todos={todos}
        sortNameOrder={sortNameOrder}
        sortCompletedOrder={sortCompletedOrder}
        onSortByName={sortByNameHandler}
        onSortByCompleted={sortByCompletedHandler}
        onToggle={onToggleHandler}
        onDelete={onDeleteHandler}
      />
    </PageTemplate>
  );
};
