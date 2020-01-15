import React from "react";

export type NormalButtonProps = {
  /**
   * おしてくり
   */
  onClick: () => void;

  /**
   * 中身
   */
  children: string | number;
};

/**
 *
 * 押せば幸せ 👇
 * 肩こり解消 🦐
 *
 */
const NormalButton: React.FC<NormalButtonProps> = ({ onClick, children }) => (
  <button data-test="foo" type="button" onClick={onClick}>
    ★ {children} (👀👀 ふつーのぼたん 👀👀)
  </button>
);

export default NormalButton;
