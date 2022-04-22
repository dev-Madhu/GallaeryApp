// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateImage} = props
  const {imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = imageDetails

  const onClickSelectedItem = () => {
    updateImage(imageUrl, imageAltText)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onClickSelectedItem}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="small-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
