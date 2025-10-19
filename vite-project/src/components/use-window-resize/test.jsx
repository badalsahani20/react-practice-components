import useWindowResize from './useWindowResize';
import './style.css';
const UseWindowResizeTest = () => {
    const {width, height} = useWindowResize();
  return (
    <div className='resize-container'>
      <h1>🪟 Window Resize Hook</h1>
      <div className='resize-info'>
      <p><strong>Width:</strong> {width}px</p>
      <p><strong>Height:</strong> {height}px</p>
      </div>

      {/* Responsive box visualizer */}
      <div className='resize-box'
        style={{
          backgroundColor: width > 900 ? '#a3e635' : width > 600 ? '#38bdf8' : '#f87171',
          width: `${Math.min(width / 5, 400)}px`,
          height: `${Math.min(height / 5, 300)}px`
        }}>
        
      </div>
    </div>
  )
}

export default UseWindowResizeTest
