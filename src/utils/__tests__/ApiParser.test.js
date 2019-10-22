import { parseCategories } from "../ApiParser";

describe("ApiParser", () => {
  describe("parseCategories", () => {
    test("it returns a parsed array of categories", () => {
      const mockPayload = {
        categories: [
          {
            idCategory: "1",
            strCategory: "test",
            strCategoryThumb: "test",
            strCategoryDescription: "test"
          }
        ]
      };

      const actual = parseCategories(mockPayload);

      expect(actual[0].categoryId).toEqual("1");
      expect(actual[0].name).toEqual("test");
      expect(actual[0].thumbnail).toEqual("test");
      expect(actual[0].description).toEqual("test");
    });

    test("it returns null if no categories exist", () => {
      const actual = parseCategories({});
      expect(actual).toEqual(null);
    });
  });
});
