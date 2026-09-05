import test from "node:test";
import assert from "node:assert/strict";
import { MAX_FILE_SIZE, validateFile } from "./script.js";

function file(name, size) {
  return { name, size };
}

test("accepts CSV, TSV, and TXT files", () => {
  assert.equal(validateFile(file("data.csv", 2 * 1024 * 1024)), "");
  assert.equal(validateFile(file("data.tsv", 2 * 1024 * 1024)), "");
  assert.equal(validateFile(file("notes.txt", 2 * 1024 * 1024)), "");
});

test("rejects unsupported file types", () => {
  assert.equal(validateFile(file("photo.png", 2 * 1024 * 1024)), "Only CSV, TSV, or TXT files are supported");
});

test("rejects files larger than 25MB", () => {
  assert.equal(validateFile(file("large.csv", MAX_FILE_SIZE + 1)), "File is too large (max 25MB)");
});

test("rejects an empty selection", () => {
  assert.equal(validateFile(null), "Please select a file first");
});