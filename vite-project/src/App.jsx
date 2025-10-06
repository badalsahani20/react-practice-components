import React from 'react'
import Accordion from './components/accordian/index.jsx'
import RandomColorGenerator from './components/random-color-generator/index.jsx'
import StarRating from './components/star-rating/Index.jsx'
import ImageSlider from './components/image-slider/Index.jsx'
import LoadMoreProducts from './components/load-more-products/index.jsx'

const App = () => {
  return (
    <div className='App'>
      {/* Accordion */}
      {/* <Accordion /> */}

      {/* Random Color Generator Component */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/> */}
      <LoadMoreProducts />
    </div>
  )
}

export default App