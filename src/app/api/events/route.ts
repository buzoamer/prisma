"use server"
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const data = await request.json();
        const events = await prisma.event.findMany({
            where: { id: data.id }, // Find event by id
        });


        console.log(events, "Selected event")

        if (!events) {
            throw new Error('No events at the moment');
        }

        return new NextResponse(JSON.stringify(events), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
}
