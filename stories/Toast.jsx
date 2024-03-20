"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Info,
  WarningCircle,
  Warning,
  CheckCircle,
  X,
  Trash,
} from "@phosphor-icons/react";

const Toast = ({
  type,
  icon,
  text,
  actionText,
  showCloseButton,
  showDivider,
  onClick,
  timer,
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (timer === 3000 || timer === 5000) {
      const timeOut = setTimeout(() => setShow(false), timer);
      return () => clearTimeout(timeOut);
    }
  }, [timer]);

  const renderIcon = (icon) => {
    switch (icon) {
      case "information":
        return <Info size={24} color="#2196f3" weight="fill" />;
      case "warning":
        return <WarningCircle size={24} color="#F2CD36" weight="fill" />;
      case "error":
        return <Warning size={24} color="#FA5252" weight="fill" />;
      case "success":
        return <CheckCircle size={24} color="#21ad64" />;
      case "delete":
        return <Trash size={24} color="#9d9f9d" />;

      default:
        return null;
    }
  };

  const renderActionButton = () => {
    if (actionText) {
      return (
        <button
          className="bg-green-600 text-sm rounded-lg p-1"
          onClick={() => {
            onClick && onClick();
            setShow(false);
          }}
        >
          <span className="p-1">{actionText}</span>
        </button>
      );
    }
  };

  const renderCloseButton = () => {
    if (showCloseButton) {
      return (
        <button onClick={() => setShow(false)}>
          <X size={24} color="#9d9f9d" />
        </button>
      );
    }
  };

  const renderDivider = () => {
    if (showDivider) {
      return <span className="text-gray-500">|</span>;
    }
  };

  <Trash size={88} color="#9d9f9d" />;
  return (
    <div>
      {show ? (
        <div className="flex items-center gap-3 py-2 ">
          <div className="rounded-lg bg-gray-900 p-4 py-2 text-white flex items-center gap-3 w-fit h-12">
            {type === "notification" ? renderIcon(icon) : null}
            <p className="min-w-48">{text}</p>
            {renderDivider()}
            {renderActionButton()}
            {renderCloseButton()}
          </div>
        </div>
      ) : null}
    </div>
  );
};

Toast.propTypes = {
  type: PropTypes.oneOf(["default", "notification"]),
  icon: PropTypes.oneOf([
    "information",
    "warning",
    "error",
    "success",
    "delete",
  ]),
  timer: PropTypes.oneOf([3000, 5000, null]),
  text: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  showCloseButton: PropTypes.bool,
  showDivider: PropTypes.bool,
  onClick: PropTypes.func,
};

Toast.defaultProps = {
  type: "default",
  icon: null,
  actionText: null,
  showCloseButton: true,
  showDivider: true,
  onClick: undefined,
};

export default Toast;
