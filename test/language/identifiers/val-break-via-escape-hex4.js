// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.6-4
description: >
    7.6 - SyntaxError expected: reserved words used as Identifier
    Names in UTF8: break (break)
negative: SyntaxError
---*/

var \u0062\u0072\u0065\u0061\u006b = 123;;
