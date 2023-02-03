import { Counter } from './components/counter/counter';
import {Button} from "./components/Button/Button";
import {$, component$, useStore, useStyles$} from "@builder.io/qwik";
import globalStyles from "./assets/global.css?inline";
import {Icon} from "./components/Icon/Icon";
import {Card} from "./components/Card/Card";
import {Checkbox} from "./components/Checkbox/Checkbox";

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

  const checkboxValue = useStore({
    checkbox: true
  })

  const handleChange = $((ev) => {
    checkboxValue.checkbox = ev.target.checked
  })

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body style={{ padding: "3rem" }}>
        {JSON.stringify(checkboxValue.checkbox)}

        <Checkbox onChange$={handleChange} checked={checkboxValue.checkbox} />
        <Card variant="filled" >
          <h2 class="display-medium">Play your songs</h2>
          <p class="body-large">From your library</p>
        </Card>
        <Button variant="tonal">
          <div q:slot="append:icon">
            <Icon icon="mdi:home" style={{ margin: 0 }} />
          </div>
          asioudasb
          <div>outradiv</div>
        </Button>
        <Counter />
      </body>
    </>
  );
});
