import * as R from '../ramda/dist/index';

declare const a_1: { a: 1 };
declare const b_2: { b: 2 };

// @dts-jest:pass:snap -> (right: object) => object
R.mergeDeepLeft(a_1);

// @dts-jest:pass:snap -> object
R.mergeDeepLeft(a_1)(b_2);
// @dts-jest:pass:snap -> object
R.mergeDeepLeft(a_1, b_2);
