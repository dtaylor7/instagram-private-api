import { PostingLocation, PostingStoryOptions, PostingUsertags } from './posting.options';

export interface PostingPhotoOptions {
  file: Buffer;
  fileMimeType?: string;
  caption?: string;
  usertags?: PostingUsertags;
  location?: PostingLocation;
}

export interface PostingStoryPhotoOptions extends PostingStoryOptions {
  file: Buffer;
}
