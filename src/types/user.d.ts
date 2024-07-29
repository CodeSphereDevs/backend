export type User = {
    id?: string;
    username: string;
    password: string;
    email:string;
    urlAvatar?: string;
}

type PostAtUser = {
    id:string;
    title:string;
  }

export type UpdateUser = {
    urlAvatar?: string;
    title?: string;
    details?:string;
    technologies? :Array<string>;
    links? :Array<string>;
    posts?: Array<PostAtUser>
}
