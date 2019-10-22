import { getVideoId } from "../Youtube";

describe("Youtube", () => {
  describe("getVideoId", () => {
    test("it returns a parsed array of categories", () => {
      const mockVideoUrl = "https://www.youtube.com/watch?v=g5oCDoyxbBk";
      const actual = getVideoId(mockVideoUrl);

      expect(actual).toEqual("g5oCDoyxbBk");
    });
  });
});
