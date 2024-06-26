import { renderHook, act } from "@testing-library/react-hooks";
import { useComments } from "@/app/[lang]/comments/hooks/comments.hook";
import { useCommentsContext } from "@/contextes/CommentsContext";
import { toast } from "react-toastify";

jest.mock("@/server_actions/comments/comment-action");
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

const mockPostComment = useCommentsContext as jest.Mock;

describe("useComment", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handle successful comment post", async () => {
    mockPostComment.mockResolvedValue({ data: { message: "Comment posted" } });
    // @ts-ignore
    const { result, waitForNextUpdate } = renderHook(() => useComments());

    await act(async () => {
      result.current.onSubmit({ comment: "Nice post!" });
    });

    expect(mockPostComment).toHaveBeenCalledWith({ comment: "Nice post!" });
    await waitForNextUpdate();
    // @ts-ignore
    expect(result.current.isLoadingComment).toBe(false);
    expect(toast.success).toHaveBeenCalledWith("Comment posted");
  });

  it("should handle comment post error", async () => {
    mockPostComment.mockResolvedValue({ error: "Failed to post comment" });
    // @ts-ignore
    const { result, waitForNextUpdate } = renderHook(() => useComments());

    await act(async () => {
      result.current.onSubmit({ comment: "Nice post!" });
    });

    expect(mockPostComment).toHaveBeenCalledWith({ comment: "Nice post!" });
    await waitForNextUpdate();
    // @ts-ignore
    expect(result.current.isLoadingComment).toBe(false);
    expect(toast.error).toHaveBeenCalledWith("Failed to post comment");
  });
});
