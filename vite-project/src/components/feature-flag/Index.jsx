import ItemTree from "../item-tree/Index";
import DarkMode from "../toggle-dark-mode/DarkMode";
import TicTacToe from "../tic-tac-toe/TicTacToe";
import RandomColorGenerator from "../random-color-generator";
import Accordion from "../accordian";
import { FeatureFlagContext } from "./context";
import { useContext } from "react";
import QrCodeGenerator from "../qr-code/QrCode";

const FeatureFlags = () => {
    const {loading, enableFlags} = useContext(FeatureFlagContext);
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <DarkMode />,
        },
        {
            key: 'showTicTacToe',
            component: <TicTacToe />,
        },
        {
            key: 'randomColorGenerator',
            component: <RandomColorGenerator />,
        },
        {
            key: 'showAccordion',
            component: <Accordion />,
        },
        {
            key: 'qrCode',
            component: <QrCodeGenerator />
        }
    ]

    function checkEnabledFlags(key) {
        return enableFlags[key]
    }
  return (
    <div>
      <h1>Feature Flags</h1>
      {
        componentsToRender.map((component) => checkEnabledFlags(component.key) && component.component)
      }
    </div>
  );
};

export default FeatureFlags;
