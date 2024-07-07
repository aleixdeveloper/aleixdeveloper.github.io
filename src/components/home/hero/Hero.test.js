import { expect, test } from "vitest";
import { experimental_AstroContainer as AstroContainer } from "astro/container";
import Hero from "./Hero.astro";

/* test('Hero with slots', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Hero, {
    slots: {
      default: 'Hero content',
    },
  });

  expect(result).toContain('This is a card');
  expect(result).toContain('Hero content');
}); */

test("Hero with props", async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(Hero, {
    props: {
      name: "Hero name",
    },
  });

  expect(result).toContain("Hero name");
});
