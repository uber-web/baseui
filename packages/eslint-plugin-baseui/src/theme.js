/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

'use strict';

const MESSAGES = require('./messages.js');

const deprecatedThemeProperties = {
  // These are deprecated semantic colors.
  // They may still be used in component code in a few instances,
  // but they will be replaced in an upcoming major version.
  // Developers can instead use the new semantic tokens:
  // https://baseweb.design/guides/theming/#colors
  colorPrimary: {
    concern: 'colors',
    replacement: 'contentPrimary',
  },
  colorSecondary: {
    concern: 'colors',
    replacement: 'contentSecondary',
  },
  background: {
    concern: 'colors',
    replacement: 'backgroundPrimary',
  },
  backgroundAlt: {
    concern: 'colors',
    replacement: 'backgroundSecondary',
  },
  backgroundInv: {
    concern: 'colors',
    replacement: 'backgroundInversePrimary',
  },
  foreground: {
    concern: 'colors',
    replacement: 'contentPrimary',
  },
  foregroundAlt: {
    concern: 'colors',
    replacement: 'contentSecondary',
  },
  foregroundInv: {
    concern: 'colors',
    replacement: 'contentInversePrimary',
  },
  border: {
    concern: 'colors',
    replacement: 'borderOpaque',
  },
  borderAlt: {
    concern: 'colors',
    replacement: 'borderTransparent',
  },
  borderFocus: {
    concern: 'colors',
    replacement: 'borderSelected',
  },
  borderError: {
    concern: 'colors',
    replacement: 'borderNegative',
  },
  shadowFocus: {
    concern: 'colors',
  },
  shadowError: {
    concern: 'colors',
  },
  // These are all component specific color properties.
  // They currently have no effect, that is, they are unsued in our component code.
  // They will be removed in the next major version of baseweb.
  datepickerBackground: {
    concern: 'colors',
  },
  datepickerDayFont: {
    concern: 'colors',
  },
  datepickerDayFontDisabled: {
    concern: 'colors',
  },
  datepickerDayPseudoSelected: {
    concern: 'colors',
  },
  datepickerDayPseudoHighlighted: {
    concern: 'colors',
  },
  calendarDayBackgroundPseudoSelected: {
    concern: 'colors',
  },
  listIconFill: {
    concern: 'colors',
  },
  listBorder: {
    concern: 'colors',
  },
  progressStepsIconActiveFill: {
    concern: 'colors',
  },
  sliderTrackFillSelected: {
    concern: 'colors',
  },
  sliderTrackFillSelectedHover: {
    concern: 'colors',
  },
  sliderTrackFillSelectedActive: {
    concern: 'colors',
  },
  sliderHandleFill: {
    concern: 'colors',
  },
  sliderHandleFillHover: {
    concern: 'colors',
  },
  sliderHandleFillActive: {
    concern: 'colors',
  },
  sliderHandleFillSelected: {
    concern: 'colors',
  },
  sliderHandleFillSelectedHover: {
    concern: 'colors',
  },
  sliderHandleFillSelectedActive: {
    concern: 'colors',
  },
  sliderHandleFillDisabled: {
    concern: 'colors',
  },
  sliderBorder: {
    concern: 'colors',
  },
  sliderBorderHover: {
    concern: 'colors',
  },
  sliderBorderDisabled: {
    concern: 'colors',
  },
  notificationPrimaryBackground: {
    concern: 'colors',
  },
  notificationPrimaryText: {
    concern: 'colors',
  },
  paginationTriangleDown: {
    concern: 'colors',
  },
  headerNavigationFill: {
    concern: 'colors',
  },
  tagLightDisabledRampUnit: {
    concern: 'colors',
  },
  tagOutlinedDisabledRampUnit: {
    concern: 'colors',
  },
  toastPrimaryBackground: {
    concern: 'colors',
  },
  // These are marked as deprecated in baseweb:src/theme.ts.
  // Strangely, they are not in baseweb:src/themes/types.js, so I'm not sure where they came from.
  // Adding them here in case someone, somewhere is using them.
  tagBackground: {
    concern: 'colors',
  },
  tagNeutralBackground: {
    concern: 'colors',
  },
  tagPrimaryBackground: {
    concern: 'colors',
  },
  tagPositiveBackground: {
    concern: 'colors',
  },
  tagWarningBackground: {
    concern: 'colors',
  },
  tagNegativeBackground: {
    concern: 'colors',
  },
  tagRGBGradient: {
    concern: 'colors',
  },
  tagRGBGradientSecondary: {
    concern: 'colors',
  },
  // These are our old typography properties.
  // They have been aliased with newer values like ParagraphMedium and DisplayLarge.
  // These are preferable as they align with design specs.
  font100: {
    concern: 'typography',
    replacement: 'ParagraphXSmall',
  },
  font150: {
    concern: 'typography',
    replacement: 'LabelXSmall',
  },
  font200: {
    concern: 'typography',
    replacement: 'ParagraphSmall',
  },
  font250: {
    concern: 'typography',
    replacement: 'LabelSmall',
  },
  font300: {
    concern: 'typography',
    replacement: 'ParagraphMedium',
  },
  font350: {
    concern: 'typography',
    replacement: 'LabelMedium',
  },
  font400: {
    concern: 'typography',
    replacement: 'ParagraphLarge',
  },
  font450: {
    concern: 'typography',
    replacement: 'LabelLarge',
  },
  font550: {
    concern: 'typography',
    replacement: 'HeadingXSmall',
  },
  font650: {
    concern: 'typography',
    replacement: 'HeadingSmall',
  },
  font750: {
    concern: 'typography',
    replacement: 'HeadingMedium',
  },
  font850: {
    concern: 'typography',
    replacement: 'HeadingLarge',
  },
  font950: {
    concern: 'typography',
    replacement: 'HeadingXLarge',
  },
  font1050: {
    concern: 'typography',
    replacement: 'HeadingXXLarge',
  },
  font1150: {
    concern: 'typography',
    replacement: 'DisplayXSmall',
  },
  font1250: {
    concern: 'typography',
    replacement: 'DisplaySmall',
  },
  font1350: {
    concern: 'typography',
    replacement: 'DisplayMedium',
  },
  font1450: {
    concern: 'typography',
    replacement: 'DisplayLarge',
  },
};

