import React from "react";
import "./Confirm.css";

interface IProps {
  open: boolean;
  title: string;
  content: string;
  cancelCaption?: string;
  okCaption?: string;
  onOkClick: () => void;
  onCancelClick: () => void;
}

const Confirm: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="confirm-wrapper confirm-visible">
      <div className="confirm-container">
        <div className="confirm-title-container">
          <span>This is where our title should go</span>
        </div>
        <div className="confirm-content-container">
          <p>This is where our content should go</p>
        </div>
        <div className="confirm-buttons-container">
          <button className="confirm-cancel">Cancel</button>
          <button className="confirm-ok">Okay</button>
        </div>
      </div>
    </div>
  );
};

const ConfirmMemo = React.memo(Confirm);

export default ConfirmMemo;
