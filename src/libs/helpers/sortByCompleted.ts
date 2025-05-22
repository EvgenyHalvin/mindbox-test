import { TToDoItem } from '../../shared/types';

export const sortByCompleted = (
  todos: TToDoItem[],
  sortCompletedOrder: 'asc' | 'desc'
) => {
  return [...todos].sort((a, b) => {
    return sortCompletedOrder === 'asc'
      ? Number(a.completed) - Number(b.completed)
      : Number(b.completed) - Number(a.completed);
  });
};
