import ICONS from "../../lib/icons.js";

function addContextMenuOption() {
    if (typeof messenger === "undefined") {
        console.error('Variable "messenger" is not available.');
    }

    messenger.menus.create(
        {
            id: "copy-sender-email",
            title: "Copy sender's email address",
            parentId: "thunderbird-enhancer",
            contexts: ["message_list"],
            icons: {
                16: ICONS.email_address,
            },
        },
        () => {
            console.log(
                "Menu created, last error:",
                messenger.runtime.lastError,
            );
        },
    );

    messenger.menus.onClicked.addListener(async (info, tab) => {
        if (info.menuItemId !== "copy-sender-email") return;

        const messages = info.selectedMessages?.messages;
        console.log("Messages: ", messages);

        if (!messages?.length) return;

        const author = messages[0].author;
        console.log("Author: ", author);

        const match = author.match(/<(.+?)>/) || [null, author.trim()];
        console.log("Match: ", match);
        const emailAddress = match[1];
        console.log("Email Address: ", emailAddress);

        await navigator.clipboard.writeText(emailAddress);
    });
}

const copyEmailAddress = {
    addContextMenuOption,
};

export default copyEmailAddress;
