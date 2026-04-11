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
import { NOVAK_SIGNATURE, TAV_SIGNATURE } from "@/lib/signatures";

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
    margin: 14,
    border: `1px solid ${PALETTE.gold}`,
    flex: 1,
    padding: 14,
    display: "flex",
    flexDirection: "column",
  },
  innerFrame: {
    border: `0.5px solid ${PALETTE.line}`,
    flex: 1,
    padding: 14,
    position: "relative",
  },
  header: {
    textAlign: "center",
  },
  wordmark: {
    fontFamily: SERIF,
    fontSize: 22,
    color: PALETTE.ink,
    letterSpacing: 4,
    textAlign: "center",
  },
  eyebrow: {
    fontSize: 7,
    letterSpacing: 2.5,
    color: PALETTE.goldDark,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 3,
    fontWeight: 500,
  },
  goldRule: {
    width: 32,
    height: 1,
    backgroundColor: PALETTE.gold,
    marginHorizontal: "auto",
    marginTop: 6,
    marginBottom: 6,
  },
  awardedTo: {
    fontFamily: SERIF_ITALIC,
    fontSize: 10,
    color: PALETTE.muted,
    textAlign: "center",
    marginTop: 4,
    marginBottom: 2,
  },
  name: {
    fontFamily: SERIF,
    fontSize: 34,
    color: PALETTE.ink,
    textAlign: "center",
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  hereby: {
    fontSize: 9,
    color: PALETTE.muted,
    textAlign: "center",
    lineHeight: 1.4,
    marginTop: 4,
    marginHorizontal: 60,
    fontFamily: SANS,
  },
  credential: {
    fontFamily: SANS,
    fontSize: 10,
    letterSpacing: 3,
    color: PALETTE.goldDark,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 6,
    fontWeight: 500,
  },
  property: {
    fontFamily: SERIF_ITALIC,
    fontSize: 12,
    color: PALETTE.charcoal,
    textAlign: "center",
    marginTop: 8,
  },
  cohort: {
    fontSize: 7,
    letterSpacing: 2.5,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 2,
  },
  footer: {
    marginTop: "auto",
    paddingTop: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  sigBlock: {
    alignItems: "center",
    width: "42%",
  },
  sigImageWrap: {
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 2,
  },
  sigImage: {
    height: 26,
    objectFit: "contain",
  },
  sigLine: {
    width: "80%",
    height: 0.5,
    backgroundColor: PALETTE.ink,
    marginBottom: 3,
  },
  sigName: {
    fontSize: 9,
    color: PALETTE.ink,
    textAlign: "center",
    fontFamily: SERIF,
    fontWeight: 500,
    letterSpacing: 0.5,
  },
  sigTitle: {
    fontSize: 6,
    letterSpacing: 2,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 2,
    fontFamily: SANS,
  },
  meta: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    borderTop: `0.5px solid ${PALETTE.line}`,
  },
  metaItem: {
    fontSize: 6,
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
              <Text style={styles.wordmark}>REGENESIS</Text>
              <Text style={styles.eyebrow}>Academy · Certificate of Completion</Text>
              <View style={styles.goldRule} />
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
            <Text style={styles.cohort}>
              {property.cohort} · {property.location}
            </Text>

            <View style={styles.footer}>
              <View style={styles.sigBlock}>
                <View style={styles.sigImageWrap}>
                  <Image
                    src={NOVAK_SIGNATURE}
                    style={[styles.sigImage, { height: 24 }]}
                  />
                </View>
                <View style={styles.sigLine} />
                <Text style={styles.sigName}>Novak Djokovic</Text>
                <Text style={styles.sigTitle}>Co-Founder · Regenesis</Text>
              </View>
              <View style={styles.sigBlock}>
                <View style={styles.sigImageWrap}>
                  <Image
                    src={TAV_SIGNATURE}
                    style={[styles.sigImage, { height: 28 }]}
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
      <div className="border border-line bg-white shadow-sm" style={{ height: 560 }}>
        <PDFViewer width="100%" height="100%" showToolbar={false}>
          <CertificateDocument trainee={trainee} property={property} />
        </PDFViewer>
      </div>
      <div className="flex items-center gap-4">
        <PDFDownloadLink
          document={<CertificateDocument trainee={trainee} property={property} />}
          fileName={filename}
          className="btn btn-gold"
        >
          {({ loading }) => (loading ? "Preparing…" : "Download certificate")}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
