import Coding from "./Coding";
import Welcome from "./Welcome";

function ConditionalComponent() {
  const display = true;
  return display ? <Welcome /> : <Coding />;
}

export default ConditionalComponent;
