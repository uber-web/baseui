/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {Notification, KIND} from 'baseui/notification';
import {useStyletron} from 'baseui';

export default function UnstableWarning() {
  const [useCss, theme] = useStyletron();

  return (
    <Notification
      overrides={{Body: {style: {width: 'auto'}}}}
      kind={KIND.warning}
    >
      <>
        This component is currently 'Unstable', which means that the
        functionality and API is subject to change in any version release. We
        publish unstable components so that feedback can be presented before
        aligning on a consistent design. Please see baseui's{' '}
        <a href="/getting-started/versioning-policy">versioning policy</a> for
        more information.
      </>
    </Notification>
  );
}
