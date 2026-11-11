#!/bin/bash
SHEET_ID="10TMyoXAtm3-D0F-c5HgoR63Cc5Hm6CV1"
LATEST_MSG=$(curl -sL "https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv" | tail -n 1 | awk -F',' '{print $2}' | tr -d '"')
if [ ! -z "$LATEST_MSG" ]; then
    ./send_line.sh "📊 [Google Sheets ล่าสุด]: $LATEST_MSG"
else
    echo "❌ ดึงข้อมูลล้มเหลว หรือสเปรดชีตว่างเปล่า"
fi
