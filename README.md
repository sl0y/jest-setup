# JEST SETUP

```js
// jest.setup.js:

import {expect} from '@jest/globals';
import withSetup from '@sloy/jest-setup';


expect.extend(withSetup);

```

```js

// plus.spec.js:

describe('function plus', () => {

  it.each([
    // result, ...args
    [2, 1, 1],
    [6, 2, 2, 2],
    [0],
  ])(
    'returns correct sum %p for provided %p',
    expect(plus).toMapExact,
  );

})

```