function log(msg) {
  if (process.env.NODE_ENV === 'test') {
    console.log(msg);
  }
}

module.exports = {
  meta: {
    fixable: 'code',
    messages: {
      [MESSAGES.deprecateThemeProperty.id]:
        MESSAGES.deprecateThemeProperty.message,
      [MESSAGES.replaceThemeProperty.id]: MESSAGES.replaceThemeProperty.message,
    },
  },
  create(context) {
    return {
      Identifier(node) {
        const identifier = node.name;
        const ancestors = context.getAncestors();
        // const sourceCode = context.getSourceCode();
        // const scope = context.getScope();

        if (
          Object.prototype.hasOwnProperty.call(
            deprecatedThemeProperties,
            identifier,
          )
        ) {
          // We have matched a possible deprecated theme property.
          // Now we need to check how it is used.
          const themeProperty = deprecatedThemeProperties[identifier];
          const reportOptions = {
            node,
            messageId: MESSAGES.deprecateThemeProperty.id,
            data: {old: identifier},
            fix: null,
          };

          // Update report options if there is a possible replacement for this property.
          if (themeProperty.replacement) {
            reportOptions.messageId = MESSAGES.replaceThemeProperty.id;
            reportOptions.data.new = themeProperty.replacement;
            reportOptions.fix = function(fixer) {
              return fixer.replaceText(node, themeProperty.replacement);
            };
          }

          // Option 1. Is this node used in the overrides argument for createTheme?

          // Option 2. Is this node used in a function passed to styled or withStyle?
          const styledFunctionCall = ancestors.find(
            node =>
              (node.type === 'CallExpression' &&
                node.callee.name === 'styled') ||
              (node.type === 'CallExpression' &&
                node.callee.name === 'withStyle'),
          );
          const styledFunctionArgument = ancestors.find(node =>
            ['ArrowFunctionExpression', 'FunctionExpression'].includes(
              node.type,
            ),
          );
          if (
            styledFunctionCall &&
            styledFunctionCall.arguments[1] === styledFunctionArgument
          ) {
            // We have confirmed that our identifier is used in a
            // function passed as the second argument to styled or withStyle.
            // Now we need to analyze the params of the style function argument.
            // There are multiple levels of de-structuring possible.

            // Option 2-1. No destructuring.
            // Ex: styled('div', function(props) { return { color: props.$theme.colors.foreground } })
            if (styledFunctionArgument.params[0].type === 'Identifier') {
              const paramName = styledFunctionArgument.params[0].name;
              if (
                node.parent.type === 'MemberExpression' &&
                node.parent.object.type === 'MemberExpression' &&
                node.parent.object.property.name === themeProperty.concern &&
                node.parent.object.object.type === 'MemberExpression' &&
                node.parent.object.object.property.name === '$theme' &&
                node.parent.object.object.object.type === 'Identifier' &&
                node.parent.object.object.object.name === paramName
              ) {
                // We have verified that the identifier accesses the theme.
                // Ex: props.$theme.colors.foreground
                context.report(reportOptions);
                return;
              }
            }

            // Option 2-2.
            // styled('div', function({$theme}) { ... })

            // Option 2-3.
            // styled('div', function({$theme: {colors}}) { ... })

            // Option 2-4.
            // styled('div', function({$theme: {colors: {background}}}) { ... })
          }

          // Option 3. Is this node used in an override style function?

          // Option 4. Is this node used in tandem with useStyletron?
        }
      },
    };
  },
};
