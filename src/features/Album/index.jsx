import React from "react";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Duy",
      thumbnailUrl:
        "https://image.shutterstock.com/image-vector/letter-d-dog-logo-design-260nw-2157669653.jpg",
    },
    {
      id: 2,
      name: "khoi",
      thumbnailUrl:
        "https://image.shutterstock.com/image-vector/letter-d-dog-logo-design-260nw-2157669653.jpg",
    },
    {
      id: 3,
      name: "Tho",
      thumbnailUrl:
        "https://image.shutterstock.com/image-vector/letter-d-dog-logo-design-260nw-2157669653.jpg",
    },
  ];
  return (
    <div>
      <h2>May be you will like it</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
