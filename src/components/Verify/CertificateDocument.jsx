// CertificateDocument.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles for the PDF
const styles = StyleSheet.create({
  page: {
    padding: 50,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    color: "#106EB5",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },
  content: {
    marginTop: 20,
    lineHeight: 1.5,
  },
  footer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    right: 50,
    textAlign: "center",
    fontSize: 10,
    color: "gray",
  },
});

const CertificateDocument = ({ name, authCode, date, type }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Title based on certificate type */}
      <Text style={styles.title}>
        {type === "WORKshops"
          ? "Workshop Certificate"
          : "Certificate of Completion"}
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>This certifies that</Text>

      {/* Content */}
      <View style={styles.content}>
        <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 10 }}>
          {name}
        </Text>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          has successfully completed the requirements for the {type} program.
        </Text>
        <Text style={{ textAlign: "center", marginBottom: 10 }}>
          Auth Code: {authCode}
        </Text>
        <Text style={{ textAlign: "center" }}>
          Date: {new Date(date).toLocaleDateString()}
        </Text>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>Thank you for your participation!</Text>
    </Page>
  </Document>
);

export default CertificateDocument;
