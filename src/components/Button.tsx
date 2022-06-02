import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
  disable?: boolean;
  height?: number;
}

interface MarkButtonProps {
  label: string;
  onClick?: () => void;
  height?: number;
  option?: { mark: string; bgColor: string };
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  onClick,
  bgColor,
  disable,
  height,
}: ButtonProps) => {
  const buttonStyles = {
    color: "#fff",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: bgColor ? bgColor : "gray",
    disable: disable ? disable : false,
    height: height ? height : 60,
  };
  return (
    <button style={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
};

export const MarkButton = ({
  label,
  onClick,
  height,
  option = {
    mark: "●",
    bgColor: "gray",
  },
}: MarkButtonProps) => {
  const buttonStyles = {
    color: "#fff",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: option.bgColor ? option.bgColor : "gray",
    height: height + "px",
  };
  return (
    <button style={buttonStyles} onClick={onClick}>
      {option.mark}
      {label}
    </button>
  );
};
