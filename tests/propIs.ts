import R_propIs = require('../ramda/dist/src/propIs');

declare const object: object;

// @dts-jest:pass:snap
R_propIs(Number)('a');
// @dts-jest:pass:snap
R_propIs(Number, 'a');
// @dts-jest:pass:snap
R_propIs(Number)('a')(object);
// @dts-jest:pass:snap
R_propIs(Number, 'a', object);
