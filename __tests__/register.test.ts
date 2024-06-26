import { renderHook, act } from "@testing-library/react-hooks";
import { useRegisterForm } from "@/app/[lang]/register/hooks/register.hook";
import { loginUser } from "@/server_actions/auth/login-action";
import { toast } from "react-toastify";

jest.mock("@/server_actions/auth/register-action");
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

const mockRegisterUser = loginUser as jest.Mock;

describe("useRegisterUser", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should handle successful registration", async () => {
    mockRegisterUser.mockResolvedValue({ data: { token: "mockToken" } });
    const { result, waitForNextUpdate } = renderHook(() => useRegisterForm());

    await act(async () => {
      result.current.onSubmit({ email: "", firstName: "", lastName: "", username: "test", password: "password" });
    });

    expect(mockRegisterUser).toHaveBeenCalledWith({ username: "test", password: "password" });
    await waitForNextUpdate();
    expect(result.current.isLoadingRegister).toBe(false);
    expect(toast.success).toHaveBeenCalledWith("Registration Success");
  });

  it("should handle registration error", async () => {
    mockRegisterUser.mockResolvedValue({ error: "Invalid credentials" });
    const { result, waitForNextUpdate } = renderHook(() => useRegisterForm());

    await act(async () => {
      result.current.onSubmit({ email: "", firstName: "", lastName: "", username: "test", password: "password" });
    });

    expect(mockRegisterUser).toHaveBeenCalledWith({ username: "test", password: "password" });
    await waitForNextUpdate();
    expect(result.current.isLoadingRegister).toBe(false);
    expect(toast.error).toHaveBeenCalledWith("Invalid credentials");
  });
});
