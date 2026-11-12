export interface VideoPayload {
  productId: string;
  productName: string;
  affiliateUrl: string;
  videoUrl: string;
  hookText: string;
  platforms: ("TIKTOK" | "SHOPEE_VIDEO" | "FACEBOOK")[];
}

export class PublishGate {
  static validate(payload: VideoPayload): { passed: boolean; reason?: string } {
    if (!payload.videoUrl || !payload.videoUrl.startsWith("http")) {
      return { passed: false, reason: "ไม่พบลิงก์ไฟล์วิดีโอที่พร้อมใช้งาน (Invalid Video URL)" };
    }
    if (!payload.affiliateUrl || !payload.affiliateUrl.startsWith("http")) {
      return { passed: false, reason: "ไม่พบลิงก์ปักตะกร้า Affiliate (Missing Affiliate Link)" };
    }
    if (!payload.hookText || payload.hookText.trim().length < 5) {
      return { passed: false, reason: "ข้อความ Winning Hook สั้นเกินไป" };
    }
    return { passed: true };
  }
}
