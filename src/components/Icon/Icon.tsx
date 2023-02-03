import {component$, useClientEffect$} from "@builder.io/qwik";

interface Props {
  size?: number | string
  icon: string
  style?: any
}

export const Icon = component$((props: Props) => {
  useClientEffect$(() => {
    import("iconify-icon")
  })

  const style = {
    fontSize: props.size || "1.5rem",
    color: "currentColor",
    margin: ".5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...props.style
  }

  return <iconify-icon style={style} icon={props.icon}></iconify-icon>
})