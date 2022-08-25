export interface IDelete {
  url: string;
  body?: any;
}

export interface IPost extends IDelete {
  body?: string;
}

export type IPatch = IPost;

export type IPut = IPost;

export interface IGet extends IDelete {
  query?: Record<string, any>;
}

export interface IResponse<D> {
  data?: D;
  code?: number;
  message?: string;
}

export interface IRegister {
  email: string;
  password: string;
}

export interface IUpdateUser {
  fullName: string;
  email: string;
  phone: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResetPassword {
  userId: string;
  password: string;
  token: string;
}

interface IDocument {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUser extends IDocument {
  email: string;
  fullName: string;
  password: string;
  phone: string;
  profileImg?: string;
}

type TokenType = "BearerToken";
export interface IToken {
  accessToken?: string;
  expiresIn?: Date;
  refreshToken?: string;
  tokenType?: TokenType;
}

export interface ILoginResponse {
  user: IUser;
  accessToken: string;
}

export interface IRegisterResponse {
  msg: string;
}

export interface IPage extends IDocument {
  title: string;
  description: string;
  image: string;
  user: string;
}

export interface IFeedback extends IDocument {
  profile: string;
  text: string;
  upvote: number;
  downvote: number;
  creator_id: string;
  comments: {
    creator_id: string;
    comment: string;
  }[];
  upvote_ids: { unique_id: string }[];
  downvote_ids: { unique_id: string }[];
}

export interface IProfile extends IDocument {
  user: string;
  firstname: string;
  lastname: string;
  about_you: string;
  profession: string;
  gender: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  }[];
  image: string;
  cloudinary_id: string;
}
