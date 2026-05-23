// Disabled middleware (pass-through).
//
// The previous rate-limit middleware crashed on Vercel Edge with
// MIDDLEWARE_INVOCATION_FAILED. GitHub's "Add files via upload" cannot
// delete files from a repo — only overwrite — so this file replaces the
// broken one with a body that does nothing.
//
// The matcher is set to a path that never exists in the app, so this
// middleware is effectively never invoked, and cannot break the site.
//
// To delete this file properly: on github.com open the file → trash icon
// (top right of the file view) → "Commit changes".

import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: "/_bananafont_disabled_middleware_xyz123"
};
