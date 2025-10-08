import UseLocalStorage from "./UseLocalStorage"
import './style.css'

const DarkMode = () => {
    const[theme, setTheme] = UseLocalStorage('theme', 'dark');
    function handleToggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
  return (
    <div className="dark-mode" data-theme={theme}>
        <div className="dark-mode-container">
            <p>Hello World!</p>
            <button className="dark-mode-btn" onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default DarkMode