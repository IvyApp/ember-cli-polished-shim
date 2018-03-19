import { helper } from '@ember/component/helper';
import { parseToRgb, rgb as formatRgb } from 'polished';

export function rgb([color]) {
  return formatRgb(parseToRgb(color));
}

export default helper(rgb);
