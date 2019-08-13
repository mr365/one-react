import React from "react";
import petfinderClient from "petfinder-client";
class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location } = this.props;
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    if (photos.length === 0) {
      let temp = {};
      photos[0] = temp;
      photos[0].value = "";
    }
    return (
      <div className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name}></img>
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </div>
    );
  }
}
export default Pet;
