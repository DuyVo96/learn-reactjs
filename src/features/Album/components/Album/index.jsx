import React from "react";

Album.propTypes = {};

function Album(album) {
  return (
    <div className="album">
      <p>{album.name}</p>
    </div>
  );
}

export default Album;
