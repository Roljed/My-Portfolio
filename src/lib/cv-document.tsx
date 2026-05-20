import React from "react";
import path from "path";
import {
    Document,
    Font,
    Page,
    Text,
    View,
    Link,
    StyleSheet,
} from "@react-pdf/renderer";
import { experiencesData, skillsData, certificationsData, projectsData } from "@/lib/data";

const fontsDir = path.join(process.cwd(), "public", "fonts");

Font.register({
    family: "Inter",
    fonts: [
        { src: path.join(fontsDir, "inter-400.woff"), fontWeight: 400 },
        { src: path.join(fontsDir, "inter-500.woff"), fontWeight: 500 },
        { src: path.join(fontsDir, "inter-700.woff"), fontWeight: 700 },
    ],
});

// Disable automatic hyphenation for cleaner line breaks
Font.registerHyphenationCallback((word) => [word]);

const BLUE       = "#2563eb";
const BLUE_LIGHT = "#dbeafe";
const INK        = "#0f172a";
const SLATE      = "#475569";
const MUTED      = "#94a3b8";

const styles = StyleSheet.create({
    page: {
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: 8.5,
        color: INK,
    },

    accentBar: {
        height: 4,
        backgroundColor: BLUE,
    },

    content: {
        paddingTop: 28,
        paddingHorizontal: 44,
    },

    // ── Header ────────────────────────────────────────────────
    name: {
        fontSize: 23,
        fontWeight: 700,
        color: INK,
        lineHeight: 1,
        marginBottom: 5,
    },
    headline: {
        fontSize: 10.5,
        fontWeight: 400,
        color: SLATE,
        lineHeight: 1,
        marginBottom: 8,
    },
    contactRow: {
        flexDirection: "row",
        gap: 16,
        fontSize: 8,
    },
    contactLink: {
        color: BLUE,
        textDecoration: "none",
        fontWeight: 400,
    },
    divider: {
        borderBottomWidth: 0.75,
        borderBottomColor: "#e2e8f0",
        marginTop: 10,
        marginBottom: 12,
    },

    // ── Section titles ─────────────────────────────────────────
    sectionTitle: {
        fontSize: 7,
        fontWeight: 700,
        color: BLUE,
        letterSpacing: 1.5,
        marginTop: 12,
        marginBottom: 6,
        borderBottomWidth: 0.5,
        borderBottomColor: BLUE_LIGHT,
        paddingBottom: 2.5,
    },

    // ── Summary ────────────────────────────────────────────────
    summaryPara: {
        fontSize: 8.5,
        color: SLATE,
        lineHeight: 1.55,
        marginBottom: 4,
    },

    // ── Experience ─────────────────────────────────────────────
    expEntry: { marginBottom: 8 },
    expHeaderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 1,
    },
    expTitle:    { fontSize: 9.5, fontWeight: 700, color: INK },
    expDate:     { fontSize: 7.5, fontWeight: 400, color: MUTED },
    expLocation: { fontSize: 8,   fontWeight: 400, color: SLATE, marginBottom: 3 },
    bulletRow:   { flexDirection: "row", marginBottom: 2.5 },
    bulletDot:   { width: 9, fontSize: 8, color: SLATE },
    bulletText:  { flex: 1, fontSize: 8, color: SLATE, lineHeight: 1.5 },

    // ── Skills ─────────────────────────────────────────────────
    skillsWrap: { flexDirection: "row", flexWrap: "wrap", gap: 3.5 },
    skillPill: {
        fontSize: 7.5,
        fontWeight: 400,
        color: SLATE,
        backgroundColor: "#f8fafc",
        borderWidth: 0.5,
        borderColor: "#cbd5e1",
        borderRadius: 3,
        paddingVertical: 2.5,
        paddingHorizontal: 6,
    },

    // ── Education ──────────────────────────────────────────────
    eduRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
    },
    eduText: { fontSize: 8.5, fontWeight: 500, color: SLATE },
    eduDate: { fontSize: 7.5, fontWeight: 400, color: MUTED },

    // ── Certifications ─────────────────────────────────────────
    certRow: { flexDirection: "row", alignItems: "center", marginBottom: 3 },
    certDot:  { width: 9, fontSize: 8, color: SLATE },
    certLink: { fontSize: 8.5, color: BLUE, textDecoration: "none" },

    // ── Projects ───────────────────────────────────────────────
    projectLine: { fontSize: 8, lineHeight: 1.4, marginBottom: 3.5 },
    projectTitle: { fontWeight: 700, color: INK },
    projectTitleLink: { fontWeight: 700, color: BLUE, textDecoration: "none" },
    projectSep:   { fontWeight: 400, color: MUTED },
    projectDesc:  { fontWeight: 400, color: SLATE },
});

