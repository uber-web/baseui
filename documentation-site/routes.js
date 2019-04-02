/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-disable flowtype/require-valid-file-annotation */
/* eslint-env node */

const routes = [
  {
    title: 'Getting started',
    subnav: [
      {
        title: 'Welcome',
        itemId: '/',
      },
      {
        title: 'Installation',
        itemId: '/getting-started/installation',
      },
      {
        title: 'Usage',
        itemId: '/getting-started/usage',
      },
      {
        title: 'Learn',
        itemId: '/getting-started/learn',
      },
      {
        title: 'Versioning policy',
        itemId: '/getting-started/versioning-policy',
      },
      {
        title: 'Supported platforms',
        itemId: '/getting-started/supported-platforms',
      },
      {
        title: 'Comparison',
        itemId: '/getting-started/comparison',
      },
      {
        title: 'Internationalization',
        itemId: '/getting-started/internationalization',
      },
    ],
  },
  {
    title: 'Theming',
    subnav: [
      {
        title: 'Intro to Theming',
        itemId: '/theming/custom-themes',
      },
      {
        title: 'Theming values',
        itemId: '/theming/theming-values',
      },
      {
        title: 'Overrides',
        itemId: '/theming/understanding-overrides',
      },
      {
        title: 'Icons',
        itemId: '/theming/overriding-icons',
      },
    ],
  },
  {
    components: true,
    title: 'Components',
    subnav: [
      {
        title: 'Basic Inputs',
        subnav: [
          {
            title: 'Button',
            itemId: '/components/button',
          },
          {
            title: 'ButtonGroup',
            itemId: '/components/button-group',
          },
          {
            title: 'Checkbox',
            itemId: '/components/checkbox',
          },
          {
            title: 'Input',
            itemId: '/components/input',
          },
          {
            title: 'Slider',
            itemId: '/components/slider',
          },
          {
            title: 'Radio',
            itemId: '/components/radio',
          },
          {
            title: 'Textarea',
            itemId: '/components/textarea',
          },
          {
            title: 'FormControl',
            itemId: '/components/form-control',
          },
        ],
      },
      {
        title: 'Navigation',
        subnav: [
          {
            title: 'Breadcrumbs',
            itemId: '/components/breadcrumbs',
          },
          {
            title: 'Header navigation',
            itemId: '/components/header-navigation',
          },
          {
            title: 'Link',
            itemId: '/components/link',
          },
          {
            title: 'Pagination',
            itemId: '/components/pagination',
          },
          {
            title: 'Side navigation',
            itemId: '/components/sidenav',
          },
          {
            title: 'Tab',
            itemId: '/components/tabs',
          },
        ],
      },
      {
        title: 'Content',
        subnav: [
          {
            title: 'Accordion',
            itemId: '/components/accordion',
          },
          {
            title: 'Avatar',
            itemId: '/components/avatar',
          },
          {
            title: 'Drag and Drop List',
            itemId: '/components/dnd-list',
          },
          {
            title: 'Icon',
            itemId: '/components/icon',
          },
          {
            title: 'Tag',
            itemId: '/components/tag',
          },
          {
            title: 'Typography',
            itemId: '/components/typography',
          },
          {
            title: 'Table',
            itemId: '/components/table',
          },
        ],
      },
      {
        title: 'Pickers',
        subnav: [
          {
            title: 'File Uploader',
            itemId: '/components/file-uploader',
          },
          {
            title: 'Menu',
            itemId: '/components/menu',
          },
          {
            title: 'Rating',
            itemId: '/components/rating',
          },
          {
            title: 'Select',
            itemId: '/components/select',
          },
          {
            title: 'Datepicker',
            itemId: '/components/datepicker',
          },
        ],
      },
      {
        title: 'Progress & Validation',
        subnav: [
          {
            title: 'Notification',
            itemId: '/components/notification',
          },
          {
            title: 'ProgressBar',
            itemId: '/components/progress-bar',
          },
          {
            title: 'Progress steps',
            itemId: '/components/progress-steps',
          },
          {
            title: 'Spinner',
            itemId: '/components/spinner',
          },
          {
            title: 'Toast',
            itemId: '/components/toast',
          },
        ],
      },
      {
        title: 'Surfaces',
        subnav: [
          {
            title: 'Card',
            itemId: '/components/card',
          },
          {
            title: 'Modal',
            itemId: '/components/modal',
          },
          {
            title: 'Popover',
            itemId: '/components/popover',
          },
          {
            title: 'Tooltip',
            itemId: '/components/tooltip',
          },
        ],
      },
      {
        title: 'Utility',
        subnav: [
          {
            title: 'Block',
            itemId: '/components/block',
          },
          {
            title: 'Styled',
            itemId: '/components/styled',
          },
        ],
      },
    ],
  },
  {
    title: 'Blog',
    itemId: '/blog',
  },
];

export default routes;
