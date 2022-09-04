import { useForm } from 'react-hook-form';
import { makeStyles } from 'tss-react/mui';

import LockIcon from '@mui/icons-material/Lock';
import { Box, Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import FormInputText from '../LogRocketForm/form-components/FormInputText';

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(2),
    padding: '16px',
    '& .MuiTextField-root': {
      //   margin: theme.spacing(1),
      margin: '8px',
      // width: '300px',
    },
    '& .MuiButtonBase-root': {
      //   margin: theme.spacing(2),
      margin: '16px',
    },
  },
});

const SignIn = () => {
  const { classes } = useStyles();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar>
          <LockIcon />
        </Avatar>
      </Box>
      <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          name="email"
          control={control}
          label="Email Address"
          fullWidth
        />
        <FormInputText
          name="password"
          control={control}
          label="Password"
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          data-testid="button"
          fullWidth
        >
          Sign in
        </Button>
      </form>
    </>
  );
};

export default SignIn;