import { Morphism } from '../ramda/dist/src/$types';
import R_countBy = require('../ramda/dist/src/countBy');

declare const object_to_string: Morphism<object, string>;
declare const object_array: object[];

// @dts-jest:pass:snap
R_countBy(object_to_string);
// @dts-jest:pass:snap
R_countBy(object_to_string, object_array);
