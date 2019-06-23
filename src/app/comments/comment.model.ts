export class Comment {
    commentor: string;
    message: String;
    time: Date;
    thumbnailUrl ? = '';
    replies?: Array<Comment> = [];
    replyRequested: boolean;
}
