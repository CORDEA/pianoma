import React from "react";
import { next } from "./store/NextAction";
import { RootState } from "./store";
import { connect, ConnectedProps } from "react-redux";
import { finish } from "./store/FinishAction";
import MaterialSwitch from "@material/react-switch";
import MaterialButton from "@material/react-button";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "./store/AppState";
import { AppActionTypes } from "./store/AppAction";
import "@material/react-button/dist/button.min.css";
import "@material/react-switch/dist/switch.min.css";
import "./Controller.css";
import { auto } from "./store/AutoAction";
import { enableGuide } from "./store/EnableGuideAction";

const mapState = (state: RootState) => {
  return {
    inProgress: state.app.inProgress,
    isAuto: state.app.isAuto,
    enableGuide: state.app.enableGuide,
  };
};
const mapDispatch = (
  dispatch: ThunkDispatch<AppState, null, AppActionTypes>
) => ({
  next: () => {
    dispatch(next());
  },
  finish: () => {
    dispatch(finish());
  },
  switchAuto: (isAuto: boolean) => {
    dispatch(auto(isAuto));
  },
  switchGuide: (isEnableGuide: boolean) => {
    dispatch(enableGuide(isEnableGuide));
  },
});
const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function Controller(props: Props) {
  return (
    <div className="Controller">
      <MaterialSwitch
        nativeControlId="guideSwitch"
        checked={props.enableGuide}
        onChange={(e) =>
          props.switchGuide((e.target as HTMLInputElement).checked)
        }
      />
      <label className="Controller-switchLabel" htmlFor="guideSwitch">
        Guide
      </label>
      <MaterialSwitch
        nativeControlId="autoSwitch"
        checked={props.isAuto}
        onChange={(e) =>
          props.switchAuto((e.target as HTMLInputElement).checked)
        }
      />
      <label className="Controller-switchLabel" htmlFor="autoSwitch">
        Auto
      </label>
      <MaterialButton
        raised
        className="Controller-button"
        onClick={props.inProgress ? props.finish : props.next}
      >
        {props.inProgress ? "ANSWER" : "NEXT"}
      </MaterialButton>
    </div>
  );
}

export default connector(Controller);
