import test from "node:test";
import assert from "node:assert/strict";
import { getStatus } from "../src/status.js";

test("기본 상태는 READY", () => {
  assert.equal(getStatus(), "READY");
});
