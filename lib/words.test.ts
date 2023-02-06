import { beforeEach, describe, expect, it, vi, MockedFunction } from "vitest";
import { fetch } from "./fetch";
import { noTags, searchResults, searchResultWord } from "./fixtures";
import { clearCache, getPhrase } from "./words";

vi.mock("./fetch", () => {
  return {
    fetch: vi.fn(),
  };
});

const mockFetch = fetch as MockedFunction<any>;

describe("scraping", () => {
  beforeEach(() => {
    clearCache();
    mockFetch.mockClear();
  });

  it("works with a kana only that requires search", async () => {
    mockFetch.mockResolvedValueOnce({
      status: 404,
    });
    mockFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(searchResults),
    });
    mockFetch.mockResolvedValueOnce({
      status: 200,
      text: () => Promise.resolve(searchResultWord),
    });
    const res = await getPhrase("まっすぐ");
    expect(mockFetch).toHaveBeenCalledTimes(3);
    expect(res).toEqual({
      text: "まっすぐ",
      reading: null,
      meanings: [
        {
          definitions: ["straight (ahead)", "direct", "upright", "erect"],
          notes: "Usually written using kana alone",
          tags: ["Na-adjective (keiyodoshi)", "Adverb (fukushi)", "Noun"],
        },
        {
          definitions: ["straightforward", "honest", "frank"],
          notes: "Usually written using kana alone",
          tags: ["Na-adjective (keiyodoshi)", "Noun"],
        },
      ],
      parts: [
        {
          text: "ま",
          reading: null,
        },
        {
          text: "っ",
          reading: null,
        },
        {
          text: "す",
          reading: null,
        },
        {
          text: "ぐ",
          reading: null,
        },
      ],
    });
  });

  it("works with a kana only with an existing page", async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      text: () => Promise.resolve(noTags),
    });
    const res = await getPhrase("さあ");
    expect(mockFetch).toHaveBeenCalledOnce();
    expect(res).toEqual({
      text: "さあ",
      reading: null,
      meanings: [
        {
          definitions: ["come (on)", "come now", "come along", "here"],
          tags: [],
          notes: "used to urge or encourage others",
        },
        {
          definitions: ["all right", "right", "okay", "now", "here goes"],
          tags: [],
          notes: "indicates resolve",
        },
        {
          definitions: ["well", "hmm", "uh", "let's see", "I'm not sure"],
          tags: [],
          notes: "indicates uncertainty or hesitation",
        },
        {
          definitions: ["here", "now", "there (we go)", "ah", "oh"],
          tags: [],
          notes: "said when something arrives, starts, finishes, etc.",
        },
        {
          definitions: ["about that, ...", "actually, ..."],
          tags: [],
          notes: "used when interrupting someone",
        },
      ],
      parts: [
        { text: "さ", reading: null },
        { text: "あ", reading: null },
      ],
    });
  });
});
