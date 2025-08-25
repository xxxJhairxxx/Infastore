export interface FileFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: string | null;
  size: number;
  width?: number;
  height?: number;
}

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: Record<string, FileFormat>; // Ej: { thumbnail: { ... }, small: { ... } }
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface DataItem {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  logo: Media;
}

export interface GeneralResponse {
  data: DataItem;
  meta: Record<string, unknown>;
}
