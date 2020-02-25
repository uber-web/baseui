// @flow
import * as React from 'react';
import {
  Unstable_StatefulTreeView as StatefulTreeView,
  type TreeNodeT,
} from 'baseui/tree-view';
import ChevronRight from 'baseui/icon/chevron-right';
import ChevronDown from 'baseui/icon/chevron-down';

const initialData = [
  {
    id: 1,
    label: 'Node 1',
    isExpanded: true,
    children: [
      {
        id: 2,
        label: 'Child 1',
        isExpanded: true,
        children: [
          {
            id: 3,
            label: 'Grandchild 1',
            children: [
              {
                id: 4,
                label:
                  'Should be rendered SSR / even when closed (check source!)',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    label: 'Node 2',
    isExpanded: true,
    children: [
      {
        id: 6,
        label: 'Child 2',
        isExpanded: true,
        children: [
          {
            id: 7,
            label: 'Grandchild 2',
            children: [
              {
                id: 8,
                label:
                  'Should be rendered SSR / even when closed (check source!)',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default function TreeViewOverrides() {
  return (
    <StatefulTreeView
      data={initialData}
      renderAll={true}
      overrides={{
        IconContainer: {
          style: {
            borderStyle: 'none',
          },
        },
        CollapseIcon: {
          component: ChevronDown,
        },
        ExpandIcon: {
          component: ChevronRight,
        },
      }}
    />
  );
}
