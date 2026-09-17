import passportPic from './../assets/Benjamin_Luke.jpeg'
export default function AvatarPlaceholder({ className = '' }: { className?: string }) {
  return (
    <>
    <div>
      <img src={passportPic}></img>
    </div>
    </>
  )
}
