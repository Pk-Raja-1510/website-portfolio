import { NextResponse } from "next/server";

export const middleware = (req, res, next) => {
  // const pages = ["/", "/jobs", "/metaverse"];
  // console.log(req.nextUrl, '@@@@@@@@@@@@')
  // if (pages.some((url) => url === req.nextUrl.pathname)) {
  //   if (
  //     req.nextUrl.protocol === "http:" &&
  //     req.nextUrl.hostname != "localhost"
  //   ) {
  //     return NextResponse.redirect(
  //       `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
  //       301
  //     );
  //   }
  // }
  return next;
};
