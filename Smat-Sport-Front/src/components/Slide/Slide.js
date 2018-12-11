import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.css';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

function SliderDynamique() {
  const images = [
    {
      original: 'https://lh6.googleusercontent.com/rLjOZyULTsEfPKIGk3mWPhtbtm1KWYgpthvZ_LeoyPIb-oyI7lA9yWnpXa5GAK9ybV7LewyZAFAdmD-QQ7o3=w1366-h657-rw',
      thumbnail: 'https://www.w3schools.com/w3images/fjords.jpg',
    },
    {
        original: 'https://lh3.googleusercontent.com/HfT6bHEctUTN8BhPAIQRBarBwCc99XtMobv5Z7NaYtXbVsggNDc2Dfb9Mm1SEKaNfzu51H95TKSJu4e-EgFY=w1366-h657-rw',
        thumbnail: 'https://www.w3schools.com/w3images/fjords.jpg', },
    {
        original: 'https://lh3.googleusercontent.com/1VPdbYP_3xnPxpZNvyLxgln2d9oghSZtLo7mxFLrFaRdtc8vIAgsECdg1W4chcGzxxiGUdHYQiJ1DIBjd4Dq=w1366-h657-rw',
        thumbnail: 'https://www.w3schools.com/w3images/fjords.jpg',}
  ];
https://lh6.googleusercontent.com/rLjOZyULTsEfPKIGk3mWPhtbtm1KWYg
  return (
    <div className="Slideed">
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        autoPlay={true}
        items={images}
      />
    </div>
  );
}


export default SliderDynamique;