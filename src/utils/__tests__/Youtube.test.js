import { getVideoId } from "../Youtube";

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
