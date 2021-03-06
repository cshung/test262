// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 13.2-2-s
description: >
    StrictMode - A TypeError is thrown when a strict mode code writes
    to properties named 'caller' of function instances.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            var foo = function () {
            }
            foo.caller = 20;
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
