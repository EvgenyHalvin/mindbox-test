import { sortByCompleted } from '../sortByCompleted';
import { TToDoItem } from '../../../shared/types';

describe('sortByCompleted', () => {
  it('should sort by completed in ascending order', () => {
    const todos: TToDoItem[] = [
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ];

    const sortedTodos = sortByCompleted(todos, 'asc');

    expect(sortedTodos).toEqual([
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ]);
  });

  it('should sort by completed in descending order', () => {
    const todos: TToDoItem[] = [
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ];

    const sortedTodos = sortByCompleted(todos, 'desc');

    expect(sortedTodos).toEqual([
      { id: '2', name: 'Task 2', completed: true },
      { id: '1', name: 'Task 1', completed: false },
    ]);
  });
});
