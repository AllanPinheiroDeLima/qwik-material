import {
  $,
  component$,
  Slot,
  useClientEffect$,
  useSignal,
  useStore,
  useStylesScoped$,
  useTask$,
  useWatch$
} from "@builder.io/qwik";
import buttonStyles from "./base.button.css?inline";
import elevatedStyles from "./button.elevated.css?inline";
import textStyles from "./button.text.css?inline";

interface Props {
  text: boolean
  class: string
  type: "text" | "elevated"
}

export const Button = component$((props: Partial<Props>) => {
  useStylesScoped$(buttonStyles);

  useStylesScoped$(textStyles);
  useStylesScoped$(elevatedStyles);

  const currentClass = useSignal("");

  useTask$(({ track }) => {
    const newType = track(() => props.type);

    if (newType === "text") {
      currentClass.value = "text";
    } else {
      currentClass.value = "elevated"
    }
  })

  const baseClasses = "text-labelLarge text-opacity-10"

  return (
    <button
      class={[baseClasses, currentClass.value, props.class]}
    >
      <Slot />
    </button>
  )
})