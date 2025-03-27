import React from "react";

interface Props {
   params: Promise<{ id: number; photoId: number }>;
}
const PhotoDetailPage = async ({ params }: Props) => {
   const { photoId } = await params;
   return <div>PhotoDetailPage {photoId}</div>;
};

export default PhotoDetailPage;
