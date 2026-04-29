import ICONS from "../icons/icons.js";
import lib from "../index.js";
import theme from "../theme/index.js";

export default function debug() {
    console.debug('Initializing "Thunderbird Enhancer"');
    console.debug("Theme loaded: ", theme);
    console.debug("Icons: ", ICONS);

    lib.interaction.mailList.onMessageSelectionChange((data) => {
        console.debug("Selected message's data: ", data);
    });

    console.debug("Client Information: ", window.frames.navigator);
    console.debug("Origin: ", window.origin);
}
