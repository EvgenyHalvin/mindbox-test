import { TToDoItem } from '../../shared/types';

export const sortByName = (
  todos: TToDoItem[],
  sortNameOrder: 'asc' | 'desc'
) => {
  return [...todos].sort((a, b) => {
    const result = a.name.localeCompare(b.name, 'ru', {
      sensitivity: 'base',
    });
    return sortNameOrder === 'asc' ? result : -result;
  });
};
