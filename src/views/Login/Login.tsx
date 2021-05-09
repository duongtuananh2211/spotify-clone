import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useCallback } from "react";
import SignInWithGoogleButton from "widgets/SignInWithGoogleButton";
import style from "./style";

const useStyles = makeStyles(style);

interface IProps {}

const Login: React.FC<IProps> = () => {
  const classes = useStyles();

  const handleSignInSuccess = useCallback(() => {
    window.location.href = "/";
  }, []);

  return (
    <>
      <Box className="login" minHeight="100vh" bgcolor="#fff">
        <Container maxWidth="xs">
          <Box pt={10}>
            <Box height={100} display="flex" justifyContent="center">
              <Box className={classes.logo}></Box>
            </Box>

            <Box pt={5}>
              <Typography color="primary" variant="h6" align="center">
                To continue, log in to Spotify.
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <SignInWithGoogleButton onSuccess={handleSignInSuccess} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Login;