const RECENT_EXPERIENCE = experiencesData.slice(0, 3);

const summaryParagraphs = [
    "Senior Cloud Software Engineer and Tech Lead at Intel Corporation with 6+ years of experience. Expert in platform engineering, high-scale DevOps orchestration, and reliable software delivery — transforming complex CI/CD bottlenecks into automated, repeatable systems. Proven technical leader: guiding squads, setting engineering standards, and mentoring engineers.",
];

export function CvDocument() {
    return (
        <Document title="Yaad Nahshon — CV" author="Yaad Nahshon">
            <Page size="A4" style={styles.page}>

                <View style={styles.accentBar} />

                <View style={styles.content}>

                    {/* ── Header ── */}
                    <Text style={styles.name}>Yaad Nahshon</Text>
                    <Text style={styles.headline}>Senior Cloud Software Engineer & Tech Lead</Text>
                    <View style={styles.contactRow}>
                        <Link src="mailto:ydnahshon@gmail.com" style={styles.contactLink}>
                            <Text>ydnahshon@gmail.com</Text>
                        </Link>
                        <Link src="https://www.linkedin.com/in/yaad-nahshon/" style={styles.contactLink}>
                            <Text>linkedin.com/in/yaad-nahshon</Text>
                        </Link>
                        <Link src="https://github.com/Roljed" style={styles.contactLink}>
                            <Text>github.com/Roljed</Text>
                        </Link>
                    </View>
                    <View style={styles.divider} />

                    {/* ── Summary ── */}
                    <Text style={styles.sectionTitle}>SUMMARY</Text>
                    {summaryParagraphs.map((p, i) => (
                        <Text key={i} style={styles.summaryPara}>{p}</Text>
                    ))}

                    {/* ── Experience ── */}
                    <Text style={styles.sectionTitle}>EXPERIENCE</Text>
                    {RECENT_EXPERIENCE.map((item, i) => (
                        <View key={i} style={styles.expEntry}>
                            <View style={styles.expHeaderRow}>
                                <Text style={styles.expTitle}>{item.title}</Text>
                                <Text style={styles.expDate}>{item.date}</Text>
                            </View>
                            <Text style={styles.expLocation}>{item.location}</Text>
                            {"bullets" in item && item.bullets.map((b, j) => (
                                <View key={j} style={styles.bulletRow}>
                                    <Text style={styles.bulletDot}>•</Text>
                                    <Text style={styles.bulletText}>{b}</Text>
                                </View>
                            ))}
                        </View>
                    ))}

                    {/* ── Skills ── */}
                    <Text style={styles.sectionTitle}>SKILLS</Text>
                    <View style={styles.skillsWrap}>
                        {skillsData.map((skill, i) => (
                            <Text key={i} style={styles.skillPill}>{skill}</Text>
                        ))}
                    </View>

                    {/* ── Education ── */}
                    <Text style={styles.sectionTitle}>EDUCATION</Text>
                    <View style={styles.eduRow}>
                        <Text style={styles.eduText}>B.Sc. Computer Science — Haifa University</Text>
                        <Text style={styles.eduDate}>2020</Text>
                    </View>

                    {/* ── Certifications ── */}
                    <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
                    {certificationsData.map((cert, i) => (
                        <View key={i} style={styles.certRow}>
                            <Text style={styles.certDot}>•</Text>
                            <Link src={cert.url} style={styles.certLink}>
                                <Text>{cert.title}</Text>
                            </Link>
                        </View>
                    ))}

                    {/* ── Projects ── */}
                    <Text style={styles.sectionTitle}>PROJECTS</Text>
                    {projectsData.map((proj, i) => (
                        <Text key={i} style={styles.projectLine}>
                            <Link src={proj.url} style={styles.projectTitleLink}>{proj.title}</Link>
                            <Text style={styles.projectSep}>{"  "}{proj.tags.join(" · ")}{"  —  "}</Text>
                            <Text style={styles.projectDesc}>{proj.description}</Text>
                        </Text>
                    ))}

                </View>
            </Page>
        </Document>
    );
}
