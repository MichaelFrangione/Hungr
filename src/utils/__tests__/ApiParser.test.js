import {
  parseCategories,
  parseCategory,
  parseMeals,
  getVideoId
} from "../ApiParser";

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

  describe("parseCategory", () => {
    test("it returns an parsed array of meals", () => {
      const mockPayload = {
        meals: [
          {
            idMeal: "1",
            strMealThumb: "test",
            strMeal: "test"
          }
        ]
      };

      const actual = parseCategory(mockPayload);

      expect(actual[0].mealId).toEqual("1");
      expect(actual[0].name).toEqual("test");
      expect(actual[0].thumbnail).toEqual("test");
    });

    test("it returns null if no categories exist", () => {
      const actual = parseCategory({});
      expect(actual).toEqual(null);
    });
  });

  describe("parseMeals", () => {
    test("it returns an array of full meal objects", () => {
      const mockPayload = {
        meals: [
          {
            idMeal: "12345",
            strMeal: "test",
            strDrinkAlternate: null,
            strCategory: "test",
            strArea: "British",
            strInstructions: "test",
            strMealThumb: "test",
            strTags: "test,test",
            strYoutube: "https://www.youtube.com/watch?v=test1234567",
            strIngredient1: "Olive Oil",
            strIngredient2: "Butter",
            strIngredient3: "",
            strIngredient4: "",
            strIngredient5: "",
            strIngredient6: "",
            strIngredient7: "",
            strIngredient8: "",
            strIngredient9: "",
            strIngredient10: "",
            strIngredient11: "",
            strIngredient12: "",
            strIngredient13: "",
            strIngredient14: "",
            strIngredient15: "",
            strIngredient16: "",
            strIngredient17: "",
            strIngredient18: "",
            strIngredient19: "",
            strIngredient20: "",
            strMeasure1: "2 tbs",
            strMeasure2: "25g",
            strMeasure3: "",
            strMeasure4: "",
            strMeasure5: "",
            strMeasure6: "",
            strMeasure7: "",
            strMeasure8: "",
            strMeasure9: "",
            strMeasure10: "",
            strMeasure11: "",
            strMeasure12: "",
            strMeasure13: "",
            strMeasure14: "",
            strMeasure15: "",
            strMeasure16: "",
            strMeasure17: "",
            strMeasure18: "",
            strMeasure19: "",
            strMeasure20: "",
            strSource: "",
            dateModified: null
          }
        ]
      };

      const actual = parseMeals(mockPayload);
      expect(actual[0].ingredients).toEqual([
        { ingredient: "Olive Oil", measurement: "2 tbs" },
        { ingredient: "Butter", measurement: "25g" }
      ]);
      expect(actual[0].mealId).toEqual("12345");
      expect(actual[0].name).toEqual("test");
      expect(actual[0].category).toEqual("test");
      expect(actual[0].thumbnail).toEqual("test");
      expect(actual[0].country).toEqual("British");
      expect(actual[0].tags).toEqual(["test", "test"]);
      expect(actual[0].videoId).toEqual("test1234567");
    });

    test("it returns null if no categories exist", () => {
      const actual = parseMeals({});
      expect(actual).toEqual(null);
    });
  });

  describe("Youtube", () => {
    describe("getVideoId", () => {
      test("it returns the video id from the provided url", () => {
        const mockVideoUrl = "https://www.youtube.com/watch?v=test1234567";
        const actual = getVideoId(mockVideoUrl);

        expect(actual).toEqual("test1234567");
      });

      test("it returns the video id from the provided url with a param at the end", () => {
        const mockVideoUrl =
          "https://www.youtube.com/watch?v=test1234567&test=test";
        const actual = getVideoId(mockVideoUrl);

        expect(actual).toEqual("test1234567");
      });

      test("it returns the video id from the provided shorted youtube url", () => {
        const mockVideoUrl = "http://youtu.be/test1234567";
        const actual = getVideoId(mockVideoUrl);

        expect(actual).toEqual("test1234567");
      });

      test("it returns null if provided an invalid youtube url", () => {
        const mockVideoUrl = "http://youtub.com/test1234567";
        const actual = getVideoId(mockVideoUrl);

        expect(actual).toBeUndefined();
      });
    });
  });
});
