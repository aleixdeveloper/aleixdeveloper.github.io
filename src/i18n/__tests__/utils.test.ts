import { assert, expect, test } from "vitest";
import { extractLanguageAndRoute } from "../utils";
import { LANGUAGES } from "../index";

const cases = [
  ["/", [LANGUAGES.EN, ""]],
  ["/projects", [LANGUAGES.EN, "projects"]],
  ["/ca/", [LANGUAGES.CAT, ""]],
  ["/ca", [LANGUAGES.CAT, ""]],
  ["/ca/projects/", [LANGUAGES.CAT, "projects"]],
  ["/es", [LANGUAGES.ES, ""]],
  ["/es/", [LANGUAGES.ES, ""]],
  ["/es/projects", [LANGUAGES.ES, "projects"]],
];

test.each(cases)("getDataFromPath(%s) -> %o", (input, expected) => {
  expect(extractLanguageAndRoute(input as string)).toStrictEqual(expected);
});
