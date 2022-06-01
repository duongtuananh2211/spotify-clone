import { Box, Button, Container } from "@material-ui/core";
import { useList } from "hooks/lists";
import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "components/PageTitle";
import Words from "widgets/Words";
import AddNewWord from "widgets/AddNewWord";
import { useUser } from "reactfire";

interface IProps {}
interface IParams {
  id: string;
}

const ListDetail: React.FC<IProps> = () => {
  const { id } = useParams<IParams>();
  const { data: user } = useUser(undefined, { suspense: true });
  const list = useList(id);

  if (!list) return <div>404 Notfound</div>;

  return (
    <>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <PageTitle title={list.name} />
        <AddNewWord listId={id} ownerId={user.uid} />
      </Box>
      <Container>
        <Box height={"85vh"} mt={3}>
          <Words listId={id} />
        </Box>

        <Box display={"flex"} alignItems="center" justifyContent={"center"}>
          <Button variant="contained" color="primary">
            <b>Review</b>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ListDetail;
