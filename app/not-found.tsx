import Link from "next/link"

import { PageFrame } from "@/components/page-frame"

export default function NotFound() {
  return (
    <PageFrame className="items-center justify-center gap-6 px-6 py-16 text-center">
      <p className="font-mono text-sm text-muted-foreground">404</p>

      <h1 className="max-w-[22ch] text-2xl leading-[1.2] font-semibold tracking-heading text-balance sm:text-4xl sm:tracking-display">
        There is nothing at this address
      </h1>

      <p className="max-w-[42ch] text-base leading-[1.5] font-medium text-muted-foreground">
        The link may be old, or the address may have a typo in it.
      </p>

      <Link href="/" className="btn btn-primary">
        Go to the home page
      </Link>
    </PageFrame>
  )
}
