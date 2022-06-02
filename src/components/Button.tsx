import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  bgColor?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, onClick, bgColor }: ButtonProps) => {
  const buttonStyles = {
    color: "#fff",
    padding: "8px",
    borderRadius: "8px",
    backgroundColor: bgColor ? bgColor : "gray",
  };
  return (
    <button style={buttonStyles} onClick={onClick}>
      {label}
    </button>
  );
};
