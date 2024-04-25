'use client'
import Image from 'next/image'
import { ComponentPropsWithRef, useId } from 'react'


/* 
This Components wraps the default NextJs Image Component and extends it by giving it a default soft shimmer loading effect while the image havn't loaded yet on screen
*/

const shimmer = (w: number, h: number, gId: string, rId: string) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient transform='rotate(45 ${w / 2} ${h / 2})' id="${gId}">
      <stop stop-color="#d9d9d9" offset="20%" />
      <stop stop-color="#c7c3c3" offset="50%" />
      <stop stop-color="#d9d9d9" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#d9d9d9" />
  <rect id="${rId}"  width="${w}" height="${h}" fill="url(#${gId})" />
  <animate xlink:href="#${rId}" attributeName="x" from="-${w}" to="${w}" dur="2s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

type PropType = ComponentPropsWithRef<typeof Image>;

export default function NextImageShimmer(prop: PropType) {
  const gId = useId();
  const rId = useId();
  return (
    <Image
      {...prop}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475, gId, rId))}`}
      placeholder={`blur`}
      alt={prop.alt}
    />
  )
}


