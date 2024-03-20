import React from "react";
import { fn } from "@storybook/test";
import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  argTypes: {
    icon: {
      control: {
        type: "select",
        options: ["information", "warning", "error", "success", "delete"],
      },
    },
    text: { control: "text" },
    actionText: { control: "text" },
    showCloseButton: { control: "boolean" },
    showDivider: { control: "boolean" },
    timer: { control: { type: "radio", options: [3000, 5000, null] } },
  },
  args: { onClick: fn() },
};

const Template = (args) => <Toast {...args} />;

export const Information = Template.bind({});
Information.args = {
  type: "notification",

  icon: "information",
  text: "Request Granted",
  showCloseButton: true,
  showDivider: true,
};

export const Warning = Template.bind({});
Warning.args = {
  type: "notification",

  icon: "warning",
  text: "Reaching limit",
  showCloseButton: true,
  showDivider: true,
};

export const Error = Template.bind({});
Error.args = {
  type: "notification",
  icon: "error",
  text: "Error Occured",
  showCloseButton: true,
  showDivider: true,
};

export const Success = Template.bind({});
Success.args = {
  type: "notification",

  icon: "success",
  text: "Sent Successfully",
  actionText: "Undo",
  showCloseButton: true,
  showDivider: true,
};

export const Delete = Template.bind({});
Delete.args = {
  type: "notification",

  icon: "delete",
  text: "Deleted Successfully",
  actionText: "Undo",
  showCloseButton: true,
  showDivider: true,
};
