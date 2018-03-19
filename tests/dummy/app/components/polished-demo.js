import Component from '@ember/component';
import { computed } from '@ember/object';
import { StyleSheet } from 'aphrodite';
import * as polished from 'polished';

function readable(backgroundColor) {
  return {
    backgroundColor,
    color: polished.readableColor(backgroundColor)
  };
}

export default Component.extend({
  adjustHueAmount: 180,

  adjustHue: computed('adjustHueAmount', 'baseColor', function() {
    return polished.adjustHue(
      parseInt(this.get('adjustHueAmount'), 10),
      this.get('baseColor')
    );
  }).readOnly(),

  baseColor: 'papayawhip',

  colors: computed(function() {
    return [
      'aliceblue',
      'antiquewhite',
      'aqua',
      'aquamarine',
      'azure',
      'beige',
      'bisque',
      'black',
      'blanchedalmond',
      'blue',
      'blueviolet',
      'brown',
      'burlywood',
      'cadetblue',
      'chartreuse',
      'chocolate',
      'coral',
      'cornflowerblue',
      'cornsilk',
      'crimson',
      'cyan',
      'darkblue',
      'darkcyan',
      'darkgoldenrod',
      'darkgray',
      'darkgreen',
      'darkgrey',
      'darkkhaki',
      'darkmagenta',
      'darkolivegreen',
      'darkorange',
      'darkorchid',
      'darkred',
      'darksalmon',
      'darkseagreen',
      'darkslateblue',
      'darkslategray',
      'darkslategrey',
      'darkturquoise',
      'darkviolet',
      'deeppink',
      'deepskyblue',
      'dimgray',
      'dimgrey',
      'dodgerblue',
      'firebrick',
      'floralwhite',
      'forestgreen',
      'fuchsia',
      'gainsboro',
      'ghostwhite',
      'gold',
      'goldenrod',
      'gray',
      'green',
      'greenyellow',
      'grey',
      'honeydew',
      'hotpink',
      'indianred',
      'indigo',
      'ivory',
      'khaki',
      'lavender',
      'lavenderblush',
      'lawngreen',
      'lemonchiffon',
      'lightblue',
      'lightcoral',
      'lightcyan',
      'lightgoldenrodyellow',
      'lightgray',
      'lightgreen',
      'lightgrey',
      'lightpink',
      'lightsalmon',
      'lightseagreen',
      'lightskyblue',
      'lightslategray',
      'lightslategrey',
      'lightsteelblue',
      'lightyellow',
      'lime',
      'limegreen',
      'linen',
      'magenta',
      'maroon',
      'mediumaquamarine',
      'mediumblue',
      'mediumorchid',
      'mediumpurple',
      'mediumseagreen',
      'mediumslateblue',
      'mediumspringgreen',
      'mediumturquoise',
      'mediumvioletred',
      'midnightblue',
      'mintcream',
      'mistyrose',
      'moccasin',
      'navajowhite',
      'navy',
      'oldlace',
      'olive',
      'olivedrab',
      'orange',
      'orangered',
      'orchid',
      'palegoldenrod',
      'palegreen',
      'paleturquoise',
      'palevioletred',
      'papayawhip',
      'peachpuff',
      'peru',
      'pink',
      'plum',
      'powderblue',
      'purple',
      'red',
      'rosybrown',
      'royalblue',
      'saddlebrown',
      'salmon',
      'sandybrown',
      'seagreen',
      'seashell',
      'sienna',
      'silver',
      'skyblue',
      'slateblue',
      'slategray',
      'slategrey',
      'snow',
      'springgreen',
      'steelblue',
      'tan',
      'teal',
      'thistle',
      'tomato',
      'turquoise',
      'violet',
      'wheat',
      'white',
      'whitesmoke',
      'yellow',
      'yellowgreen'
    ];
  }).readOnly(),

  complement: computed('baseColor', function() {
    return polished.complement(this.get('baseColor'));
  }).readOnly(),

  darkenAmount: 0.2,

  darken: computed('baseColor', 'darkenAmount', function() {
    return polished.darken(
      parseFloat(this.get('darkenAmount')),
      this.get('baseColor')
    );
  }).readOnly(),

  desaturateAmount: 0.5,

  desaturate: computed('baseColor', 'desaturateAmount', function() {
    return polished.desaturate(
      parseFloat(this.get('desaturateAmount')),
      this.get('baseColor')
    );
  }).readOnly(),

  invert: computed('baseColor', function() {
    return polished.invert(this.get('baseColor'));
  }).readOnly(),

  lightenAmount: 0.2,

  lighten: computed('baseColor', 'lightenAmount', function() {
    return polished.lighten(
      parseFloat(this.get('lightenAmount')),
      this.get('baseColor')
    );
  }).readOnly(),

  shadeAmount: 0.5,

  shade: computed('baseColor', 'shadeAmount', function() {
    return polished.shade(
      parseFloat(this.get('shadeAmount')),
      this.get('baseColor')
    );
  }).readOnly(),

  styles: computed(
    'adjustHue',
    'baseColor',
    'complement',
    'darken',
    'desaturate',
    'invert',
    'lighten',
    'shade',
    'tint',
    'transparentize',
    function() {
      return StyleSheet.create({
        adjustHue: { ...readable(this.get('adjustHue')) },

        base: { ...readable(this.get('baseColor')) },

        complement: { ...readable(this.get('complement')) },

        darken: { ...readable(this.get('darken')) },

        desaturate: { ...readable(this.get('desaturate')) },

        invert: { ...readable(this.get('invert')) },

        lighten: { ...readable(this.get('lighten')) },

        shade: { ...readable(this.get('shade')) },

        swatch: {
          alignItems: 'center',
          display: 'flex',
          fontSize: 14,
          justifyContent: 'space-between',
          ...polished.margin(8, 0),
          ...polished.padding(8)
        },

        swatches: {
          alignContent: 'stretch',
          alignItems: 'stretch',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          ...polished.padding(0),
          width: '100%'
        },

        tint: { ...readable(this.get('tint')) },

        transparentize: { ...readable(this.get('transparentize')) }
      });
    }
  ).readOnly(),

  tintAmount: 0.2,

  tint: computed('baseColor', 'tintAmount', function() {
    return polished.tint(
      parseFloat(this.get('tintAmount')),
      this.get('baseColor')
    );
  }).readOnly(),

  transparentizeAmount: 0.5,

  transparentize: computed('baseColor', 'transparentizeAmount', function() {
    return polished.transparentize(
      parseFloat(this.get('transparentizeAmount')),
      this.get('baseColor')
    );
  }).readOnly()
});
