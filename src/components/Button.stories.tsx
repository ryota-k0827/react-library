import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
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
