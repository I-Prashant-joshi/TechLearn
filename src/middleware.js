import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import React from 'react'

export async function middleware(request) {
  const cookie = await cookies()
  const token=  cookie?.get('token')?.value
  if(!token){
    return  NextResponse.redirect(new URL("/auth/login",request.url))
  }
    const { pathname } = request.nextUrl;
    if(pathname==="/auth"){
       return  NextResponse.redirect(new URL("/auth/login",request.url))
    }
  return (
    NextResponse.next()
  )
}
export const config = {
    matcher: ["/auth","/"], 
  };