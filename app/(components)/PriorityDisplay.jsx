import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const PriorityDisplay = ({ priority }) => {
  const priorities = [];
  for (let index = 0; index < priority; index++) {
    priorities[index] = (
      <FontAwesomeIcon key={index} icon={faFire} className="text-red-400" />
    );
  }
  return <div className="flex justify-start align-baseline">{priorities}</div>;
};
export default PriorityDisplay;
