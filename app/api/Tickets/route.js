import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created" });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets });
  } catch (error) {
    return NextResponse.json({ message: "Error", error });
  }
}
