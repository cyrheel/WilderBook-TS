import Wilder from "./../components/Wilder";
import { useEffect, useState } from "react";
import IWilder from "./../interfaces/IWilder";
import {
  MainContainer,
  CardContainer,
  ContentContainer,
  Button,
  Header,
  Footer,
} from "./../CSS/styledComponent";
import { useNavigate } from "react-router-dom";

function HomePage(): JSX.Element {
  let navigate = useNavigate();
  const [wilders, setWilders] = useState<IWilder[]>([]);

  function getWilder(): void {
    fetch("http://127.0.0.1:4000/wilders")
      .then((response) => {
        if (response.status === 404) {
          setWilders([]);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setWilders(data.result);
      });
  }

  useEffect((): void => {
    getWilder();
  }, []);

  function displayWilders(
    isEmpty: boolean,
    wilders: IWilder[]
  ): JSX.Element | JSX.Element[] {
    if (isEmpty) {
      return <p>There is no Wilders :/</p>;
    } else {
      return wilders.map((wilder) => (
        <Wilder key={wilder._id} {...wilder} onRefresh={getWilder} />
      ));
    }
  }

  return (
    <MainContainer>
      <Header>
        <h1>Wilders Book</h1>
      </Header>
      <ContentContainer>
        <Button
          onClick={() => {
            navigate("/create", { replace: true });
          }}
        >
          Add a new wilder
        </Button>
        <h2>Wilders</h2>
        <CardContainer>
          {wilders.length === 0
            ? displayWilders(true, wilders)
            : displayWilders(false, wilders)}
        </CardContainer>
      </ContentContainer>
      <Footer>
        <p>&copy; 2022 Cyrheel X Wild Code School</p>
      </Footer>
    </MainContainer>
  );
}

export default HomePage;
