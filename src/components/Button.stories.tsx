import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, MarkButton } from "./Button";
import { withKnobs, text, radios, select } from "@storybook/addon-knobs";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [withKnobs],
} as ComponentMeta<typeof Button>;

// text("ラベル名入力フォームのラベル", "初期値")
export const Sample1: ComponentStory<typeof Button> = () => (
  <Button label={text("label", "button")} onClick={() => {}} />
);

const labels = {
  google: "google",
  apple: "apple",
  meta: "meta",
  amazon: "amazon",
};
const colors = { tomato: "tomato", lime: "limegreen" };
// radios = ラジオボタン
// select = セレクトボックス
export const Sample2: ComponentStory<typeof Button> = () => (
  <Button
    label={radios("label", labels, "button")}
    bgColor={select("background-color", colors, "tomato")}
    onClick={() => {}}
  />
);

export const Sample3: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
Sample3.args = {
  label: text("label", "button"),
  onClick: () => {},
};
Sample3.argTypes = {
  // label: { control: { type: "array", separator: ["aaa", "bbb"] } },
  bgColor: { control: "color" },
  // bgColor: { control: { type: "object", options: colors } },
  disable: { control: "boolean" },
  // height: { control: { type: "number", min: 10, max: 200 } },
  height: { control: { type: "range", min: 10, max: 200, step: 10 } },
};

const marks = {
  default: { mark: "●", bgColor: "gray" },
  blue: { mark: "♠︎", bgColor: "blue" },
  red: { mark: "♥", bgColor: "red" },
};
export const Sample4: ComponentStory<typeof MarkButton> = (args) => (
  <MarkButton {...args} />
);
Sample4.args = {
  label: text("label", "button"),
  onClick: () => {},
};
Sample4.argTypes = {
  // label: { control: { type: "array", separator: ["aaa", "bbb"] } },
  option: { control: { type: "radio", options: marks } },
};
