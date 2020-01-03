import React from "react";

type Props = {
  value: string | number;
};

const _SimpleLabel: React.FC<Props> = ({ value }) => (
  <span data-test="value">{value}</span>
);

export const SimpleLabel = (p: Props) => _SimpleLabel(p);
