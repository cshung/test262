// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.2.1-11-3-s
description: >
    Function constructor having a formal parameter named 'eval' throws
    SyntaxError if function body is strict mode
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  

  try {
    Function('eval', '"use strict";');
	return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
