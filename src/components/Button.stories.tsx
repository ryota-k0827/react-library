import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Sample: ComponentStory<typeof Button> = () => (
  <Button label="テキスト" onClick={() => {}} />
);
