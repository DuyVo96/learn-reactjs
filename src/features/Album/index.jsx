import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "duy",
      thumbnailUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…z1vSoDjm1ULkZydxj3mTIvICb27ZOVbOTn1HfrNzJkNmB/9k=",
    },
    {
      id: 2,
      name: "tri",
      thumbnailUrl:
        "https://cafefcdn.com/thumb_w/650/20333711448726323…3/3/photo1646280815645-1646280816151764748403.jpg",
    },
    {
      id: 3,
      name: "hiho",
      thumbnailUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…RAUcV4ouI/wAsRRShDaXgkaxRRIZIm0hG5iijYiOKKKSM/9k=",
    },
  ];
  return (
    <div>
      <h2>It seem like you will love it</h2>
      <AlbumList albumList = />
    </div>
  );
}

export default AlbumFeature;
