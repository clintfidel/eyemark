import React from "react";
import "./style.scss";
import { JbLogo } from "assets/images(png)";
import {
  SmallImg1,
  SmallImg2,
  SmallImg4,
  SmallImg5,
  SmallImg6,
  SmallImg7,
  SmallImg8,
  SmallImg9,
  SmallImg10,
  SmallImg11,
  BigImage
} from "assets/icons(svg)";

export default function Media() {
  return (
    <div className="media">
      <div className="gallery">
        <figure className="gallery__item gallery__item--1">
          <img src={SmallImg1} className="gallery__img" alt="Image 1" />
        </figure>
        <figure className="gallery__item gallery__item--2">
          <img src={SmallImg2} className="gallery__img" alt="Image 2" />
        </figure>
        <figure className="gallery__item gallery__item--4">
          <img src={SmallImg4} className="gallery__img" alt="Image 4" />
        </figure>
        <figure className="gallery__item gallery__item--5">
          <img src={BigImage} className="gallery__img" alt="Image 5" />
        </figure>
        <figure className="gallery__item gallery__item--3">
          <img src={SmallImg5} className="gallery__img" alt="Image 3" />
        </figure>
        <figure className="gallery__item gallery__item--7">
          <img src={SmallImg6} className="gallery__img" alt="Image 7" />
        </figure>
        <figure className="gallery__item gallery__item--8">
          <img src={SmallImg7} className="gallery__img" alt="Image 8" />
        </figure>
        <figure className="gallery__item gallery__item--9">
          <img src={SmallImg8} className="gallery__img" alt="Image 9" />
        </figure>
        <figure className="gallery__item gallery__item--10">
          <img src={SmallImg9} className="gallery__img" alt="Image 10" />
        </figure>
        <figure className="gallery__item gallery__item--11">
          <img src={SmallImg10} className="gallery__img" alt="Image 11" />
        </figure>
        <figure className="gallery__item gallery__item--12">
          <img src={SmallImg11} className="gallery__img" alt="Image 12" />
        </figure>
      </div>
    </div>
  );
}
