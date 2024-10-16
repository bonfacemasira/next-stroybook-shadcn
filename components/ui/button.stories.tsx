import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

import { action } from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
  title: "Components/ui/button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      description: "Button variants",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      description: "Button sizes",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "sm",
    disabled: false,
    onClick: action("Default click"),
    children: "Default button",
    className: "shadow-lg",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    size: "lg",
    disabled: false,
    onClick: action("Destructive button clicked"),
    children: "Destructive button",
    className: "shadow-lg",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    size: "sm",
    disabled: false,
    onClick: action("Outline button clicked"),
    children: "Outline button",
    className: "rounded-none shadow-lg",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    disabled: false,
    onClick: action("Secondary button clicked"),
    children: "Secondary button",
    className: "shadow-lg",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    size: "lg",
    disabled: false,
    onClick: action("Ghost button clicked"),
    children: "Ghost button",
    className: "shadow-lg",
  },
};
export const Link: Story = {
  args: {
    variant: "link",
    size: "lg",
    disabled: false,
    onClick: action("Link button clicked"),
    children: "Link button",
    className: "shadow-lg",
  },
};
