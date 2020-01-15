import React from "react";

export type NormalButtonProps = {
  onClick: () => void;
  children: string | number;
};

export const NormalButton: React.FC<NormalButtonProps> = ({
  onClick,
  children
}) => (
  <button data-test="foo" type="button" onClick={onClick}>
    {children} 😇 🇯🇵 🍔
  </button>
);
