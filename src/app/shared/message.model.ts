export class Message {
    socketId: string;
    messageCount: number;
}

export class MessageAwaiting {
    id: number;
    text: string;
    read: string;
    userId: number;
}