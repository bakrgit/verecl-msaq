// import { APIActionResponse } from "@/types";
//
// import { toast } from "react-toastify";
//
// interface ReturnType {
//   display: (response: APIActionResponse<any>) => void;
//   displayErrors: (response: APIActionResponse<any>) => boolean;
//   displaySuccess: (response: APIActionResponse<any>) => boolean;
// }
//
// export const useResponseToastHandler = (): ReturnType => {
//   const displayErrors = (response: APIActionResponse<any>): boolean => {
//     if (!response.error) {
//       return false;
//     }
//
//     toast.error(response.error.message);
//     return true;
//   };
//
//   const displaySuccess = (response: APIActionResponse<any>): boolean => {
//     const { data } = response;
//
//     if (!data?.message) {
//       return false;
//     }
//
//     toast.success(data.message.body);
//
//     return true;
//   };
//
//   const display = (response: APIActionResponse<any>) => {
//     displayErrors(response);
//     displaySuccess(response);
//   };
//
//   return {
//     display,
//     displayErrors,
//     displaySuccess
//   };
// };
