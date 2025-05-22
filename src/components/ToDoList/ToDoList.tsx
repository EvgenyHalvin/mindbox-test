import {
  Checkbox,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  Delete as DeleteIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
} from '@mui/icons-material';

import { TToDoItem } from '../../shared/types';

type Props = {
  todos: TToDoItem[];
  sortNameOrder: 'asc' | 'desc';
  sortCompletedOrder: 'asc' | 'desc';
  onSortByName: () => void;
  onSortByCompleted: () => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const ToDoList = ({
  todos,
  sortNameOrder,
  sortCompletedOrder,
  onSortByName,
  onSortByCompleted,
  onToggle,
  onDelete,
}: Props) => {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={onSortByName}
          disabled={todos.length < 2}
          endIcon={
            sortNameOrder === 'asc' ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )
          }
        >
          Сортировать по имени
        </Button>
        <Button
          onClick={onSortByCompleted}
          disabled={todos.length < 2}
          endIcon={
            sortCompletedOrder === 'asc' ? (
              <ArrowUpwardIcon />
            ) : (
              <ArrowDownwardIcon />
            )
          }
        >
          Сортировать по выполнению
        </Button>
      </Stack>
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        {todos.map(todo => (
          <ListItem
            key={todo.id}
            disablePadding
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
            }}
            secondaryAction={
              <Tooltip title="Удалить задачу">
                <IconButton
                  edge="end"
                  onClick={() => onDelete(todo.id)}
                  sx={{ color: 'text.secondary' }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            }
          >
            <ListItemButton
              dense
              onClick={() => onToggle(todo.id)}
              sx={{
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: todo.completed ? 'grey.400' : 'text.primary',
                    }}
                  >
                    {todo.name}
                  </Typography>
                }
                secondary={
                  todo.createdAt ? (
                    <>
                      <Typography variant="caption" color="text.secondary">
                        Создана:{' '}
                        {new Date(todo.createdAt).toLocaleString('ru-RU', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </Typography>
                    </>
                  ) : null
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
