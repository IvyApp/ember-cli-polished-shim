import { module, test } from 'qunit';

import * as polished from 'polished';

module('Unit | Polished | Tests');

[
  // Mixins
  'clearFix',
  'ellipsis',
  'fontFace',
  'hiDPI',
  'hideText',
  'normalize',
  'placeholder',
  'radialGradient',
  'retinaImage',
  'selection',
  'timingFunctions',
  'triangle',
  'wordWrap',

  // Color
  'adjustHue',
  'complement',
  'darken',
  'desaturate',
  'grayscale',
  'hsl',
  'hsla',
  'invert',
  'lighten',
  'mix',
  'opacify',
  'parseToHsl',
  'parseToRgb',
  'rgb',
  'rgba',
  'saturate',
  'setHue',
  'setLightness',
  'setSaturation',
  'shade',
  'tint',
  'transparentize',

  // Shorthands
  'animation',
  'backgroundImages',
  'backgrounds',
  'borderColor',
  'borderRadius',
  'borderStyle',
  'borderWidth',
  'buttons',
  'margin',
  'padding',
  'position',
  'size',
  'textInputs',
  'transitions',

  // Helpers
  'directionalProperty',
  'em',
  'modularScale',
  'rem',
  'stripUnit'
].forEach(method => {
  test(`exports ${method} method`, function(assert) {
    assert.equal(typeof polished[method], 'function');
  });
});
