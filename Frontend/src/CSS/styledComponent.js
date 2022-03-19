import styled from "styled-components";

// Multi-use
export const MainContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  > h2 {
    margin: 3% 4%;
  }
`;

export const Header = styled.div`
  display: flex;
  background: #f76c6c;

  > h1 {
    margin: 3%;
  }
`;

export const Button = styled.button`
  height: 4vh;
  width: 25%;
  margin: 2%;
  border: 1px solid black;
  border-radius: 5px;
  background: #a6adad;

  :hover {
    cursor: pointer;
  }
`;

// Home Page
export const CardContainer = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Footer = styled.div`
  border-top: 2px solid black;
`;

// Create wilder page
export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Wilder
export const Card = styled.article`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1%;
  margin: 1%;
  border: 2px solid black;
  border-radius: 20px;
  box-shadow: 0 15px 10px 0 rgba(0, 0, 0, 0.3);

  > h3,
  h4 {
    margin: 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4vh;
  width: 15%;
  color: black;
  background: #f76c6c;
  text-decoration: none;
  border-radius: 10px;

  :hover {
    cursor: pointer;
    font-weight: bold;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Img = styled.img`
  max-width: 300px;
  max-height: 350px;
`;

export const PopUpBG = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const PopUp = styled.div`
  display: flex;
  flex-flow: column;
  width: 75%;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  background: black;
  color: white;

  #popup-header {
    display: flex;
    width: 100%;
    padding: 2%;
    justify-content: space-between;
  }

  #close {
    margin: 0 2.5%;
    background: #f76c6c;
  }

  > div > h4 {
    color: #f76c6c;
    margin: 0 10%;
  }
`;

// Add Wilder
export const Form = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  input {
    border-radius: 10px;
    text-align: center;
    margin: 1%;
  }
`;

// Add Skill
export const SkillContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SkillTitle = styled.div`
  display: flex;
  flex-flow: column;
`;

export const SkillVotes = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Input = styled.input`
  border-radius: 10px;
  text-align: center;
  margin: 1%;
`;
