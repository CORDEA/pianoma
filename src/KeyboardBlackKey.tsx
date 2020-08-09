import React from "react";
import "./KeyboardBlackKey.css";
import { RootState } from "./store";
import { connect, ConnectedProps } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "./store/AppState";
import { AppActionTypes } from "./store/AppAction";
import { answer } from "./store/ClickKeyAction";

const mapState = (state: RootState) => {
  return {
    answer: state.app.answer,
    result: state.app.result,
  };
};
const mapDispatch = (
  dispatch: ThunkDispatch<AppState, null, AppActionTypes>
) => ({
  click: (note: string) => {
    dispatch(answer(note));
  },
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  note: string;
};

function KeyboardBlackKey(props: Props) {
  let color = "#000000";
  const answer = props.answer.includes(props.note);
  const correct = props.result.includes(props.note);
  if (answer) {
    color = "#006064";
  }
  if (correct) {
    color = "#880e4f";
  }
  if (answer && correct) {
    color = "#5e35b1";
  }
  return (
    <div
      className="KeyboardBlackKey"
      onClick={() => props.click(props.note)}
      style={{ backgroundColor: color }}
      id={props.note}
      key={props.note}
    />
  );
}

export default connector(KeyboardBlackKey);
