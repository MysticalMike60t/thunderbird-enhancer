declare interface FullMessageData {
    header: messenger.messages.MessageHeader;
    full: messenger.messages.MessagePart;
    attachments: messenger.messages.MessageAttachment[];
    rawHeaders: Record<string, string[]> | undefined;
}
