import R_lt = require('../ramda/dist/src/lt');

declare const string: string;
declare const number: number;

// @dts-jest:pass:snap
R_lt(string);
// @dts-jest:pass:snap
R_lt(string, string);
// @dts-jest:pass:snap
R_lt(number, number);
