/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import {StyledTreeItemList, StyledTreeItem} from './styled-components.js';
import type {TreeNodePropsT} from './types.js';

import StyledTreeLabel from './tree-label.js';

import {getOverride, getOverrideProps} from '../helpers/overrides.js';

export default class TreeNode extends React.Component<TreeNodePropsT> {
  treeItemRef = React.createRef<HTMLLIElement>();

  componentDidMount() {
    this.props.addRef(this.props.getId(this.props.node), this.treeItemRef);
  }

  onToggle = () => {
    const {onToggle, node} = this.props;
    if (onToggle) {
      onToggle(node);
    }
  };

  render() {
    const {
      indentGuide,
      node,
      getId,
      onToggle,
      overrides = {},
      renderAll,
      selectedNodeId,
      onKeyDown,
      onFocus,
      onBlur,
      addRef,
      isFocusVisible,
    } = this.props;
    const {children, isExpanded, label} = node;
    const hasChildren = children && children.length !== 0;
    const {
      TreeItemList: TreeItemListOverride,
      TreeItem: TreeItemOverride,
      TreeLabel: TreeLabelOverride,
    } = overrides;
    const TreeItemList =
      getOverride(TreeItemListOverride) || StyledTreeItemList;
    const TreeItem = getOverride(TreeItemOverride) || StyledTreeItem;
    const TreeLabel = getOverride(TreeLabelOverride) || StyledTreeLabel;
    return (
      <TreeItem
        role="treeitem"
        ref={this.treeItemRef}
        data-nodeid={getId(node)}
        tabIndex={selectedNodeId === getId(node) ? 0 : -1}
        onKeyDown={(e: KeyboardEvent) => onKeyDown && onKeyDown(e, node)}
        onBlur={onBlur}
        onFocus={onFocus}
        aria-expanded={isExpanded ? true : false}
        $isLeafNode={!hasChildren}
        {...getOverrideProps(TreeItemOverride)}
      >
        <TreeLabel
          onClick={this.onToggle}
          node={node}
          hasChildren={hasChildren}
          isExpanded={isExpanded}
          isSelected={selectedNodeId === getId(node)}
          isFocusVisible={isFocusVisible}
          label={label}
          overrides={overrides}
          {...getOverrideProps(TreeLabelOverride)}
        />
        {children && (isExpanded || renderAll) && (
          <TreeItemList
            role="group"
            $indentGuide={!!indentGuide}
            $isChildNode={true}
            $expanded={!!isExpanded}
            {...getOverrideProps(TreeItemListOverride)}
          >
            {children.map((node, index) => (
              <TreeNode
                indentGuide={!!indentGuide}
                renderAll={renderAll}
                key={index}
                node={node}
                getId={getId}
                onToggle={onToggle}
                overrides={overrides}
                selectedNodeId={selectedNodeId}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                addRef={addRef}
                isFocusVisible={isFocusVisible}
              />
            ))}
          </TreeItemList>
        )}
      </TreeItem>
    );
  }
}
