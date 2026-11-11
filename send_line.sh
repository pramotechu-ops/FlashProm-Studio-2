#!/bin/bash
TOKEN="xgl04BHwNcp4U5/WDDqT4NU+PSgWrrFBU/p8J9xR9IEaNCCbuvTK62bRuLbFk+V4n8hbkTVqhUkPzwKJsAN7+rFWxR3kWd51+w918y3e8SZJ9HkFjE6v7YmCvRWS5bJWZoMTVzSSYP622atyaN750AdB04t89/1O/w1cDnyilFU="
MSG="${1:-📢 แจ้งเตือนด่วนจากระบบอัตโนมัติบน Mac ของคุณโ}"
curl -s -X POST -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" -d "{\"messages\":[{\"type\":\"text\",\"text\":\"$MSG\",\"quickReply\":{\"items\":[{\"type\":\"action\",\"action\":{\"type\":\"message\",\"label\":\"ดึงข้อมูลชีตใหม่\",\"text\":\"อัปเดตข้อมูลจาก Google Sheets ล่าสุด\"}},{\"type\":\"action\",\"action\":{\"type\":\"message\",\"label\":\"ตรวจสอบ Docker\",\"text\":\"ขอตรวจสอบสถานะ n8n บนพอร์ต 5679\"}}]}}]}" https://api.line.me/v2/bot/message/broadcast
echo " ✅ ส่งแจ้งเตือนเข้า LINE สำเร็จ!"
