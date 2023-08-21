import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();
        
        const user = await prisma.user.findFirst({
            where: { id: data.id }, // Find user by email
        });


        console.log(user, "selected user")

        if (!user || user.password !== data.password) {
            throw new Error('Invalid credentials');
        }

        return new NextResponse(JSON.stringify(user), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return new NextResponse(error.message, { status: 500 });
    }
}