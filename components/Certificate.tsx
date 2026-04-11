"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import type { Trainee, Property } from "@/lib/types";

Font.register({
  family: "Cormorant",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjoUHbu7MvvyyGuA.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjoUHbu7MvvyyEuAbuvWzPHvw.ttf",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      src: "https://fonts.gstatic.com/s/cormorantgaramond/v16/co3YmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjoUHbu7MvvyyGuA.ttf",
      fontWeight: 600,
    },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.ttf",
      fontWeight: 500,
    },
  ],
});

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
    fontFamily: "Inter",
  },
  frame: {
    margin: 26,
    border: `1px solid ${PALETTE.gold}`,
    flex: 1,
    padding: 46,
    display: "flex",
    flexDirection: "column",
  },
  innerFrame: {
    border: `0.5px solid ${PALETTE.line}`,
    flex: 1,
    padding: 32,
    position: "relative",
  },
  header: {
    textAlign: "center",
    marginBottom: 8,
  },
  wordmark: {
    fontFamily: "Cormorant",
    fontSize: 32,
    color: PALETTE.ink,
    letterSpacing: 4,
    textAlign: "center",
  },
  eyebrow: {
    fontSize: 8,
    letterSpacing: 3,
    color: PALETTE.goldDark,
    textTransform: "uppercase",
    textAlign: "center",
    marginTop: 6,
    fontWeight: 500,
  },
  goldRule: {
    width: 40,
    height: 1,
    backgroundColor: PALETTE.gold,
    marginHorizontal: "auto",
    marginTop: 18,
    marginBottom: 18,
  },
  fineRule: {
    height: 0.5,
    backgroundColor: PALETTE.line,
    marginVertical: 20,
  },
  purposeLabel: {
    fontSize: 9,
    letterSpacing: 3,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 36,
    marginBottom: 12,
    fontFamily: "Inter",
    fontWeight: 500,
  },
  certTitle: {
    fontFamily: "Cormorant",
    fontSize: 36,
    color: PALETTE.ink,
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  awardedTo: {
    fontFamily: "Cormorant",
    fontSize: 11,
    fontStyle: "italic",
    color: PALETTE.muted,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 14,
  },
  name: {
    fontFamily: "Cormorant",
    fontSize: 48,
    color: PALETTE.ink,
    textAlign: "center",
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  hereby: {
    fontSize: 10,
    color: PALETTE.muted,
    textAlign: "center",
    lineHeight: 1.6,
    marginTop: 18,
    marginHorizontal: 40,
    fontFamily: "Inter",
  },
  credential: {
    fontFamily: "Inter",
    fontSize: 11,
    letterSpacing: 3,
    color: PALETTE.goldDark,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 14,
    fontWeight: 500,
  },
  property: {
    fontFamily: "Cormorant",
    fontSize: 14,
    fontStyle: "italic",
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
  footer: {
    marginTop: "auto",
    paddingTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  sigBlock: {
    alignItems: "center",
    width: "40%",
  },
  sigLine: {
    width: "100%",
    height: 0.5,
    backgroundColor: PALETTE.ink,
    marginBottom: 6,
  },
  sigSerif: {
    fontFamily: "Cormorant",
    fontStyle: "italic",
    fontSize: 20,
    color: PALETTE.ink,
    marginBottom: 8,
  },
  sigName: {
    fontSize: 9,
    color: PALETTE.charcoal,
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 500,
  },
  sigTitle: {
    fontSize: 7,
    letterSpacing: 2,
    color: PALETTE.muted,
    textAlign: "center",
    textTransform: "uppercase",
    marginTop: 3,
    fontFamily: "Inter",
  },
  meta: {
    marginTop: 28,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 14,
    borderTop: `0.5px solid ${PALETTE.line}`,
  },
  metaItem: {
    fontSize: 7,
    color: PALETTE.muted,
    letterSpacing: 1.5,
    fontFamily: "Inter",
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
              <Text style={styles.eyebrow}>Academy</Text>
              <View style={styles.goldRule} />
            </View>

            <Text style={styles.purposeLabel}>Certificate of Completion</Text>
            <View style={[styles.fineRule, { width: 120, marginHorizontal: "auto" }]} />

            <Text style={styles.awardedTo}>This certifies that</Text>
            <Text style={styles.name}>{trainee.name}</Text>
            <View style={[styles.goldRule, { marginTop: 12, marginBottom: 6 }]} />
            <Text style={styles.hereby}>
              has completed all six modules of the Regenesis Academy, passed
              the Final Assessment, and is hereby recognised as a
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
                <Text style={styles.sigSerif}>Tav Keen</Text>
                <View style={styles.sigLine} />
                <Text style={styles.sigName}>Tav Keen</Text>
                <Text style={styles.sigTitle}>Co-Founder · Regenesis</Text>
              </View>
              <View style={styles.sigBlock}>
                <Text style={[styles.sigSerif, { fontStyle: "normal" }]}>
                  {formatDate(issued)}
                </Text>
                <View style={styles.sigLine} />
                <Text style={styles.sigName}>Date of issuance</Text>
                <Text style={styles.sigTitle}>Regenesis Academy</Text>
              </View>
            </View>

            <View style={styles.meta}>
              <Text style={styles.metaItem}>Cert · {certId}</Text>
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
