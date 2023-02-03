import {component$, Slot, useStylesScoped$} from "@builder.io/qwik";
import BaseCardStyles from "./card.base.css?inline";
import ElevatedCardStyles from "./card.elevated.css?inline";
import FilledCardStyles from "./card.filled.css?inline";
import OutlinedCardStyles from "./card.outlined.css?inline";

interface Props {
  variant: "elevated" | "filled" | "outlined"
}

export const Card = component$((props: Props) => {
  useStylesScoped$(BaseCardStyles);
  useStylesScoped$(ElevatedCardStyles);
  useStylesScoped$(FilledCardStyles);
  useStylesScoped$(OutlinedCardStyles);

  return (
    <div class={["card", props.variant]}>
      <Slot />
    </div>
  )
})