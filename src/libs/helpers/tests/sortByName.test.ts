import { sortByName } from '../sortByName';
import { TToDoItem } from '../../../shared/types';

describe('sortByName', () => {
  it('should sort by name in ascending order', () => {
    const todos: TToDoItem[] = [
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ];

    const sortedTodos = sortByName(todos, 'asc');

    expect(sortedTodos).toEqual([
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ]);
  });

  it('should sort by name in descending order', () => {
    const todos: TToDoItem[] = [
      { id: '1', name: 'Task 1', completed: false },
      { id: '2', name: 'Task 2', completed: true },
    ];

    const sortedTodos = sortByName(todos, 'desc');

    expect(sortedTodos).toEqual([
      { id: '2', name: 'Task 2', completed: true },
      { id: '1', name: 'Task 1', completed: false },
    ]);
  });
});
