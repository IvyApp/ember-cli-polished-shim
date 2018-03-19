import { helper } from '@ember/component/helper';
import { parseToRgb, rgba as formatRgba } from 'polished';

export function rgba([color]) {
  return formatRgba(parseToRgb(color));
}

export default helper(rgba);
