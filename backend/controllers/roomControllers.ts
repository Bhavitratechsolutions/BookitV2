import { NextRequest, NextResponse } from "next/server";


export const allRooms = async(request:NextRequest) => {
    return NextResponse.json({
        message:"Api Response"
    })
}