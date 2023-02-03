import {component$, QwikIntrinsicElements, useStylesScoped$} from "@builder.io/qwik";
import CheckboxStyles from "./checkbox.css?inline";
import {Icon} from "../Icon/Icon";

interface Props {
  checked: boolean
}
type CheckboxProps = QwikIntrinsicElements["input"] & Props;

export const Checkbox = component$((props: Partial<CheckboxProps>) => {
  useStylesScoped$(CheckboxStyles);

  return (
    <div class="checkbox-container">
      <input
        {...props}
        class="appearance-none"
        checked={props.checked}
        type="checkbox"
      />
      <div class="icon pointer-events-none">
        <Icon icon="mdi:check" style={{margin: 0}} size="1.125rem"/>
      </div>
    </div>
  )
})