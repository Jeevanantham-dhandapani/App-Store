import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl} = appDetails

  return (
    <li className="list-container" key={appId}>
      <img src={imageUrl} alt={appName} className="img-apps" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
