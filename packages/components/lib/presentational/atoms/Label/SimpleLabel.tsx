import React from "react";

export type SimpleLabelProps = {
  value: string | number;
};

export const SimpleLabel: React.FC<SimpleLabelProps> = ({ value }) => (
  <span data-test="value">{value}</span>
);
