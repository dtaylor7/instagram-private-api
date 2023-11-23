export interface UploadPhotoOptions {
  uploadId?: string;
  file: Buffer;
  fileMimeType?: string;
  isSidecar?: boolean;
  waterfallId?: string;
}
