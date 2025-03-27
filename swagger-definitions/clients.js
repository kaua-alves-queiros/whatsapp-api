const ChatId = {
    type: "object",
    properties: {
        server: {
            type: "string",
            example: "@c.us", // Example of a server identifier (e.g., WhatsApp identifier)
            description: "This represents the server identifier, such as '@c.us' for WhatsApp."
        },
        user: {
            type: "string",
            example: "5511998765432", // Example: Brazilian phone number format
            description: "This represents a user's phone number. In this example: 'ccsspppppppp', where 'cc' is country code, 'ss' is state code, and 'pp' is the phone number without the additional '9' (specific to Brazilian numbers)."
        },
        _serialized: {
            type: "string",
            example: "5511998765432@c.us", // Complete serialized value as a string
            description: "Serialized representation of the user’s phone number along with the server identifier."
        }
    }
}

const Chat = {
    type: "object",
    properties: {
        id: {
            type: "object",
            "$ref": "#/definitions/ChatId", // Reference to the ChatId definition
            description: "This is the unique identifier of the chat, which includes the server and user details."
        },
        name: {
            type: "string",
            example: "Family Group", // Example chat name
            description: "The name of the chat, such as a group chat's name."
        },
        isReadOnly: {
            type: "boolean",
            example: false,
            description: "Indicates if the chat is read-only."
        },
        unreadCount: {
            type: "integer",
            example: 0,
            description: "The number of unread messages in the chat."
        },
        timestamp: {
            type: "integer",
            example: 1743086789,
            description: "The timestamp of the last update (Unix Epoch format)."
        },
        archived: {
            type: "boolean",
            example: false,
            description: "Indicates if the chat is archived."
        },
        pinned: {
            type: "boolean",
            example: false,
            description: "Indicates if the chat is pinned."
        },
        muteExpiration: {
            type: "integer",
            example: -1,
            description: "The expiration timestamp for mute (or -1 for permanent mute)."
        }
    }
}

const GetChatsResponse = {
    type: "object",
    properties: {
      success: {
        type: "boolean",
        example: true, // Example of success response as a boolean value
        description: "Indicates whether the request was successful or not."
      },
      chats: {
        type: "array",
        items: {
          "$ref": "#/definitions/Chat", // Array of Chat objects
          description: "A list of chat objects returned in the response."
        },
        description: "A collection of chat details returned in the API response."
      }
    }
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