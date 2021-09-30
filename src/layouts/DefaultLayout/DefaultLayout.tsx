import {Box, Container} from "@material-ui/core";
import RouterView from "components/RouterView";
import React from "react";

interface IProps {}

const DefaultLayout: React.FC<IProps> = () => {
  return (
    <>

       <Container maxWidth={'xl'}>
           <Box pt={2}>
               <RouterView></RouterView>
           </Box>
       </Container>

    </>
  );
};

export default DefaultLayout;
