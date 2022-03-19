import Proptypes from "prop-types";
import { ISkill } from "../interfaces/IWilder";

function Skill({ title, votes }: ISkill): JSX.Element {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}

// ReactJS constraint
Skill.propTypes = {
  title: Proptypes.string.isRequired,
  votes: Proptypes.number.isRequired,
};

export default Skill;
