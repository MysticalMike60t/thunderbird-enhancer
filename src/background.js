import theme from "./lib/theme.js";
import context_menu from "./context-menu/index.js";
import ICONS from "./lib/icons.js";

console.debug('Initializing "Thunderbird Enhancer"');
console.debug("Theme loaded: ", theme);
console.debug("Icons: ", ICONS);

messenger.menus.create({
    id: "thunderbird-enhancer",
    title: "Thunderbird Enhancer",
    contexts: ["message_list"],
});

context_menu.copyEmailAddress.addContextMenuOption();
