import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

/**
 * 
 * @returns 
 */
export function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://stepgt.com/">
        stepGT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
