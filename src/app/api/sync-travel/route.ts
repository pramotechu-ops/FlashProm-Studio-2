import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get('x-api-key');
    if (authHeader !== process.env.N8N_WEBHOOK_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { sheetRowId, title, origin, destination, distanceKm, travelDate } = body;

    const savedRoute = await prisma.travelRoute.create({
      data: {
        sheetRowId: Number(sheetRowId) || null,
        title: title || 'ไม่ระบุรายการ',
        origin: origin || '-',
        destination: destination || '-',
        distanceKm: parseFloat(distanceKm) || 0,
        travelDate: travelDate ? new Date(travelDate) : new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'บันทึกข้อมูลลง PostgreSQL สำเร็จ',
      data: savedRoute,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
