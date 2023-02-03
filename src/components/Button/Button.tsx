import {
  component$,
  Slot,
  useSignal,
  useStylesScoped$,
  useTask$,
  QwikIntrinsicElements
} from "@builder.io/qwik";
import buttonStyles from "./base.button.css?inline";
import elevatedStyles from "./button.elevated.css?inline";
import textStyles from "./button.text.css?inline";
import filledStyles from "./button.filled.css?inline";
import tonalStyles from "./button.tonal.css?inline";
import outlinedStyles from "./button.outlined.css?inline";
import iconStyles from "./button.icon.css?inline";
import {Icon} from "../Icon/Icon";

interface Props {
  variant?: "text" | "elevated" | "filled" | "tonal" | "outlined"
  icon?: string
  class?: string
}

type ButtonProps = QwikIntrinsicElements["button"] & Props;

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(buttonStyles);
  useStylesScoped$(textStyles);
  useStylesScoped$(elevatedStyles);
  useStylesScoped$(filledStyles);
  useStylesScoped$(tonalStyles);
  useStylesScoped$(outlinedStyles);
  useStylesScoped$(iconStyles);

  const currentClass = useSignal<Props["variant"]>("elevated");

  useTask$(({ track }) => {
    const variant = track(() => props.variant);

    if (!variant) return;

    currentClass.value = variant;
  })

  return (
    <button
      class={[currentClass.value, props.class, props.icon && "icon-button"]}
    >
      {
        props.icon
        ? <Icon icon={props.icon} />
        :
          <>
            <div class="appended">
              <Slot name="append:icon" />
            </div>
            <Slot/>
          </>
      }
    </button>
  )
})