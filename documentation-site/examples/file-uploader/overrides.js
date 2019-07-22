import * as React from 'react';
import {FileUploader} from 'baseui/file-uploader';
import {DropFilesEventHandlerT} from 'baseui/file-uploader';

export default class Uploader extends React.Component<
  {},
  {progressAmount: number},
> {
  state = {progressAmount: 0};
  intervalId: IntervalID;

  handleDrop: DropFilesEventHandlerT = (
    acceptedFiles,
    rejectedFiles,
  ) => {
    // handle file upload...
    this.startProgress();
  };

  // startProgress method is only illustrative. Use the progress info returned
  // from your upload endpoint. If unavailable, do not provide a progressAmount.
  startProgress = () => {
    this.intervalId = setInterval(() => {
      if (this.state.progressAmount >= 100) {
        this.reset();
      } else {
        this.setState({
          progressAmount: this.state.progressAmount + 10,
        });
      }
    }, 500);
  };

  // reset the component to its original state. use this to cancel the upload.
  reset = () => {
    clearInterval(this.intervalId);
    this.setState({progressAmount: 0});
  };

  render() {
    return (
      <FileUploader
        onCancel={this.reset}
        onDrop={this.handleDrop}
        progressAmount={this.state.progressAmount}
        progressMessage={
          this.state.progressAmount
            ? `Uploading... ${this.state.progressAmount}% of 100%`
            : ''
        }
        overrides={{
          FileDragAndDrop: {
            style: props => ({
              borderColor: props.$isDragActive
                ? props.$theme.colors.positive
                : props.$theme.colors.warning,
            }),
          },
          ContentMessage: {
            style: props => ({
              color: props.$theme.colors.warning,
            }),
          },
          ContentSeparator: {
            style: props => ({
              color: props.$theme.colors.warning,
            }),
          },
        }}
      />
    );
  }
}
