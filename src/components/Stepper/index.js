import React from "react";
import { Steps } from "rsuite";

const notUgly = {
  paddingRight: "10vw",
  paddingLeft: "10vw",
};

function Stepper() {
  return (
    <Steps current={0} style={notUgly}>
      <Steps.Item title="Finished" description="Graduate" />
      <Steps.Item title="In Progress" description="Get Job" />
      <Steps.Item title="Waiting" description="Move" />
      <Steps.Item title="Waiting" description="Travel" />
    </Steps>
  );
}
export default Stepper;
