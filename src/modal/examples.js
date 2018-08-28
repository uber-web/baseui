/*
MIT License

Copyright (c) 2018 Uber Technologies, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
// @flow
/* global document */
import * as React from 'react';
import {select as selectKnob} from '@storybook/addon-knobs';
import {Button} from '../popover/examples';
import {Input} from '../input';

import {styled} from '../styles';
import {
  SIZE,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from './index';

const Centered = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '90vh',
});

type ModalStateContainerPropsT = {
  isInitiallyOpen: boolean,
  children: ({
    toggle: (open?: boolean) => void,
    open: () => void,
    close: () => void,
    isOpen: boolean,
  }) => React.Node,
};

type ModalStateContainerStateT = {
  isOpen: boolean,
};

class ModalStateContainer extends React.Component<
  ModalStateContainerPropsT,
  ModalStateContainerStateT,
> {
  static defaultProps = {
    isInitiallyOpen: false,
  };
  state = {
    isOpen: this.props.isInitiallyOpen,
  };
  toggle = (open?: boolean = !this.state.isOpen) => {
    this.setState({
      isOpen: Boolean(open),
    });
  };
  open = () => {
    this.toggle(true);
  };
  close = () => {
    this.toggle(false);
  };
  render() {
    return this.props.children({
      toggle: this.toggle,
      open: this.open,
      close: this.close,
      setState: this.setState.bind(this),
      ...this.state,
    });
  }
}

const sizeKnob = () =>
  selectKnob(
    'size',
    [SIZE.default, SIZE.full, SIZE.auto, '800px', '50vw'],
    'default',
  );

export const suite = 'Modal Test Suite';
export const examples = {
  SIMPLE_EXAMPLE: 'Modal',
  SCROLLING_EXAMPLE: 'Modal with long content',
  CLOSEABLE_EXAMPLE: 'Modal non-closeable',
  MOUNT_NODE_EXAMPLE: 'Modal custom mount node',
  STYLE_OVERRIDES: 'Modal with style overrides',
};

