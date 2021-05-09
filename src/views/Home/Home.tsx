import RoundButton from "components/RoundButton";
import DefaultLayout from "layouts/DefaultLayout";
import React from "react";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <>
      <DefaultLayout>
        <RoundButton color="primary" variant="contained">
          Test
        </RoundButton>
      </DefaultLayout>
    </>
  );
};

export default Home;
