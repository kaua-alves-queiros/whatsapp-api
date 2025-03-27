const ChatId = {
    server: "@c.us",
    user: "5511998765432",
    _serialized: "5511998765432@c.us"
}

const Chat = {
    id: {
        "$ref": "#/definitions/ChatId", // Reference to the ChatId definition
    },
    name: "Family Group",
    isReadOnly: false,
    unreadCount: 0,
    timestamp: 1743086789,
    archived: false,
    pinned: false,
    muteExpiration: -1
}

const GetChatsResponse = {
    success: true,
    chats: [
        { "$ref": "#/definitions/Chat" } // Array of Chat objects
    ],
}
const GetClassInfoResponse = {
    success: true,
    sessionInfo: {
        $ref: "#/definitions/SessionInfo"
    },
}

module.exports = {
    ChatId,
    Chat,
    GetChatsResponse,
    GetClassInfoResponse,
}