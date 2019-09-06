import {Input, ADJOINED, SIZE} from 'baseui/input';
import {PropTypes} from '../const';

export default {
  scopeConfig: {
    Input,
    SIZE,
    ADJOINED,
  },
  themeConfig: [
    'inputFill',
    'inputFillError',
    'inputFillDisabled',
    'inputFillActive',
    'inputFillPositive',
    'inputTextDisabled',
    'inputBorderError',
    'inputBorderPositive',
    'inputEnhancerFill',
    'inputEnhancerFillDisabled',
    'inputEnhancerTextDisabled',
  ],
  propsConfig: {
    value: {
      value: 'Hello',
      type: PropTypes.String,
      description: 'Input value attribute.',
    },
    onChange: {
      value: undefined,
      placeholder: 'e => console.log(e.target.value)',
      type: PropTypes.Function,
      description: 'Called when input value is changed.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in disabled state.',
    },
    error: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in error state.',
    },
    positive: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in positive state.',
    },
    size: {
      value: undefined,
      options: SIZE,
      type: PropTypes.Enum,
      description: 'Renders component in provided size.',
    },
    placeholder: {
      value: undefined,
      type: PropTypes.String,
      description: "Input's placeholder.",
    },
    type: {
      value: undefined,
      type: PropTypes.String,
      placeholder: 'password',
      description: 'Input type attribute.',
    },
    clearable: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'If true, adds a clear value icon button to the end of the input container.',
    },
    startEnhancer: {
      value: undefined,
      placeholder: '() => <span>$</span>',
      type: PropTypes.Function,
      description:
        'An input helper rendered before and attached to the input field.',
    },
    endEnhancer: {
      value: undefined,
      type: PropTypes.Function,
      description:
        'An input helper rendered after and attached to the input field.',
    },
    inputMode: {
      value: undefined,
      type: PropTypes.String,
      description:
        'A hint as to the type of data that might be entered by the user while editing the element or its contents.',
      hidden: true,
    },
    'aria-label': {
      value: undefined,
      type: PropTypes.String,
      description: `Sets aria-label attribute.`,
      hidden: true,
    },
    'aria-labelledby': {
      value: undefined,
      type: PropTypes.String,
      description: `Sets aria-labelledby attribute.`,
      hidden: true,
    },
    'aria-describedby': {
      value: undefined,
      type: PropTypes.String,
      description: `Sets aria-describedby attribute.`,
      hidden: true,
    },
    adjoined: {
      value: undefined,
      options: ADJOINED,
      type: PropTypes.Enum,
      description: `Defines styles for inputs that are grouped with other controls.`,
      hidden: true,
    },
    autoComplete: {
      value: undefined,
      type: PropTypes.String,
      description: 'Determines if browser should provide value suggestions.',
      hidden: true,
    },
    autoFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: 'If true the input will be focused on the first mount.',
      hidden: true,
    },
    pattern: {
      value: undefined,
      type: PropTypes.String,
      description:
        'A regex that is used to validate the value of the input on form submission.',
      hidden: true,
    },
    id: {
      value: undefined,
      type: PropTypes.String,
      description:
        "Id attribute value to be added to the input element and as a label's for attribute value.",
      hidden: true,
    },
    inputRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: 'A ref to access an input element.',
      hidden: true,
    },
    name: {
      value: undefined,
      type: PropTypes.String,
      description: 'Name attribute.',
      hidden: true,
    },
    onBlur: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when input loses focus.',
      hidden: true,
    },

    onKeyDown: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when a key is pressed down.',
      hidden: true,
    },
    onKeyPress: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when a key is pressed.',
      hidden: true,
    },
    onKeyUp: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when a key is released.',
      hidden: true,
    },
    onFocus: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when input is focused.',
      hidden: true,
    },

    required: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in required state.',
      hidden: true,
    },

    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      meta: {
        names: [
          'Root',
          'Input',
          'InputContainer',
          'After',
          'Before',
          'ClearIcon',
          'ClearIconContainer',
          'EndEnhancer',
          'MaskToggleButton',
          'MaskToggleHideIcon',
          'MaskToggleShowIcon',
          'StartEnhancer',
        ],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: 'True when the component is focused.',
          },
          $disabled: 'disabled',
          $error: 'error',
          $positive: 'positive',
          $adjoined: 'adjoined',
          $size: 'size',
          $required: 'required',
          $position: {
            type: PropTypes.Enum,
            description:
              'ADJOINED state. How is the input grouped with other controls.',
          },
        },
      },
    },
  },
};
