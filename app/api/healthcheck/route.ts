import { NextResponse } from "next/server";

export const config = {
  regions: ["bom1"]
};

export async function GET() {
    return NextResponse.json({ message: "OK", timestamp: new Date().toISOString(), uptime: process.uptime() });
}
