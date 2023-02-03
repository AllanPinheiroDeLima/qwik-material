import {
  component$,
  Slot,
  useSignal,
  useStylesScoped$,
  useTask$,
} from "@builder.io/qwik";
import buttonStyles from "./base.button.css?inline";
import elevatedStyles from "./button.elevated.css?inline";
import textStyles from "./button.text.css?inline";
import filledStyles from "./button.filled.css?inline";
import tonalStyles from "./button.tonal.css?inline";
import outlinedStyles from "./button.outlined.css?inline";

interface Props {
  text: boolean
  class: string
  variant: "text" | "elevated" | "filled" | "tonal" | "outlined"
  icon: string
}

export const Button = component$((props: Partial<Props>) => {
  useStylesScoped$(buttonStyles);
  useStylesScoped$(textStyles);
  useStylesScoped$(elevatedStyles);
  useStylesScoped$(filledStyles);
  useStylesScoped$(tonalStyles);
  useStylesScoped$(outlinedStyles);

  const currentClass = useSignal<Props["variant"]>("elevated");

  useTask$(({ track }) => {
    const variant = track(() => props.variant);

    if (!variant) return;

    currentClass.value = variant;
  })

  return (
    <button
      class={[currentClass.value, props.class]}
    >
      <Slot name="append" />
      <Slot/>
    </button>
  )
})