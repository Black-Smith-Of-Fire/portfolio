import passportPic from './../assets/benjamin.png'
export default function AvatarPlaceholder({}: { className?: string }) {
  return (
    <>
    <div>
      <img src={passportPic}></img>
    </div>
    </>
  )
}
