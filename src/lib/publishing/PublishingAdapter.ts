import { VideoPayload } from "./PublishGate";

export class PublishingAdapter {
  static async dispatch(payload: VideoPayload) {
    const results = payload.platforms.map((platform) => ({
      platform,
      status: "PUBLISHED_QUEUED",
      publishedAt: new Date().toISOString(),
      trackingUrl: payload.affiliateUrl,
    }));

    return {
      success: true,
      productName: payload.productName,
      dispatchedTo: results,
    };
  }
}
