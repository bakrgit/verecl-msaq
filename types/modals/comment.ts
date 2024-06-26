export interface Comment {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: {
    fullName: string;
    id: number;
    username: string;
  };
}
export interface Comments {
  comments: Comment[];
  limit: number;
  skip: number;
  total: number;
}
