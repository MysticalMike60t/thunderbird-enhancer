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

        // info.selectedMessages is available because of the messagesRead permission
        // const page = await messenger.messages.continueList(null);
        const messages = info.selectedMessages?.messages;
        console.log("Messages: ", messages);

        if (!messages?.length) return;

        // Grab the author field from the first selected message
        // author is a mailbox string like: "Jane Doe <jane@example.com>"
        const author = messages[0].author;
        console.log("Author: ", author);

        // Extract just the email address part
        const match = author.match(/<(.+?)>/) || [null, author.trim()];
        console.log("Match: ", match);
        const emailAddress = match[1];
        console.log("Email Address: ", emailAddress);
        //const emailAddress = author;

        // Write to clipboard via a throwaway offscreen-style approach
        // (Thunderbird background scripts can use navigator.clipboard directly)
        await navigator.clipboard.writeText(emailAddress);

        // Optional: tiny notification so you know it worked
        //messenger.notifications.create({
        //  type: "basic",
        //  title: "Copied!",
        //  message: emailAddress,
        //  iconUrl: "icons/icon.png"
        //});
    });
}

const copyEmailAddress = {
    addContextMenuOption,
};

export default copyEmailAddress;
