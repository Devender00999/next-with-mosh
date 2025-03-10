import React from "react";

interface Props {
   params: { id: number; photoId: number };
}
const PhotoDetailPage = async ({ params }: Props) => {
   const { photoId } = await params;
   return <div>PhotoDetailPage {params.photoId}</div>;
};

export default PhotoDetailPage;
