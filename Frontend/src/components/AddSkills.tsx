import { useEffect, useState } from "react";
import { ISkill } from "../interfaces/IWilder";
import {
  Input,
  SkillContainer,
  SkillTitle,
  SkillVotes,
} from "../CSS/styledComponent";

// TS Constraint
interface IProps {
  id?: number;
  onAdd: (skill: ISkill) => void;
  wInfo?: ISkill;
}

function AddSkills({ id, onAdd, wInfo }: IProps): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [votes, setVotes] = useState<number>(0);

  const handleTitleChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleVotesChanges = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setVotes(parseInt(e.target.value));
  };

  // CallBack on every change
  useEffect((): void => {
    onAdd({ id: id, title: title, votes: votes });
  }, [title, votes, id, onAdd]);

  return (
    <SkillContainer>
      <SkillTitle>
        <label htmlFor="skill-title">Skill Title</label>
        <Input
          type="text"
          id="skill-title"
          onChange={(e) => {
            handleTitleChanges(e);
          }}
          value={title}
          placeholder={wInfo ? wInfo.title : ""}
        ></Input>
      </SkillTitle>
      <SkillVotes>
        <label htmlFor="skill-votes">Skill Votes</label>
        <Input
          type="number"
          id="skill-votes"
          onChange={(e) => {
            handleVotesChanges(e);
          }}
          value={votes}
        ></Input>
      </SkillVotes>
    </SkillContainer>
  );
}

export default AddSkills;
