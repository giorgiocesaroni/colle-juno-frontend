import Image from "next/image";

export default function image(props) {
  return (
    <div className={props.className}>
      <Image priority="true" src={'https:' + props.url} layout="fill" objectFit="cover" />
    </div>
  )
}