export default {
  [examples.SIMPLE_EXAMPLE]: function Story1() {
    return (
      <Centered>
        <ModalStateContainer isInitiallyOpen>
          {({open, close, isOpen}) => (
            <React.Fragment>
              <Button onClick={open} className="open-modal-button">
                Open Modal
              </Button>
              <Modal onClose={close} isOpen={isOpen} size={sizeKnob()}>
                <ModalHeader>Hello world</ModalHeader>
                <ModalBody>
                  Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                  ornare faucibus ex, non facilisis nisl. Maecenas aliquet
                  mauris ut tempus.
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={close}>Cancel</ModalButton>
                  <ModalButton onClick={close}>Okay</ModalButton>
                </ModalFooter>
              </Modal>
            </React.Fragment>
          )}
        </ModalStateContainer>
      </Centered>
    );
  },
  [examples.SCROLLING_EXAMPLE]: function Story2() {
    return (
      <Centered>
        <ModalStateContainer isInitiallyOpen>
          {({open, close, isOpen}) => (
            <React.Fragment>
              <Button onClick={open}>Open Modal</Button>
              <Modal onClose={close} isOpen={isOpen}>
                <ModalHeader>Hello world</ModalHeader>
                <ModalBody>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
                    <p key={i}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec porta orci at elit commodo, ac interdum velit
                      accumsan. Duis congue suscipit erat non blandit. In
                      dapibus mi elit, quis mattis sapien lobortis ac. Duis
                      sollicitudin congue dolor, ac tincidunt massa tincidunt
                      eget. Fusce pretium, risus et consectetur venenatis, urna
                      metus scelerisque est, ac malesuada est metus volutpat
                      justo. Praesent ultrices, lectus ac tincidunt eleifend,
                      augue mi maximus ante, non eleifend justo sem quis justo.
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada fames ac turpis egestas. Morbi ante magna,
                      blandit ut enim non, sollicitudin faucibus est. Aliquam a
                      tellus fermentum urna finibus facilisis vitae in est.
                    </p>
                  ))}
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={close}>Cancel</ModalButton>
                  <ModalButton onClick={close}>Okay</ModalButton>
                </ModalFooter>
              </Modal>
            </React.Fragment>
          )}
        </ModalStateContainer>
      </Centered>
    );
  },
  [examples.CLOSEABLE_EXAMPLE]: function Story3() {
    return (
      <Centered>
        <ModalStateContainer isInitiallyOpen>
          {// $FlowFixMe
          ({open, close, isOpen, setState, value}) => (
            <React.Fragment>
              <Button onClick={open}>Open Modal</Button>
              <Modal onClose={close} isOpen={isOpen} closeable={false}>
                <ModalHeader>Please Authenticate</ModalHeader>
                <ModalBody>
                  <div>
                    This modal cannot be closed by the user. Enter{' '}
                    <strong>abc123</strong> to continue:
                  </div>
                  <div style={{marginTop: '12px'}}>
                    <Input
                      value={value}
                      onChange={
                        // $FlowFixMe
                        evt => setState({value: evt.target.value})
                      }
                      placeholder="Enter password"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <ModalButton onClick={close} disabled={value !== 'abc123'}>
                    Authenticate
                  </ModalButton>
                </ModalFooter>
              </Modal>
            </React.Fragment>
          )}
        </ModalStateContainer>
      </Centered>
    );
  },
  [examples.MOUNT_NODE_EXAMPLE]: function Story3() {
    class CustomMountNodeExample extends React.Component<
      {},
      {mounted: boolean},
    > {
      mountNode: HTMLElement;
      state = {mounted: false};
      componentDidMount() {
        this.mountNode = document.createElement('div');
        this.mountNode.classList.add('custom-mount-node');
        if (document.body) {
          document.body.append(this.mountNode);
        }
        this.setState({mounted: true});
      }
      componentWillUnmount() {
        setTimeout(() => {
          if (this.mountNode.parentNode) {
            this.mountNode.parentNode.removeChild(this.mountNode);
          }
        }, 10);
      }
      render() {
        if (!this.state.mounted) {
          return false;
        }
        return (
          <Centered>
            <ModalStateContainer isInitiallyOpen>
              {({open, close, isOpen}) => (
                <React.Fragment>
                  <Button onClick={open}>Open Modal</Button>
                  <Modal
                    onClose={close}
                    isOpen={isOpen}
                    mountNode={this.mountNode}
                  >
                    <ModalHeader>Hello world</ModalHeader>
                    <ModalBody>
                      <p>
                        If you inspect the DOM, you will see that this modal was
                        mounted into a custom node on the page, instead of as a
                        child of document.body.
                      </p>
                      <p>
                        This can be useful for applications which have a
                        complicated DOM structure and need more control over
                        mount points.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <ModalButton onClick={close}>Okay</ModalButton>
                    </ModalFooter>
                  </Modal>
                </React.Fragment>
              )}
            </ModalStateContainer>
          </Centered>
        );
      }
    }
    return <CustomMountNodeExample />;
  },
  [examples.STYLE_OVERRIDES]: function Story1() {
    return (
      <Centered>
        <ModalStateContainer isInitiallyOpen>
          {({open, close, isOpen}) => (
            <React.Fragment>
              <Button onClick={open}>Open Modal</Button>
              <Modal
                overrides={{
                  Backdrop: {
                    style: {
                      backgroundColor: 'rgba(43, 116, 226, 0.2)',
                    },
                  },
                  Dialog: {
                    style: {
                      backgroundColor: 'rgb(43, 116, 226)',
                      borderRadius: '0px',
                    },
                  },
                  Close: {
                    style: {
                      color: 'white',
                      ':hover': {
                        color: 'white',
                        opacity: 0.2,
                      },
                    },
                  },
                }}
                onClose={close}
                isOpen={isOpen}
              >
                <ModalHeader $style={{color: 'white', fontSize: '48px'}}>
                  Hello world
                </ModalHeader>
                <ModalBody $style={{color: 'white', fontStyle: 'italic'}}>
                  Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                  ornare faucibus ex, non facilisis nisl. Maecenas aliquet
                  mauris ut tempus.
                </ModalBody>
              </Modal>
            </React.Fragment>
          )}
        </ModalStateContainer>
      </Centered>
    );
  },
};
