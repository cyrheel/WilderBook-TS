import AddWilder from "./../components/AddWilder";
import { ContentContainer, Button, Header, Body } from "../CSS/styledComponent";
import { useNavigate } from "react-router-dom";

function CreateWilderPage(): JSX.Element {
  let navigate = useNavigate();

  return (
    <ContentContainer>
      <Header>
        <Button
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back
        </Button>
        <h1>Create New Wilder</h1>
      </Header>
      <Body>
        <AddWilder onUpdate={false} />
      </Body>
    </ContentContainer>
  );
}

export default CreateWilderPage;
