import { Counter } from './components/counter/counter';
import {Button} from "./components/Button/Button";
import {$, component$, useStore, useStyles$} from "@builder.io/qwik";
import globalStyles from "./assets/global.css?inline";

export default component$(() => {
  useStyles$(globalStyles);

  const buttonStore = useStore({
    type: "elevated"
  })

  const toggleType = $(() => {
    if (buttonStore.type == "elevated") {
      buttonStore.type = "text"
    } else {
      buttonStore.type = "elevated"
    }
  })

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <div class="display-large">meu item</div>
        <button onClick$={toggleType}>change button</button>
        <Button type={buttonStore.type}>My button</Button>
        <Counter />
      </body>
    </>
  );
});
