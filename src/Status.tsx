import { RootState } from "./store";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import "./Status.css";

const mapState = (state: RootState) => {
  return {
    numberOfAnswers: state.app.numberOfAnswers,
    numberOfCorrectAnswers: state.app.numberOfCorrectAnswers,
  };
};

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Status(props: Props) {
  let rate = 0;
  if (props.numberOfAnswers) {
    rate = (props.numberOfCorrectAnswers / props.numberOfAnswers) * 100;
  }
  return (
    <div className="Status">
      <label>
        {`${rate}% (${props.numberOfCorrectAnswers} / ${props.numberOfAnswers})`}
      </label>
    </div>
  );
}

export default connector(Status);
