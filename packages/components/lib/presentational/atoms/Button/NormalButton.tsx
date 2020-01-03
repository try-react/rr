import React from "react";

export type Props = {
  onClick: () => void;
  txt: string | number;
};

const _NormalButton: React.FC<Props> = ({ onClick, txt }) => (
  <button data-test="foo" type="button" onClick={onClick}>
    {txt}
  </button>
);

export const NormalButton = (p: Props) => _NormalButton(p);
