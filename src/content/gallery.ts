// Галерей. Зургаа `public/gallery/` дотор хийгээд энд бүртгэнэ.
// Хоосон бол сайт дээр "зураг нэмэх" сануулга харагдана.

export type GalleryItem = {
  src: string; // ж: "/gallery/todsocks-home.jpg"
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export const gallery: GalleryItem[] = [
  // {
  //   src: "/gallery/todsocks-home.jpg",
  //   alt: "todsocks.mn нүүр хуудас",
  //   caption: "todsocks.mn — шинэ storefront",
  //   width: 1600,
  //   height: 1000,
  // },
];
