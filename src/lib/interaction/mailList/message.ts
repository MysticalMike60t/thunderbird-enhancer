export function onMessageSelectionChange(
    callback: (data: FullMessageData[]) => void,
) {
    messenger.mailTabs.onSelectedMessagesChanged.addListener(
        async (tab, selectedMessages) => {
            const results = await Promise.all(
                selectedMessages.messages.map(async (message) => ({
                    header: message,
                    full: await messenger.messages.getFull(message.id),
                    attachments: await messenger.messages.listAttachments(
                        message.id,
                    ),
                    rawHeaders: (await messenger.messages.getFull(message.id))
                        .headers,
                })),
            );
            callback(results);
        },
    );
}
