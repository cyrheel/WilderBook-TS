import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "../CSS/styledComponent";
import IWilder, { ISkill } from "../interfaces/IWilder";
import AddSkills from "./AddSkills";

//TS constraint
interface IProps {
  _id?: string;
  onUpdate: boolean;
  onRefresh?: () => void;
  handleShowPopUpChanges?: () => void;
  wInfo?: IWilder;
}

function AddWilder(props: IProps): JSX.Element {
  let navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [skills, setSkills] = useState<ISkill[]>([
    { id: 0, title: "", votes: 0 },
  ]);

  const handleNameChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleCityChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const handleSkillChanges = (skill: ISkill): void => {
    const tempoSkills = skills;
    if (skill.id !== undefined) {
      tempoSkills[skill.id] = skill;
    }
    setSkills(tempoSkills);
  };

  const displayCreateBtn = (): JSX.Element => {
    return (
      <Button
        type="submit"
        onClick={() => {
          btnAddWilderClicked();
        }}
      >
        Create Wilder
      </Button>
    );
  };

  const displayUpdateBtn = (): JSX.Element => {
    return (
      <Button
        type="submit"
        onClick={() => {
          btnUpdateWilderClicked(props._id);
        }}
      >
        Update Wilder
      </Button>
    );
  };

  const btnAddSkillClicked = (): void => {
    let nextId = skills.length;
    skills.push({ id: nextId, title: "", votes: 0 });
    setSkills([...skills]);
  };

  const btnAddWilderClicked = async (): Promise<void> => {
    let wilderToCreate: IWilder = {
      name: name,
      city: city,
      skills: skills,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wilderToCreate),
    };

    let response = await fetch("http://127.0.0.1:4000/wilders", requestOptions);
    if (response.ok) {
      navigate("/", { replace: true });
    }
  };

  const btnUpdateWilderClicked = async (_id: IWilder["_id"]): Promise<void> => {
    let wilderToUpdate: IWilder = {
      name: name,
      city: city,
      skills: skills,
    };
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wilderToUpdate),
    };

    let response = await fetch(
      `http://127.0.0.1:4000/wilders/${_id}`,
      requestOptions
    );
    if (response.ok) {
      if (props.onRefresh && props.handleShowPopUpChanges) {
        props.onRefresh();
        props.handleShowPopUpChanges();
      }
    }
  };

  return (
    <Form>
      <label htmlFor="name">Name :</label>
      <input
        type="text"
        id="name"
        onChange={(e) => {
          handleNameChanges(e);
        }}
        value={name}
        placeholder={props.wInfo ? props.wInfo.name : ""}
      ></input>
      <label htmlFor="city">City :</label>
      <input
        type="text"
        id="city"
        onChange={(e) => {
          handleCityChanges(e);
        }}
        value={city}
        placeholder={props.wInfo ? props.wInfo.city : ""}
      ></input>
      <Button
        type="button"
        onClick={() => {
          btnAddSkillClicked();
        }}
      >
        Add Skill
      </Button>
      {skills.map((skill): JSX.Element => {
        return (
          <AddSkills
            key={skill.id}
            id={skill.id}
            onAdd={handleSkillChanges}
            wInfo={props.onUpdate ? skill : undefined}
          />
        );
      })}
      {props.onUpdate ? displayUpdateBtn() : displayCreateBtn()}
    </Form>
  );
}

export default AddWilder;
