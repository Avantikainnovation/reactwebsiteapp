import React from 'react'
import images from '../Images/fwr1.jpg'
import image from '../Images/mg2.jpg'

function Gallery() {
  return (
   <>
    <div className=" container-fluid row p-3">
        <h3 className="text-center">Our Gallery</h3>
        <div className="col-4">
          <img src={images} alt="" style={{ width: "50%" }} />
          <img src={image} alt="" style={{ width: "50%" }} />
        </div>
        <div className="col-4">
          <img src={images} alt="" style={{ width: "50%" }} />
          <img src={image} alt="" style={{ width: "50%" }} />
        </div>
        <div className="col-4">
          <img src={images} alt="" style={{ width: "50%" }} />
          <img src={image} alt="" style={{ width: "50%" }} />
        </div>
      </div>
   </>
  )
}

export default Gallery;
