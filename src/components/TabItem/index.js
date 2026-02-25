import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, updateTabId, isActive} = this.props
    const {tabId, displayText} = tabDetails
    const onClickTabItem = () => {
      updateTabId(tabId)
    }
    const changeActiveTabStyle = isActive ? 'active-tab' : ''

    return (
      <li className="list-style">
        <button
          type="button"
          className={changeActiveTabStyle}
          onClick={onClickTabItem}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
