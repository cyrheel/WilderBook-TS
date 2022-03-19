// Imports
import blank_profile from "./../YmVdl3m.png";
import Proptypes from "prop-types";
import Skill from "./Skill";
import AddWilder from "./AddWilder";
import { useState } from "react";
import IWilder from "../interfaces/IWilder";
import {
  Button,
  Card,
  CardHeader,
  DeleteBtn,
  Img,
  PopUp,
  PopUpBG,
} from "../CSS/styledComponent";

// TS constraint
interface IProps extends IWilder {
  onRefresh: () => void;
}

function Wilder({ _id, name, city, skills, onRefresh }: IProps): JSX.Element {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  const handleShowPopUpChanges = (): void => {
    setShowPopUp(!showPopUp);
  };

  const tooglePopUP = (): JSX.Element => {
    return (
      <PopUpBG>
        <PopUp>
          <div id="popup-header">
            <Button onClick={handleShowPopUpChanges} id="close">
              X
            </Button>
            <h4>{`${name}'s Options`}</h4>
          </div>
          <AddWilder
            _id={_id}
            onUpdate={true}
            onRefresh={onRefresh}
            handleShowPopUpChanges={handleShowPopUpChanges}
            wInfo={{ name: name, city: city, skills: skills }}
          />
        </PopUp>
      </PopUpBG>
    );
  };

  const deleteBtnClicked = async (_id: IWilder["_id"]): Promise<void> => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Accepte: "application/json",
        "Content-Type": "application/json",
        //"X-CSRFToken": csrftoken,
      },
    };
    await fetch(`http://127.0.0.1:4000/wilders/${_id}`, requestOptions);
    onRefresh();
  };

  return (
    <Card>
      <CardHeader>
        <DeleteBtn
          onClick={() => {
            deleteBtnClicked(_id);
          }}
        >
          Delete
        </DeleteBtn>
        <Button
          onClick={() => {
            setShowPopUp(!showPopUp);
          }}
        >
          Options
        </Button>
      </CardHeader>
      <Img src={blank_profile} alt={`${name} PP`} />
      <h3>
        {name} from {city}
      </h3>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <Skill key={skill._id} {...skill} />
        ))}
      </ul>
      {showPopUp && tooglePopUP()}
    </Card>
  );
}

// ReactJs Constraint
Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  skills: Proptypes.array.isRequired,
};

export default Wilder;
