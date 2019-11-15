/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import colorTokens from './color-tokens.js';
import type {ColorTokensT, ComponentColorTokensT} from '../types.js';

/* ---- Component colors ---- */
// TODO(#2318) Make it a plain object in the next major version
// with values taken from `colorTokens`.
// Due to the legacy `createTheme` type the value need to be
// overrideable through primitives (`foundation` )
export default (
  primitives: ColorTokensT = colorTokens,
): ComponentColorTokensT => ({
  // Buttons
  buttonPrimaryFill: primitives.primary,
  buttonPrimaryText: primitives.white,
  buttonPrimaryHover: primitives.primary700,
  buttonPrimaryActive: primitives.primary600,
  buttonPrimarySelectedFill: primitives.primary600,
  buttonPrimarySelectedText: primitives.white,
  buttonPrimarySpinnerForeground: primitives.primary50,
  buttonPrimarySpinnerBackground: primitives.primary500,

  buttonSecondaryFill: primitives.primary100,
  buttonSecondaryText: primitives.primary,
  buttonSecondaryHover: primitives.primary200,
  buttonSecondaryActive: primitives.primary300,
  buttonSecondarySelectedFill: primitives.primary200,
  buttonSecondarySelectedText: primitives.primary,
  buttonSecondarySpinnerForeground: primitives.primary700,
  buttonSecondarySpinnerBackground: primitives.primary300,

  buttonTertiaryFill: 'transparent',
  buttonTertiaryText: primitives.primary,
  buttonTertiaryHover: primitives.primary50,
  buttonTertiaryActive: primitives.primary100,
  buttonTertiarySelectedFill: primitives.primary100,
  buttonTertiarySelectedText: primitives.primary,
  buttonTertiarySpinnerForeground: primitives.primary700,
  buttonTertiarySpinnerBackground: primitives.primary300,

  buttonMinimalFill: 'transparent',
  buttonMinimalText: primitives.primary,
  buttonMinimalHover: primitives.primary50,
  buttonMinimalActive: primitives.primary100,
  buttonMinimalSelectedFill: primitives.primary100,
  buttonMinimalSelectedText: primitives.primary,
  buttonMinimalSpinnerForeground: primitives.primary700,
  buttonMinimalSpinnerBackground: primitives.primary300,

  buttonDisabledFill: primitives.mono200,
  buttonDisabledText: primitives.mono600,
  buttonDisabledSpinnerForeground: primitives.mono600,
  buttonDisabledSpinnerBackground: primitives.mono400,

  // Breadcrumbs
  breadcrumbsText: primitives.mono900,
  breadcrumbsSeparatorFill: primitives.mono700,

  // Datepicker
  datepickerBackground: primitives.mono100,
  datepickerDayFont: primitives.mono1000,
  datepickerDayFontDisabled: primitives.mono500,
  datepickerDayPseudoSelected: primitives.primary100,
  datepickerDayPseudoHighlighted: primitives.primary200,

  // Calendar
  calendarBackground: primitives.mono100,
  calendarForeground: primitives.mono1000,
  calendarForegroundDisabled: primitives.mono500,
  calendarHeaderBackground: primitives.primary,
  calendarHeaderForeground: primitives.white,
  calendarHeaderBackgroundActive: primitives.primary700,
  calendarHeaderForegroundDisabled: primitives.primary500,
  calendarDayBackgroundPseudoSelected: primitives.primary100,
  calendarDayForegroundPseudoSelected: primitives.mono1000,
  calendarDayBackgroundPseudoSelectedHighlighted: primitives.primary200,
  calendarDayForegroundPseudoSelectedHighlighted: primitives.mono1000,
  calendarDayBackgroundSelected: primitives.white,
  calendarDayForegroundSelected: primitives.black,
  calendarDayBackgroundSelectedHighlighted: primitives.black,
  calendarDayForegroundSelectedHighlighted: primitives.white,

  // FileUploader
  fileUploaderBackgroundColor: primitives.mono200,
  fileUploaderBackgroundColorActive: primitives.primary50,
  fileUploaderBorderColorActive: primitives.primary,
  fileUploaderBorderColorDefault: primitives.mono500,
  fileUploaderMessageColor: primitives.mono600,

  // Links
  linkText: primitives.primary,
  linkVisited: primitives.primary700,
  linkHover: primitives.primary600,
  linkActive: primitives.primary500,

  // List
  listHeaderFill: primitives.white,
  listBodyFill: primitives.mono200,
  listIconFill: primitives.mono500,
  listBorder: primitives.mono500,

  // ProgressSteps
  progressStepsCompletedText: primitives.white,
  progressStepsCompletedFill: primitives.primary,
  progressStepsActiveText: primitives.white,
  progressStepsActiveFill: primitives.primary,
  progressStepsIconActiveFill: primitives.primary,

  // Tick
  tickFill: primitives.mono100,
  tickFillHover: primitives.mono200,
  tickFillActive: primitives.mono300,

  tickFillSelected: primitives.primary,
  tickFillSelectedHover: primitives.primary700,
  tickFillSelectedHoverActive: primitives.primary600,

  tickFillError: primitives.negative50,
  tickFillErrorHover: primitives.negative100,
  tickFillErrorHoverActive: primitives.negative200,
  tickFillErrorSelected: primitives.negative400,
  tickFillErrorSelectedHover: primitives.negative500,
  tickFillErrorSelectedHoverActive: primitives.negative600,

  tickFillDisabled: primitives.mono300,

  tickBorder: primitives.mono700,
  tickBorderError: primitives.negative400,

  tickMarkFill: primitives.white,
  tickMarkFillError: primitives.white,
  tickMarkFillDisabled: primitives.mono600,

  // Slider/Toggle
  sliderTrackFill: primitives.mono400,
  sliderTrackFillHover: primitives.mono500,
  sliderTrackFillActive: primitives.mono600,
  sliderTrackFillSelected: primitives.primary,
  sliderTrackFillSelectedHover: primitives.primary,
  sliderTrackFillSelectedActive: primitives.primary500,
  sliderTrackFillDisabled: primitives.mono300,
  sliderHandleFill: primitives.white,
  sliderHandleFillHover: primitives.white,
  sliderHandleFillActive: primitives.white,
  sliderHandleFillSelected: primitives.white,
  sliderHandleFillSelectedHover: primitives.white,
  sliderHandleFillSelectedActive: primitives.white,
  sliderHandleFillDisabled: primitives.mono500,
  sliderHandleInnerFill: primitives.mono400,
  sliderHandleInnerFillDisabled: primitives.mono400,
  sliderHandleInnerFillSelectedHover: primitives.primary,
  sliderHandleInnerFillSelectedActive: primitives.primary500,

  sliderBorder: primitives.mono500,
  sliderBorderHover: primitives.primary,
  sliderBorderDisabled: primitives.mono600,

  // Inputs
  inputFill: primitives.mono300,
  inputFillError: primitives.negative50,
  inputFillDisabled: primitives.mono200,
  inputFillActive: primitives.mono200,
  inputFillPositive: primitives.positive50,
  inputTextDisabled: primitives.mono600,
  inputBorderError: primitives.negative200,
  inputBorderPositive: primitives.positive200,
  inputEnhancerFill: primitives.mono300,
  inputEnhancerFillDisabled: primitives.mono300,
  inputEnhancerTextDisabled: primitives.mono600,

  // Menu
  menuFill: primitives.mono100,
  menuFillHover: primitives.mono200,
  menuFontDefault: primitives.mono800,
  menuFontDisabled: primitives.mono500,
  menuFontHighlighted: primitives.mono1000,
  menuFontSelected: primitives.mono1000,

  // Modal
  modalCloseColor: primitives.primary,
  modalCloseColorHover: primitives.primary600,
  modalCloseColorFocus: primitives.primary600,

  // Pagination
  paginationTriangleDown: primitives.mono800,

  // Header navigation
  headerNavigationFill: 'transparent',

  // Tab
  tabBarFill: primitives.mono200,
  tabColor: primitives.mono800,

  // Notification
  notificationPrimaryBackground: primitives.primary50,
  notificationPrimaryText: primitives.primary500,
  notificationInfoBackground: primitives.accent50,
  notificationInfoText: primitives.accent500,
  notificationPositiveBackground: primitives.positive50,
  notificationPositiveText: primitives.positive500,
  notificationWarningBackground: primitives.warning50,
  notificationWarningText: primitives.warning500,
  notificationNegativeBackground: primitives.negative50,
  notificationNegativeText: primitives.negative500,

  // Tag
  tagSolidRampUnit: '400',
  tagSolidHoverRampUnit: '50',
  tagSolidActiveRampUnit: '100',
  tagSolidDisabledRampUnit: '50',
  tagSolidFontRampUnit: '50',
  tagSolidFontHoverRampUnit: '500',
  tagLightRampUnit: '50',
  tagLightHoverRampUnit: '100',
  tagLightActiveRampUnit: '100',
  tagLightDisabledRampUnit: '50',
  tagLightFontRampUnit: '500',
  tagLightFontHoverRampUnit: '500',
  tagOutlinedRampUnit: '400',
  tagOutlinedHoverRampUnit: '500',
  tagOutlinedActiveRampUnit: '600',
  tagOutlinedDisabledRampUnit: '50',
  tagOutlinedFontRampUnit: '500',
  tagOutlinedFontHoverRampUnit: '50',
  tagFontDisabledRampUnit: '200',

  tagNeutralSolidBackground: primitives.mono900,
  tagNeutralSolidHover: primitives.mono300,
  tagNeutralSolidActive: primitives.mono400,
  tagNeutralSolidDisabled: primitives.mono200,
  tagNeutralSolidFont: primitives.mono100,
  tagNeutralSolidFontHover: primitives.mono900,
  tagNeutralLightBackground: primitives.mono300,
  tagNeutralLightHover: primitives.mono300,
  tagNeutralLightActive: primitives.mono400,
  tagNeutralLightDisabled: primitives.mono200,
  tagNeutralLightFont: primitives.mono900,
  tagNeutralLightFontHover: primitives.mono900,
  tagNeutralOutlinedBackground: primitives.mono900,
  tagNeutralOutlinedHover: primitives.mono800,
  tagNeutralOutlinedActive: primitives.mono900,
  tagNeutralOutlinedDisabled: primitives.mono200,
  tagNeutralOutlinedFont: primitives.mono900,
  tagNeutralOutlinedFontHover: primitives.mono200,
  tagNeutralFontDisabled: primitives.mono500,

  tagPrimarySolidBackground: primitives.primary,
  tagPrimarySolidHover: primitives.primary100,
  tagPrimarySolidActive: primitives.primary200,
  tagPrimarySolidDisabled: primitives.primary50,
  tagPrimarySolidFont: primitives.primary50,
  tagPrimarySolidFontHover: primitives.primary700,
  tagPrimaryLightBackground: primitives.primary50,
  tagPrimaryLightHover: primitives.primary100,
  tagPrimaryLightActive: primitives.primary100,
  tagPrimaryLightDisabled: primitives.primary50,
  tagPrimaryLightFont: primitives.primary500,
  tagPrimaryLightFontHover: primitives.primary500,
  tagPrimaryOutlinedBackground: primitives.primary,
  tagPrimaryOutlinedHover: primitives.primary700,
  tagPrimaryOutlinedActive: primitives.primary600,
  tagPrimaryOutlinedDisabled: primitives.primary50,
  tagPrimaryOutlinedFont: primitives.primary,
  tagPrimaryOutlinedFontHover: primitives.primary50,
  tagPrimaryFontDisabled: primitives.primary400,

  tagAccentSolidBackground: primitives.accent400,
  tagAccentSolidHover: primitives.accent50,
  tagAccentSolidActive: primitives.accent100,
  tagAccentSolidDisabled: primitives.accent50,
  tagAccentSolidFont: primitives.accent50,
  tagAccentSolidFontHover: primitives.accent500,
  tagAccentLightBackground: primitives.accent50,
  tagAccentLightHover: primitives.accent100,
  tagAccentLightActive: primitives.accent100,
  tagAccentLightDisabled: primitives.accent50,
  tagAccentLightFont: primitives.accent500,
  tagAccentLightFontHover: primitives.accent500,
  tagAccentOutlinedBackground: primitives.accent400,
  tagAccentOutlinedHover: primitives.accent500,
  tagAccentOutlinedActive: primitives.accent600,
  tagAccentOutlinedDisabled: primitives.accent50,
  tagAccentOutlinedFont: primitives.accent500,
  tagAccentOutlinedFontHover: primitives.accent50,
  tagAccentFontDisabled: primitives.accent200,

  tagPositiveSolidBackground: primitives.positive400,
  tagPositiveSolidHover: primitives.positive50,
  tagPositiveSolidActive: primitives.positive100,
  tagPositiveSolidDisabled: primitives.positive50,
  tagPositiveSolidFont: primitives.positive50,
  tagPositiveSolidFontHover: primitives.positive500,
  tagPositiveLightBackground: primitives.positive50,
  tagPositiveLightHover: primitives.positive100,
  tagPositiveLightActive: primitives.positive100,
  tagPositiveLightDisabled: primitives.positive50,
  tagPositiveLightFont: primitives.positive500,
  tagPositiveLightFontHover: primitives.positive500,
  tagPositiveOutlinedBackground: primitives.positive400,
  tagPositiveOutlinedHover: primitives.positive500,
  tagPositiveOutlinedActive: primitives.positive600,
  tagPositiveOutlinedDisabled: primitives.positive50,
  tagPositiveOutlinedFont: primitives.positive500,
  tagPositiveOutlinedFontHover: primitives.positive50,
  tagPositiveFontDisabled: primitives.positive200,

  tagWarningSolidBackground: primitives.warning400,
  tagWarningSolidHover: primitives.warning50,
  tagWarningSolidActive: primitives.warning100,
  tagWarningSolidDisabled: primitives.warning50,
  tagWarningSolidFont: primitives.warning50,
  tagWarningSolidFontHover: primitives.warning500,
  tagWarningLightBackground: primitives.warning50,
  tagWarningLightHover: primitives.warning100,
  tagWarningLightActive: primitives.warning100,
  tagWarningLightDisabled: primitives.warning50,
  tagWarningLightFont: primitives.warning500,
  tagWarningLightFontHover: primitives.warning500,
  tagWarningOutlinedBackground: primitives.warning400,
  tagWarningOutlinedHover: primitives.warning500,
  tagWarningOutlinedActive: primitives.warning600,
  tagWarningOutlinedDisabled: primitives.warning50,
  tagWarningOutlinedFont: primitives.warning500,
  tagWarningOutlinedFontHover: primitives.warning50,
  tagWarningFontDisabled: primitives.warning200,

  tagNegativeSolidBackground: primitives.negative400,
  tagNegativeSolidHover: primitives.negative50,
  tagNegativeSolidActive: primitives.negative100,
  tagNegativeSolidDisabled: primitives.negative50,
  tagNegativeSolidFont: primitives.negative50,
  tagNegativeSolidFontHover: primitives.negative500,

  tagNegativeLightBackground: primitives.negative50,
  tagNegativeLightHover: primitives.negative100,
  tagNegativeLightActive: primitives.negative100,
  tagNegativeLightDisabled: primitives.negative50,
  tagNegativeLightFont: primitives.negative500,
  tagNegativeLightFontHover: primitives.negative500,

  tagNegativeOutlinedBackground: primitives.negative400,
  tagNegativeOutlinedHover: primitives.negative500,
  tagNegativeOutlinedActive: primitives.negative600,
  tagNegativeOutlinedDisabled: primitives.negative50,
  tagNegativeOutlinedFont: primitives.negative500,
  tagNegativeOutlinedFontHover: primitives.negative50,
  tagNegativeFontDisabled: primitives.negative200,

  // Table
  tableHeadBackgroundColor: primitives.mono100,
  tableBackground: primitives.mono100,
  tableStripedBackground: primitives.mono200,
  tableFilter: primitives.mono600,
  tableFilterHeading: primitives.mono700,
  tableFilterBackground: primitives.mono100,
  tableFilterFooterBackground: primitives.mono200,

  // Toast
  toastText: primitives.white,
  toastPrimaryBackground: primitives.primary500,
  toastInfoBackground: primitives.accent500,
  toastPositiveBackground: primitives.positive500,
  toastWarningBackground: primitives.warning500,
  toastNegativeBackground: primitives.negative500,

  // Spinner
  spinnerTrackFill: primitives.mono900,

  // Progress bar
  progressbarTrackFill: primitives.mono900,

  // Tooltip
  tooltipBackground: primitives.mono900,
  tooltipText: primitives.mono100,
});
