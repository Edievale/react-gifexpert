
export const GifItem = ({id,title,url}) => {
  return (
    <div className="card">
          <img src={url.url} className="rounded" alt={title}></img>
          <p>{title}</p>
    </div>
  )
}

export default GifItem
