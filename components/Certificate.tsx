"use client";

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import type { Trainee, Property } from "@/lib/types";
import {
  NOVAK_SIGNATURE,
  TAV_SIGNATURE,
  REGENESIS_WORDMARK,
} from "@/lib/signatures";

// Using @react-pdf/renderer built-in fonts (Times-Roman, Helvetica) so the
// cert does not depend on any runtime font fetch. Google Fonts CDN URLs rotate
// and 404 unpredictably — learned the hard way 2026-04-11. If we ever want
// Cormorant Garamond back, inline the TTF as base64 under lib/fonts.ts.
const SERIF = "Times-Roman";
const SERIF_ITALIC = "Times-Italic";
const SANS = "Helvetica";
const SANS_BOLD = "Helvetica-Bold";

const PALETTE = {
  paper: "#faf7f0",
  cream: "#f1ebdc",
  ink: "#1a1a1a",
  charcoal: "#2b2a28",
  muted: "#6b6659",
  gold: "#b89866",
  goldDark: "#8f7547",
  line: "#c9c1ac",
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: PALETTE.paper,
    padding: 0,
    fontFamily: SANS,
  },
  frame: {
    margin: 18,
    border: `1px solid ${PALETTE.gold}`,
    flex: 1,
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  innerFrame: {
    border: `0.5px solid ${PALETTE.line}`,
    flex: 1,
    padding: 22,
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    textAlign: "center",
    alignItems: "center",
  },
  wordmark: {
    width: 410,
    height: 29,
    objectFit: "contain",
  },
  eyebrow: {
    fontSize: 8,
    letterSpacing: 3,
    color: PALETTE.goldDark,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 10,
    fontWeight: 500,
  },
  certTitle: {
    fontFamily: SERIF_ITALIC,
    fontSize: 20,
    color: PALETTE.ink,
    textAlign: "center",
    marginTop: 6,
    marginBottom: 4,
  },
  goldRule: {
    width: 36,
    height: 1,
    backgroundColor: PALETTE.gold,
    marginHorizontal: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  awardedTo: {
    fontFamily: SERIF_ITALIC,
    fontSize: 12,
    color: PALETTE.muted,
    textAlign: "center",
    marginTop: 14,
    marginBottom: 6,
  },
  name: {
    fontFamily: SERIF,
    fontSize: 44,
    color: PALETTE.ink,
    textAlign: "center",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  hereby: {
    fontSize: 10,
    color: PALETTE.muted,
    textAlign: "center",
    lineHeight: 1.5,
    marginTop: 12,
    marginHorizontal: 60,
    fontFamily: SANS,
  },
  credential: {
    fontFamily: SANS,
    fontSize: 12,
    letterSpacing: 3,
    color: PALETTE.goldDark,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 12,
    fontWeight: 500,
  },
  property: {
    fontFamily: SERIF_ITALIC,
    fontSize: 16,
    color: PALETTE.charcoal,
    textAlign: "center",
    marginTop: 18,
  },
  cohort: {
    fontSize: 9,
    letterSpacing: 2.5,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 4,
  },
  tagline: {
    fontFamily: SERIF_ITALIC,
    fontSize: 11,
    color: PALETTE.muted,
    textAlign: "center",
    marginTop: 18,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  sigBlock: {
    alignItems: "center",
    width: "42%",
  },
  sigImageWrap: {
    height: 40,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 3,
  },
  sigImage: {
    height: 36,
    objectFit: "contain",
  },
  sigLine: {
    width: "80%",
    height: 0.5,
    backgroundColor: PALETTE.ink,
    marginBottom: 4,
  },
  sigName: {
    fontSize: 11,
    color: PALETTE.ink,
    textAlign: "center",
    fontFamily: SERIF,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  sigTitle: {
    fontSize: 7,
    letterSpacing: 2,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 3,
    fontFamily: SANS,
  },
  meta: {
    marginTop: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 8,
    borderTop: `0.5px solid ${PALETTE.line}`,
  },
  metaItem: {
    fontSize: 7,
    color: PALETTE.muted,
    letterSpacing: 1.5,
    fontFamily: SANS,
    textTransform: "uppercase",
  },
});

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function CertificateDocument({
  trainee,
  property,
}: {
  trainee: Trainee;
  property: Property;
}) {
  const issued = trainee.certificateIssuedAt ?? new Date().toISOString();
  const certId = `REG-${trainee.id.slice(3, 11).toUpperCase()}`;
  return (
    <Document
      author="Regenesis"
      title={`Regenesis Academy Certificate · ${trainee.name}`}
      subject="Certified Regenesis Pod Concierge"
    >
      <Page size="A4" orientation="landscape" style={styles.page}>
        <View style={styles.frame}>
          <View style={styles.innerFrame}>
            <View style={styles.header}>
              <Image src={REGENESIS_WORDMARK} style={styles.wordmark} />
              <Text style={styles.eyebrow}>Academy</Text>
              <View style={styles.goldRule} />
              <Text style={styles.certTitle}>Certificate of Completion</Text>
            </View>

            <Text style={styles.awardedTo}>This certifies that</Text>
            <Text style={styles.name}>{trainee.name}</Text>
            <Text style={styles.hereby}>
              is hereby recognised, on completion of all six modules and the Final Assessment, as a
            </Text>
            <Text style={styles.credential}>
              Certified Regenesis Pod Concierge
            </Text>

            <Text style={styles.property}>{property.name}</Text>
            <Text style={styles.cohort}>{property.location}</Text>

            <Text style={styles.tagline}>
              Performance begins with recovery.
            </Text>

            <View style={styles.footer}>
              <View style={styles.sigBlock}>
                <View style={styles.sigImageWrap}>
                  <Image
                    src={NOVAK_SIGNATURE}
                    style={[styles.sigImage, { height: 34 }]}
                  />
                </View>
                <View style={styles.sigLine} />
                <Text style={styles.sigName}>Novak Djokovic</Text>
                <Text style={styles.sigTitle}>Co-Founder · Regenesis</Text>
              </View>
              <View style={styles.sigBlock}>
                <View style={[styles.sigImageWrap, { marginBottom: -5 }]}>
                  <Image
                    src={TAV_SIGNATURE}
                    style={[styles.sigImage, { height: 34 }]}
                  />
                </View>
                <View style={styles.sigLine} />
                <Text style={styles.sigName}>Tav Keen</Text>
                <Text style={styles.sigTitle}>Co-Founder · Regenesis</Text>
              </View>
            </View>

            <View style={styles.meta}>
              <Text style={styles.metaItem}>Cert · {certId}</Text>
              <Text style={styles.metaItem}>Issued · {formatDate(issued)}</Text>
              <Text style={styles.metaItem}>Score · {trainee.finalScore ?? 0}%</Text>
              <Text style={styles.metaItem}>
                Regenesis Pod · First Generation
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export function CertificateView({
  trainee,
  property,
}: {
  trainee: Trainee;
  property: Property;
}) {
  const filename = `Regenesis-Academy-Certificate-${trainee.name.replace(
    /\s+/g,
    "-",
  )}.pdf`;
  return (
    <div className="space-y-8">
      <div
        className="border border-line shadow-sm overflow-hidden"
        style={{ height: 620, backgroundColor: "#faf7f0" }}
      >
        <PDFViewer
          width="100%"
          height="100%"
          showToolbar={false}
          style={{ border: 0, backgroundColor: "#faf7f0" }}
        >
          <CertificateDocument trainee={trainee} property={property} />
        </PDFViewer>
      </div>
      <div className="flex items-center justify-center gap-4">
        <PDFDownloadLink
          document={<CertificateDocument trainee={trainee} property={property} />}
          fileName={filename}
          className="btn btn-gold"
        >
          {({ loading }) =>
            loading ? "Preparing your certificate..." : "Download certificate"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}
