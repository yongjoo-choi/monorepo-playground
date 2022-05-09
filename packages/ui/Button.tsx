import * as React from "react";
export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button style={{ padding: 8, background: "black", color: "white" }}>
      {children}
    </button>
  );
};
