// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-7-c-ii-17
description: >
    Array.prototype.every -'this' of 'callbackfn' is a Number object
    when T is not an object (T is a number primitive)
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;

        function callbackfn(val, idx, o) {
            accessed = true;
            return 5 === this.valueOf();
        }

        var obj = { 0: 11, length: 2 };

        return Array.prototype.every.call(obj, callbackfn, 5) && accessed;
    }
runTestCase(testcase);
