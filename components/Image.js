import Image from "next/image";

export default function image(props) {
  return (
    <div className={"image-wrapper" + (props.className ? " " + props.className : '')}>
      <Image src={'https:' + props.url} layout="fill" objectFit="cover" />
    </div>
  )
}