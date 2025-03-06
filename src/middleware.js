import { NextResponse } from 'next/server'
import React from 'react'

export function middleware(request) {
    const { pathname } = request.nextUrl;
    if(pathname==="/auth"){
       return  NextResponse.redirect(new URL("/auth/login",request.url))
    }
  return (
    NextResponse.next()
  )
}
export const config = {
    matcher: ["/auth"], 
  };