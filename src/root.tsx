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
        <Button type="outlined">
          <div q:slot="append">
            do slot
          </div>
          asioudasb
          <div>outradiv</div>
        </Button>
        <Counter />
      </body>
    </>
  );
});
