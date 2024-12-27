// VerifyCertificate.jsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { PDFDownloadLink, BlobProvider } from "@react-pdf/renderer";
import CertificateDocument from "./CertificateDocument"; // Import the PDF document component

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [certificateDetails, setCertificateDetails] = useState(null);

  // Static certificate map
  const certificateMap = {
    E785641: "/PDFS/E785641.pdf",
    TB45683: "/PDFS/TB45683.pdf",
    ER78569: "/PDFS/ER78569.pdf",
    GT45868: "/PDFS/GT45868.pdf",
    SER4586: "/PDFS/SER4586.pdf",
    SER7898: "/PDFS/SER7898.pdf",
    KE7858: "/PDFS/KE7858.pdf",
    GHE96823: "/PDFS/GHE96823.pdf",
    AE9864: "/PDFS/AE9864.pdf",
    TTI4367: "/PDFS/TTI4367.pdf",
  };

  // Handle verification logic
  const handleVerification = async (e) => {
    e.preventDefault();
    setLoading(true);
    setVerificationStatus(null);
    setPdfBlob(null);
    setCertificateDetails(null);

    // Trim and convert to uppercase for consistency
    const certificateKey = certificateId.trim().toUpperCase();

    console.log("Verifying Certificate ID:", certificateKey);

    if (certificateMap[certificateKey]) {
      // Handle static mapping
      setIsVerified(true);
      setVerificationStatus("Certificate Verified Successfully!");
      setCertificateDetails({
        type: "Static",
        pdfPath: certificateMap[certificateKey],
      });
    } else {
      // Query the backend for verification and dynamic PDF creation
      const authCode = certificateKey;

      try {
        const response = await axios.get(
          "http://localhost:5000/api/student/verifycertificate",
          {
            params: { authCode: authCode },
          }
        );

        console.log("Backend Response:", response.data);

        const data = response.data.data;

        if (response.status === 200 && data.verified) {
          setIsVerified(true);
          setVerificationStatus("Certificate Verified Successfully!");
          setCertificateDetails({
            name: data.name,
            authCode: data.authCode,
            date: data.createdAt,
            type: data.type,
          });
        } else {
          setIsVerified(false);
          setVerificationStatus(
            data.message ||
              "Verification Failed. Please check the certificate number."
          );
        }
      } catch (error) {
        console.error("Verification Error:", error);
        setIsVerified(false);
        if (error.response && error.response.data && error.response.data.message) {
          setVerificationStatus(`Error: ${error.response.data.message}`);
        } else {
          setVerificationStatus(
            "An error occurred while verifying. Please try again."
          );
        }
      }
    }

    setLoading(false);
  };

  return (
    <section className="verify-section w-full min-h-[calc(80vh-10vh)] flex items-center justify-center bg-[#f4f6f9]">
      <div className="w-[90%] max-w-4xl h-auto bg-white rounded-3xl flex flex-col items-center p-6 md:p-8 shadow-lg">
        <div className="text-center mb-6 md:mb-8">
          <motion.h1
            className="text-2xl md:text-3xl font-bold text-[#106EB5]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            className="text-sm md:text-lg mt-2 md:mt-4 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            Please enter the unique certificate number to verify its authenticity.
          </motion.p>
        </div>

        <motion.form
          className="w-full max-w-md space-y-4"
          onSubmit={handleVerification}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        >
          <div>
            <label
              htmlFor="certificateId"
              className="block text-sm font-medium text-gray-600"
            >
              Credential ID
            </label>
            <input
              type="text"
              id="certificateId"
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-[#106EB5]"
              placeholder="Enter the Credential ID (e.g., 'E785641')"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 text-white bg-[#106EB5] rounded-md mt-4 md:mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
            whileHover={!loading ? { scale: 1.03 } : {}}
          >
            {loading ? "Verifying..." : "Verify Certificate"}
          </motion.button>
        </motion.form>

        {verificationStatus && (
          <motion.div
            className={`mt-4 text-center text-sm md:text-xl font-semibold ${
              isVerified ? "text-green-500" : "text-red-500"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          >
            {verificationStatus}
          </motion.div>
        )}

        {isVerified && certificateDetails && (
          <>
            {/* Render Static PDF */}
            {certificateDetails.type === "Static" && certificateDetails.pdfPath && (
              <motion.div
                className="mt-6 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                <iframe
                  src={certificateDetails.pdfPath}
                  className="w-full h-[500px] border rounded-md"
                  title="Certificate"
                />
              </motion.div>
            )}

            {/* Render Dynamic PDF */}
            {certificateDetails.type !== "Static" && (
              <motion.div
                className="mt-6 w-full flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
              >
                {/* BlobProvider generates a blob URL for the PDF */}
                <BlobProvider
                  document={
                    <CertificateDocument
                      name={certificateDetails.name}
                      authCode={certificateDetails.authCode}
                      date={certificateDetails.date}
                      type={certificateDetails.type}
                    />
                  }
                >
                  {({ blob, url, loading, error }) => {
                    if (loading) return <div>Loading PDF...</div>;
                    if (error) return <div>Error generating PDF.</div>;
                    return (
                      <iframe
                        src={url}
                        className="w-full h-[500px] border rounded-md"
                        title="Certificate"
                      />
                    );
                  }}
                </BlobProvider>

                {/* Download Link */}
                <PDFDownloadLink
                  document={
                    <CertificateDocument
                      name={certificateDetails.name}
                      authCode={certificateDetails.authCode}
                      date={certificateDetails.date}
                      type={certificateDetails.type}
                    />
                  }
                  fileName={`Certificate_${certificateDetails.authCode}.pdf`}
                  className="mt-4 px-4 py-2 bg-[#106EB5] text-white rounded-md"
                >
                  {({ loading }) =>
                    loading ? "Preparing Document..." : "Download Certificate"
                  }
                </PDFDownloadLink>
              </motion.div>
            )}

            {/* Display Certificate Details */}
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
            >
              <p className="text-lg font-medium">
                Name: {certificateDetails.name || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Auth Code: {certificateDetails.authCode}
              </p>
              <p className="text-sm text-gray-600">
                Date: {certificateDetails.date
                  ? new Date(certificateDetails.date).toLocaleDateString()
                  : "N/A"}
              </p>
              {certificateDetails.type && (
                <p className="text-sm text-gray-600">
                  Type: {certificateDetails.type}
                </p>
              )}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default VerifyCertificate;
