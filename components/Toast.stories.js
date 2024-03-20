import React from "react";
import Toast from "../stories/Toast";
import { fn } from "@storybook/test";

export default {
  title: "Toast",
  component: Toast,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "notification"],
      },
    },
    icon: {
      control: {
        type: "select",
        options: ["information", "warning", "error", "success"],
      },
    },
    text: { control: "text" },
    actionText: { control: "text" },
    showCloseButton: { control: "boolean" },
    showDivider: { control: "boolean" },
    onclick: fn(),
  },
  parameters: {
    layout: "centered",
  },
};

const Template = (args) => <Toast {...args}  />;

export const Information = Template.bind({});
Information.args = {
  toastType: "default",
  iconType: "information",
  text: "This is an information toast",
  showCloseButton: true,
  showDivider: true,
 
};

export const Warning = Template.bind({});
Warning.args = {
  toastType: "default",
  iconType: "warning",
  text: "This is a warning toast",
  showCloseButton: true,
  showDivider: false,
};

export const Error = Template.bind({});
Error.args = {
  toastType: "default",
  iconType: "error",
  text: "This is an error toast",
  showCloseButton: false,
  showDivider: true,
};

export const Success = Template.bind({});
Success.args = {
  toastType: "default",
  iconType: "success",
  text: "This is a success toast",
  actionText: "Undo",
  showCloseButton: true,
  showDivider: true,
};
