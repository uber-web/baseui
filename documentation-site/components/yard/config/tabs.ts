import {Tabs, Tab, ORIENTATION} from 'baseui/tabs';
import {PropTypes} from '../const';

export default {
  extraImports: {
    named: {
      'baseui/tabs': ['Tab'],
    },
  },
  scopeConfig: {
    Tabs,
    Tab,
    ORIENTATION,
  },
  themeConfig: ['tabBarFill', 'tabColor'],
  propsConfig: {
    children: {
      value: `<Tab title="Tab Link 1">
  Content 1
</Tab>
<Tab title="Tab Link 2">
  Content 2
</Tab>
<Tab title="Tab Link 3">
  Content 3
</Tab>`,
      type: PropTypes.ReactNode,
      description: `An array of Tab components.`,
    },
    onChange: {
      value: '({ activeKey }) => {\n  setActiveKey(activeKey);\n}',
      type: PropTypes.Function,
      description: `Change handler that is called every time a new tab is selected.`,
      meta: {
        propHook: {
          what: 'activeKey',
          into: 'activeKey',
        },
      },
    },
    orientation: {
      value: false,
      type: PropTypes.Enum,
      options: ORIENTATION,
      description: 'The orientation of the tab component.',
    },
    activeKey: {
      value: '0',
      type: PropTypes.String,
      description: 'Key of the the tab to be selected.',
      meta: {
        stateful: true,
      },
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'True when all tabs are disabled.',
    },
    renderAll: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'Renders all tab content for SEO purposes regardless of tab active state.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      meta: {
        names: ['Root', 'Tab', 'TabBar', 'TabContent'],
        sharedProps: {
          $disabled: 'disabled',
          $active: {
            type: PropTypes.Boolean,
            description: 'True when the tab is active.',
          },
          $orientation: 'orientation',
        },
      },
    },
  },
};
