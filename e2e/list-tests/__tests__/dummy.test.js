/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

it("isn't actually run", () => {
  // (because it is only used for --listTests)
  expect(true).toBe(false);
});
