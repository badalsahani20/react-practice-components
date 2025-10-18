import React from 'react'
import Accordion from './components/accordian/index.jsx'
import RandomColorGenerator from './components/random-color-generator/index.jsx'
import StarRating from './components/star-rating/Index.jsx'
import ImageSlider from './components/image-slider/Index.jsx'
import LoadMoreProducts from './components/load-more-products/index.jsx'
import ItemTree from './components/item-tree/index.jsx'
import Data from './components/item-tree/data.js'
import QrCodeGenerator from './components/qr-code/QrCode.jsx'
import DarkMode from './components/toggle-dark-mode/DarkMode.jsx'
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator.jsx'
import TabTest from './components/custom-tabs/TabTest.jsx'
import ModelTest from './components/custom-model-popup/ModelTest.jsx'
import GitHubProfileFinder from './components/github-profile-finder/GitHubFinder.jsx'
import AutoComplete from './components/search-auto-complete/AutoComplete.jsx'
import TicTacToe from './components/tic-tac-toe/TicTacToe.jsx'
import FeatureFlagGlobalState from './components/feature-flag/context/index.jsx'
import FeatureFlags from './components/feature-flag/index.jsx'
import UseFetchHookTest from './components/custom-fetch/test.jsx'


const App = () => {
  return (
    <div className='App'>
      {/* Accordion */}
      {/* <Accordion /> */}

      {/* Random Color Generator Component */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={10}/> */}
      {/* <LoadMoreProducts /> */}
      {/* <ItemTree menu={Data}/> */}
      {/* <QrCodeGenerator /> */}
      {/* <DarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}
      {/* <TabTest /> */}
      {/* <ModelTest /> */}
      {/* <GitHubProfileFinder /> */}
      {/* <AutoComplete /> */}
      {/* <TicTacToe /> */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}
      <UseFetchHookTest />
    </div>
  )
}

export default App