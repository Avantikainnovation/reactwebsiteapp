import React from 'react'
import images from '../Images/fwr1.jpg'
import image from '../Images/mg2.jpg'
// import Whychoose from './Whychoose'


 const aboutFlower = ()=> {

  return (
   <>
   <div className=" container-fluid bg-light row mt-5 ">
        <div className="col-7">
          <img src={images} alt="" style={{ width: "50%" }} />
          <img src={image} alt="" style={{ width: "50%" }} />
        </div>
        <div className="col-5">
          <h2>About Flowers</h2>
          <p>A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants (plants of the division Angiospermae). Flowers produce gametophytes, which in flowering plants consist of a few haploid cells which produce gametes
            In all plants, a flower is usually its most colourful part. We say the plant 'flowers', 'is flowering' or 'is in flower' when this colourful part begins to grow bigger and open out. There are many different kinds of flowers in.</p>
        </div>
      </div>
      {/* < Whychoose /> */}
   </>
  )
}
export default aboutFlower;

