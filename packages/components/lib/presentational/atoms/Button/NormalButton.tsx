import React from "react";

export type Props = {
  onClick: () => void;
  children: string | number;
};

const _NormalButton: React.FC<Props> = ({ onClick, children }) => (
  <button data-test="foo" type="button" onClick={onClick}>
    {children}
  </button>
);

export const NormalButton = (p: Props) => _NormalButton(p);
