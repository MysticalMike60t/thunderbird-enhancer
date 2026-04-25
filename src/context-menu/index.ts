import copyEmailAddress from "./copy-email-address/copy-email-address.js";

const context_menu = {
    init() {
        messenger.menus.create({
            id: "thunderbird-enhancer",
            title: "Thunderbird Enhancer",
            contexts: ["message_list"],
        });

        copyEmailAddress.addContextMenuOption();
    },
    copyEmailAddress,
};

export default context_menu;
