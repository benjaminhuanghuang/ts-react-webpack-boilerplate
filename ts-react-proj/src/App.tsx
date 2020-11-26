import React, { Component } from "react";
import "./App.css";
import Confirm from "./Confirm";

interface IState {
  confirmOpen: boolean;
  confirmMessage: string;
  confirmVisible: boolean;
  countDown: number;
}
class App extends Component<{}, IState> {
  private handleCancelConfirmClick = () => {
   
  };

  private handleOkConfirmClick = () => {
   
  };

  public render() {
    return (
      <div className="App">
        <header className="App-header">...</header>
        <Confirm   open={true}
            title="React and TypeScript"
            content="Are you sure you want to learn React and TypeScript?"
            cancelCaption="No way"
            okCaption="Yes please!"
            onCancelClick={this.handleCancelConfirmClick}
            onOkClick={this.handleOkConfirmClick}/>
      </div>
    );
  }
}

export default App;
