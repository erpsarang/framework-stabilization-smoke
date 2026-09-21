import test from "node:test";
import assert from "node:assert/strict";
import { getStatus, getStatusMessage } from "../src/status.js";

test("기본 상태는 READY", () => {
  assert.equal(getStatus(), "READY");
});

test("표시 문구는 시스템 준비 완료를 포함하고 기존 상태 코드를 유지한다", () => {
  assert.equal(getStatusMessage(), "READY - 시스템 준비 완료");
  assert.equal(getStatus(), "READY");
});
