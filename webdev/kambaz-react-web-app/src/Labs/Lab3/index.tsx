import BooleanVariables from "./BooleanVariables.tsx";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.tsx";
import ConditionalOutputInline from "./ConditionalOutputInline.tsx";
import IfElse from "./IfElse.tsx";
import TernaryOperator from "./TernaryOperator.tsx";
import VariablesAndConstants from "./VariablesAndConstants.tsx";
import VariableTypes from "./VariableTypes.tsx";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h3>Lab 3</h3>

      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
    </div>
  );
}
