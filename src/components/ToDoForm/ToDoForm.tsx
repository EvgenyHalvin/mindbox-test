import { useState } from 'react';
import {
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon, Clear as ClearIcon } from '@mui/icons-material';

type Props = {
  onSubmit: (value: string) => void;
};

export const ToDoForm = ({ onSubmit }: Props) => {
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const formattedValue = value.trim();
    if (formattedValue === '') {
      setError('Название не может состоять только из пробелов.');
      return;
    }

    onSubmit(formattedValue);
    setValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError('');
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      direction="row"
      spacing={2}
      sx={{ width: '100%', justifyContent: 'center' }}
    >
      <TextField
        label="Новая задача"
        value={value}
        onChange={handleChange}
        sx={{ width: '100%' }}
        autoFocus
        autoComplete="off"
        error={!!error}
        helperText={error}
        InputProps={{
          endAdornment: value && (
            <InputAdornment position="end">
              <Tooltip title="Очистить поле">
                <IconButton
                  disabled={!value}
                  onClick={() => {
                    setValue('');
                    setError('');
                  }}
                  sx={{ color: 'text.secondary' }}
                >
                  <ClearIcon />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
          inputProps: {
            maxLength: 120,
          },
        }}
      />
      <Tooltip title="Добавить задачу">
        <Button
          type="submit"
          variant="contained"
          disableElevation
          disabled={!value}
          sx={{
            width: '90px',
            px: '30px',
            minWidth: '90px',
            height: '56px',
            alignSelf: 'flex-start',
          }}
        >
          <AddIcon sx={{ fontSize: '24px' }} />
        </Button>
      </Tooltip>
    </Stack>
  );
};
