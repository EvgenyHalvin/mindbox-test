import { Container, Typography } from '@mui/material';

type Props = {
  children: React.ReactNode;
  title: string;
};

export const PageTemplate = ({ children, title }: Props) => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'background.default',
        height: '100vh',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        minWidth: '320px',
        width: '100%',
        margin: '0 auto',
        padding: '20px',
        gap: 2,
        boxSizing: 'border-box',
      }}
    >
      <Typography
        fontFamily="sans-serif"
        fontWeight={400}
        variant="h3"
        color="text.secondary"
        sx={{ width: '100%', margin: 0 }}
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
};
