import R_propEq = require('../ramda/dist/src/propEq');

declare const string: string;
declare const object: object;

// @dts-jest:pass:snap
R_propEq(string, string);
// @dts-jest:pass:snap
R_propEq(string)(string)(object);
// @dts-jest:pass:snap
R_propEq(string, string, object);
