export class Message {
    socketId: string;
    messageCount: number;
}

export class MessageAwaiting {
    id: number;
    text: string;
    hasRead: string;
    userId: number;
    createdOn: string;
}