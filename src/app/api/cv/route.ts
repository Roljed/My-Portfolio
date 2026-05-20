import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import React from "react";
import { CvDocument } from "@/lib/cv-document";

// Prevent Next.js from prerendering this route at build time.
// The PDF must be generated on each request, not statically cached.
export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const buffer = await renderToBuffer(React.createElement(CvDocument));
        return new NextResponse(buffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="cv_yaad_nahshon.pdf"',
            },
        });
    } catch (err) {
        console.error("CV generation failed:", err);
        return NextResponse.json({ error: "Failed to generate CV" }, { status: 500 });
    }
}
