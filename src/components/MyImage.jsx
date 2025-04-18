import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function MyImage({src,className}) {
  return (
    <>
        <LazyLoadImage
            alt=''
            effect='blur'
            src={src}
            className={className}
        />
    </>
  )
}

export default MyImage