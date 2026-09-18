import passportPic from './../assets/benjamin.png'
export default function AvatarPlaceholder({ className = '' }: { className?: string }) {
  return (
    <>
    <div>
      <img src={passportPic}></img>
    </div>
    </>
  )
}
