"use client";
import React, { ReactNode, createContext } from "react";

import { ToastContainer, toast as baseToast } from "react-toastify";
// @ts-ignore
import { ToastContainerProps } from "react-toastify/dist/types";

interface ProviderProps extends Omit<ToastContainerProps, "rtl"> {
  children: ReactNode;
  dir?: "rtl" | "ltr";
}

export const ToastContext = createContext<null>(null);

const ToastProvider: React.FC<ProviderProps> = ({ children, dir = "rtl", ...props }) => {
  return (
    <ToastContext.Provider value={null}>
      {children}

      <ToastContainer
        rtl={dir === "rtl"}
        position={dir === "rtl" ? baseToast.POSITION.TOP_LEFT : baseToast.POSITION.TOP_RIGHT}
        hideProgressBar={true}
        icon={false}
        closeButton={true}
        autoClose={5000}
        theme="light"
        {...props}
      />
    </ToastContext.Provider>
  );
};

export { ToastProvider };
