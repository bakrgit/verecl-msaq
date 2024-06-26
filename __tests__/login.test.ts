import { renderHook, act } from "@testing-library/react-hooks";
import { useLoginUser } from "@/app/[lang]/login/hooks/login.hook";
import { loginUser } from "@/server_actions/auth/login-action";
import { useAuthContext } from "@/contextes/AuthContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

jest.mock("@/server_actions/auth/login-action");
jest.mock("@/contextes/AuthContext");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn()
}));
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

const mockLoginUser = loginUser as jest.Mock;
const mockUseAuthContext = useAuthContext as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe("useLoginUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseAuthContext.mockReturnValue({
      login: jest.fn(),
      logout: jest.fn(),
      user: null
    });
    mockUseRouter.mockReturnValue({
      push: jest.fn()
    });
  });

  it("should handle successful login", async () => {
    mockLoginUser.mockResolvedValue({ data: { token: "mockToken" } });
    const { result, waitForNextUpdate } = renderHook(() => useLoginUser());

    await act(async () => {
      result.current.onSubmit({ username: "test", password: "password" });
    });

    expect(mockLoginUser).toHaveBeenCalledWith({ username: "test", password: "password" });
    await waitForNextUpdate();
    expect(result.current.isLoadingLogin).toBe(false);
    expect(mockUseAuthContext().login).toHaveBeenCalledWith({ token: "mockToken" });
    expect(toast.success).toHaveBeenCalledWith("Login Success");
    expect(mockUseRouter().push).toHaveBeenCalledWith("/");
  });

  it("should handle login error", async () => {
    mockLoginUser.mockResolvedValue({ error: "Invalid credentials" });
    const { result, waitForNextUpdate } = renderHook(() => useLoginUser());

    await act(async () => {
      result.current.onSubmit({ username: "test", password: "password" });
    });

    expect(mockLoginUser).toHaveBeenCalledWith({ username: "test", password: "password" });
    await waitForNextUpdate();
    expect(result.current.isLoadingLogin).toBe(false);
    expect(mockUseAuthContext().logout).toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith("Invalid credentials");
  });

  it("should redirect if user is already logged in", () => {
    mockUseAuthContext.mockReturnValueOnce({
      login: jest.fn(),
      logout: jest.fn(),
      user: { token: "mockToken" }
    });

    renderHook(() => useLoginUser());

    expect(mockUseRouter().push).toHaveBeenCalledWith("/");
  });
});
