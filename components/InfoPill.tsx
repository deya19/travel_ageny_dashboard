export default function InfoPill({image, text}: InfoPillProps) {
  return (
    <figure className="info-pill">
      <img src={image} alt={text} />
      <figcaption>{text}</figcaption>
    </figure>
  )
}
