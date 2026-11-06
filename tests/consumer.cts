import * as api from '@lp-labs/json-pointer-segment-codec';
import { escapePointerSegment } from '@lp-labs/json-pointer-segment-codec';
console.log(escapePointerSegment('a/b~c'));
// @ts-expect-error invalid argument must be rejected by declarations
api.escapePointerSegment(5);
