import { NextResponse } from "next/server";
import { PublishGate, VideoPayload } from "../../../lib/publishing/PublishGate";
import { PublishingAdapter } from "../../../lib/publishing/PublishingAdapter";

export async function POST(req: Request) {
  try {
    const body: VideoPayload = await req.json();
    const check = PublishGate.validate(body);

    if (!check.passed) {
      return NextResponse.json(
        { status: "REJECTED_BY_GATE", reason: check.reason },
        { status: 400 }
      );
    }

    const publishResult = await PublishingAdapter.dispatch(body);
    return NextResponse.json({
      status: "SUCCESS",
      gate: "PASSED",
      data: publishResult,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "ERROR", message: (error as Error).message },
      { status: 500 }
    );
  }
}
