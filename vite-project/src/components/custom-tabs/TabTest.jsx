
import Tabs from './Tabs'
import './tabs.css'

function RandomComponent() {
    return <h1>Some random content</h1>
}

const TabTest = () => {
    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
    }
    const tabs = [
        {
            label: "Tab 1",
            content: <div>This is content for tab 1</div>
        },
        {
            label: "Tab 2",
            content: <div>This is content for tab 2</div>
        },
        {
            label: "Tab 3",
            content: <RandomComponent />
        }
    ]
  return (
    <Tabs content={tabs} onChange={handleChange}/>
  )
}

export default TabTest