const StartSessionResponse = {
    success: true,
    message: 'Session initiated successfully'
}

const StatusSessionResponse = {
    success: true,
    state: 'CONNECTED',
    message: 'session_connected'
}

const RestartSessionResponse = {
    success: true,
    message: 'Restarted successfully'
}

const TerminateSessionResponse = {
    success: true,
    message: 'Logged out successfully'
}

const TerminateSessionsResponse = {
    success: true,
    message: 'Flush completed successfully'
}

const ForbiddenResponse = {
    success: false,
    error: 'Invalid API key'
}

const SessionInfo = {
    pushname: "Profile name",
    wid: {
        $ref: "#/definitions/ChatId",
    },
    me: {
        $ref: "#/definitions/ChatId",
    },
    platform: "iphone",
}

module.exports = {
    StartSessionResponse,
    StatusSessionResponse,
    RestartSessionResponse,
    TerminateSessionResponse,
    TerminateSessionsResponse,
    ForbiddenResponse,
    SessionInfo,
}