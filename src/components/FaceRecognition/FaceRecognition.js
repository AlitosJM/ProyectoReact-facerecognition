import React from 'react';
import './FaceRecognition.css';
// https://frarborists.com/dev/wp-content/uploads/FRA_shrubs.jpg
// https://acordesweb.com/img/the-faces-8c5bd2efbf681ee07941973dfb55d256.jpg
// https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2014/03/portrait-photography.jpg
// <div className="bounding-box" style={"inset: 9.33298% 20.8741% 6.51217% 21.9462%"}></div>
const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageUrl} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        {console.log(box)}
      </div>
    </div>
  );
}
export default FaceRecognition;
