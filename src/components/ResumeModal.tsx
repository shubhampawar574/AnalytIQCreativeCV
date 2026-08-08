import React, { useState, useRef } from 'react';
import {
  X,
  Printer,
  Download,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  FileText,
  Loader2,
  Sparkles,
} from 'lucide-react';

import { PERSONAL_INFO, EDUCATION_DATA, ACHIEVEMENTS_DATA } from '../data/portfolioData';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const resumeRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  // ============================================================
  // PRINT
  // ============================================================

  const handlePrint = () => {
    window.print();
  };

  // ============================================================
  // DOWNLOAD PDF
  // ============================================================

  const handleDownloadPDF = async () => {
    if (!resumeRef.current || isDownloading) return;

    setIsDownloading(true);

    const element = resumeRef.current;

    // Save the original styles so the UI can be restored
    // after PDF generation.
    const originalStyles = {
      height: element.style.height,
      maxHeight: element.style.maxHeight,
      overflow: element.style.overflow,
      overflowY: element.style.overflowY,
      width: element.style.width,
    };

    try {
      // ----------------------------------------------------------
      // STEP 1: Temporarily remove scrolling
      // ----------------------------------------------------------

      element.style.height = 'auto';
      element.style.maxHeight = 'none';
      element.style.overflow = 'visible';
      element.style.overflowY = 'visible';
      element.style.width = '100%';

      // Give the browser time to recalculate layout.
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            resolve();
          });
        });
      });

      // ----------------------------------------------------------
      // STEP 2: Wait for fonts
      // ----------------------------------------------------------

      if ('fonts' in document) {
        try {
          await document.fonts.ready;
        } catch (fontError) {
          console.warn('Font loading warning:', fontError);
        }
      }

      // ----------------------------------------------------------
      // STEP 3: Wait for all images
      // ----------------------------------------------------------

      const images = Array.from(
        element.querySelectorAll('img')
      );

      await Promise.all(
        images.map(
          (img) =>
            new Promise<void>((resolve) => {
              if (img.complete) {
                resolve();
                return;
              }

              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        )
      );

      // ----------------------------------------------------------
      // STEP 4: Capture complete resume
      // ----------------------------------------------------------

      const canvas = await html2canvas(element, {
        scale: 2,

        useCORS: true,

        allowTaint: false,

        logging: false,

        backgroundColor: '#0f172a',

        // Capture complete content rather than only
        // the visible scroll area.
        width: element.scrollWidth,
        height: element.scrollHeight,

        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight,

        scrollX: 0,
        scrollY: 0,

        onclone: (clonedDocument) => {
          // ------------------------------------------------------
          // Get cloned resume
          // ------------------------------------------------------

          const clonedElement =
            clonedDocument.querySelector(
              '#printable-resume-content'
            ) as HTMLElement | null;

          if (clonedElement) {
            clonedElement.style.height = 'auto';
            clonedElement.style.maxHeight = 'none';
            clonedElement.style.overflow = 'visible';
            clonedElement.style.overflowY = 'visible';
          }

          // ------------------------------------------------------
          // Remove buttons / UI controls from PDF
          // ------------------------------------------------------

          clonedDocument
            .querySelectorAll('.no-print')
            .forEach((node) => {
              const htmlNode = node as HTMLElement;

              htmlNode.style.display = 'none';
            });

          // ------------------------------------------------------
          // Disable animations and transitions
          // ------------------------------------------------------

          const printStyle =
            clonedDocument.createElement('style');

          printStyle.textContent = `
            *,
            *::before,
            *::after {
              animation: none !important;
              transition: none !important;
              caret-color: transparent !important;
            }

            html,
            body {
              overflow: visible !important;
              height: auto !important;
            }

            #printable-resume-content {
              height: auto !important;
              max-height: none !important;
              overflow: visible !important;
              overflow-y: visible !important;
            }

            .no-print {
              display: none !important;
            }
          `;

          clonedDocument.head.appendChild(printStyle);

          // ------------------------------------------------------
          // Fix unsupported modern CSS colors
          // ------------------------------------------------------

          const styleElements =
            clonedDocument.querySelectorAll('style');

          styleElements.forEach((style) => {
            if (!style.textContent) return;

            style.textContent = style.textContent
              .replace(
                /oklch\([^)]*\)/gi,
                '#10b981'
              )
              .replace(
                /oklab\([^)]*\)/gi,
                '#10b981'
              )
              .replace(
                /lch\([^)]*\)/gi,
                '#10b981'
              )
              .replace(
                /lab\([^)]*\)/gi,
                '#10b981'
              );
          });

          // ------------------------------------------------------
          // Make external images canvas-friendly
          // ------------------------------------------------------

          clonedDocument
            .querySelectorAll('img')
            .forEach((img) => {
              img.setAttribute(
                'crossorigin',
                'anonymous'
              );

              img.setAttribute(
                'referrerpolicy',
                'no-referrer'
              );
            });
        },
      });

      // ----------------------------------------------------------
      // STEP 5: Validate canvas
      // ----------------------------------------------------------

      if (!canvas.width || !canvas.height) {
        throw new Error(
          'Canvas was generated with invalid dimensions.'
        );
      }

      console.log(
        `Resume canvas: ${canvas.width} x ${canvas.height}`
      );

      // ----------------------------------------------------------
      // STEP 6: Create A4 PDF
      // ----------------------------------------------------------

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      // A4 dimensions in mm
      const pageWidth =
        pdf.internal.pageSize.getWidth();

      const pageHeight =
        pdf.internal.pageSize.getHeight();

      // Small margin around the resume
      const margin = 8;

      const printableWidth =
        pageWidth - margin * 2;

      const printableHeight =
        pageHeight - margin * 2;

      // ----------------------------------------------------------
      // STEP 7: Calculate how many pixels fit on one A4 page
      // ----------------------------------------------------------

      const pixelsPerMillimeter =
        canvas.width / printableWidth;

      const pageHeightPixels = Math.floor(
        printableHeight * pixelsPerMillimeter
      );

      // ----------------------------------------------------------
      // STEP 8: Split full canvas into A4-sized sections
      // ----------------------------------------------------------

      let currentY = 0;

      let pageNumber = 0;

      while (currentY < canvas.height) {
        pageNumber++;

        const remainingHeight =
          canvas.height - currentY;

        const currentPageHeight =
          Math.min(
            pageHeightPixels,
            remainingHeight
          );

        // --------------------------------------------------------
        // Create temporary canvas for this PDF page
        // --------------------------------------------------------

        const pageCanvas =
          document.createElement('canvas');

        pageCanvas.width = canvas.width;

        pageCanvas.height =
          currentPageHeight;

        const context =
          pageCanvas.getContext('2d');

        if (!context) {
          throw new Error(
            'Unable to create PDF page canvas.'
          );
        }

        // --------------------------------------------------------
        // Background
        // --------------------------------------------------------

        context.fillStyle = '#0f172a';

        context.fillRect(
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        );

        // --------------------------------------------------------
        // Copy corresponding section from full resume canvas
        // --------------------------------------------------------

        context.drawImage(
          canvas,

          // Source
          0,
          currentY,
          canvas.width,
          currentPageHeight,

          // Destination
          0,
          0,
          canvas.width,
          currentPageHeight
        );

        // --------------------------------------------------------
        // Convert page canvas to image
        // --------------------------------------------------------

        const imageData =
          pageCanvas.toDataURL(
            'image/jpeg',
            0.95
          );

        // --------------------------------------------------------
        // Calculate displayed height in mm
        // --------------------------------------------------------

        const imageHeight =
          currentPageHeight /
          pixelsPerMillimeter;

        // --------------------------------------------------------
        // Add new PDF page
        // --------------------------------------------------------

        if (pageNumber > 1) {
          pdf.addPage();
        }

        // --------------------------------------------------------
        // Add image to PDF
        // --------------------------------------------------------

        pdf.addImage(
          imageData,
          'JPEG',
          margin,
          margin,
          printableWidth,
          imageHeight,
          undefined,
          'FAST'
        );

        // Move to next portion of canvas
        currentY += currentPageHeight;
      }

      // ----------------------------------------------------------
      // STEP 9: Add PDF metadata
      // ----------------------------------------------------------

      pdf.setProperties({
        title:
          'Shubham Pawar - Resume',

        subject:
          'PGDM Business Analytics | Ex-SAP Solution Support Engineer',

        author:
          'Shubham Pawar',

        creator:
          'Shubham Pawar Portfolio',

        keywords:
          'Shubham Pawar, MDI Gurgaon, SAP, Business Analytics, Resume',
      });

      // ----------------------------------------------------------
      // STEP 10: Download
      // ----------------------------------------------------------

      pdf.save(
        'Shubham_Pawar_Resume_MDI_Gurgaon.pdf'
      );

      console.log(
        `PDF generated successfully with ${pageNumber} page(s).`
      );

    } catch (error) {
      // ----------------------------------------------------------
      // ERROR HANDLING
      // ----------------------------------------------------------

      console.error(
        'Failed to generate PDF:',
        error
      );

      alert(
        'Unable to generate the PDF automatically. ' +
        'The browser print dialog will open instead. ' +
        'Select "Save as PDF".'
      );

      // Reliable fallback
      window.print();

    } finally {
      // ----------------------------------------------------------
      // STEP 11: Restore original UI
      // ----------------------------------------------------------

      element.style.height =
        originalStyles.height;

      element.style.maxHeight =
        originalStyles.maxHeight;

      element.style.overflow =
        originalStyles.overflow;

      element.style.overflowY =
        originalStyles.overflowY;

      element.style.width =
        originalStyles.width;

      setIsDownloading(false);
    }
  };

  // ============================================================
  // COMPONENT UI
  // ============================================================

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-3
        sm:p-5
        bg-slate-950/85
        backdrop-blur-md
      "
    >
      <div
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-3xl
          max-w-4xl
          w-full
          max-h-[92vh]
          flex
          flex-col
          shadow-2xl
          relative
          overflow-hidden
          printable-resume-container
        "
      >
        {/* ======================================================
            ACTION BAR
        ======================================================= */}

        <div
          className="
            p-4
            sm:p-5
            bg-slate-950
            border-b
            border-slate-800
            flex
            flex-wrap
            items-center
            justify-between
            gap-3
            shrink-0
            no-print
          "
        >
          {/* ----------------------------------------------------
              Title
          ----------------------------------------------------- */}

          <div className="flex items-center gap-3">
            <div
              className="
                p-2
                rounded-xl
                bg-emerald-500/10
                border
                border-emerald-500/20
                text-emerald-400
              "
            >
              <FileText className="w-5 h-5" />
            </div>

            <div>
              <h3
                className="
                  text-base
                  sm:text-lg
                  font-extrabold
                  text-white
                  flex
                  items-center
                  gap-2
                "
              >
                Verified Executive Resume

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-wider
                    px-2
                    py-0.5
                    rounded-full
                    bg-emerald-500/20
                    text-emerald-300
                    font-semibold
                    border
                    border-emerald-500/30
                  "
                >
                  MDI Gurgaon '26
                </span>
              </h3>

              <p className="text-xs text-slate-400">
                Shubham Pawar — PGDM Business Analytics |
                Ex-SAP Support Engineer
              </p>
            </div>
          </div>

          {/* ----------------------------------------------------
              Action Buttons
          ----------------------------------------------------- */}

          <div className="flex items-center gap-2">
            {/* Download PDF */}

            <button
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-emerald-500
                hover:bg-emerald-400
                text-slate-950
                font-bold
                text-xs
                shadow-lg
                shadow-emerald-500/20
                transition-all
                hover:scale-105
                disabled:opacity-50
                disabled:cursor-not-allowed
                disabled:hover:scale-100
              "
            >
              {isDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />

                  <span>
                    Generating PDF...
                  </span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />

                  <span>
                    Download PDF
                  </span>
                </>
              )}
            </button>

            {/* Print */}

            <button
              onClick={handlePrint}
              className="
                flex
                items-center
                gap-1.5
                px-3.5
                py-2
                rounded-xl
                bg-slate-800
                hover:bg-slate-700
                text-slate-200
                text-xs
                font-semibold
                border
                border-slate-700
                transition-all
              "
            >
              <Printer
                className="
                  w-4
                  h-4
                  text-emerald-400
                "
              />

              <span>
                Print / Save PDF
              </span>
            </button>

            {/* Close */}

            <button
              onClick={onClose}
              className="
                p-2
                rounded-xl
                bg-slate-800
                text-slate-400
                hover:text-white
                hover:bg-slate-700
                transition-colors
              "
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ======================================================
            RESUME BODY
        ======================================================= */}

        <div
          ref={resumeRef}
          id="printable-resume-content"
          className="
            printable-resume-body
            flex-1
            p-6
            sm:p-8
            overflow-y-auto
            space-y-6
            text-slate-200
            text-xs
            leading-relaxed
            font-sans
            scrollbar-thin
            scrollbar-thumb-slate-800
            bg-slate-900
          "
        >
          {/* ====================================================
              HEADER
          ===================================================== */}

          <div
            className="
              border-b
              border-slate-800
              pb-5
              flex
              flex-col
              sm:flex-row
              items-start
              justify-between
              gap-4
            "
          >
            <div
              className="
                space-y-2
                flex-1
              "
            >
              {/* Name */}

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <h1
                  className="
                    text-2xl
                    sm:text-3xl
                    font-black
                    text-white
                  "
                >
                  {PERSONAL_INFO.name}
                </h1>

                <span
                  className="
                    text-[11px]
                    font-bold
                    text-emerald-400
                    bg-emerald-950/60
                    border
                    border-emerald-500/30
                    px-2.5
                    py-1
                    rounded-full
                  "
                >
                  MDI Gurgaon Roll:{' '}
                  {PERSONAL_INFO.rollNo}
                </span>
              </div>

              {/* Title */}

              <p
                className="
                  font-extrabold
                  text-emerald-400
                  text-sm
                  sm:text-base
                "
              >
                {PERSONAL_INFO.title}
              </p>

              {/* Contact Information */}

              <div
                className="
                  flex
                  flex-wrap
                  gap-x-4
                  gap-y-1.5
                  text-slate-300
                  text-[11px]
                  pt-1
                "
              >
                {/* Location */}

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <MapPin
                    className="
                      w-3.5
                      h-3.5
                      text-emerald-400
                    "
                  />

                  {PERSONAL_INFO.location}
                </span>

                {/* Email */}

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Mail
                    className="
                      w-3.5
                      h-3.5
                      text-emerald-400
                    "
                  />

                  {PERSONAL_INFO.email}
                </span>

                {/* Phone */}

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Phone
                    className="
                      w-3.5
                      h-3.5
                      text-emerald-400
                    "
                  />

                  {PERSONAL_INFO.contact}
                </span>

                {/* LinkedIn */}

                <span
                  className="
                    flex
                    items-center
                    gap-1
                  "
                >
                  <Linkedin
                    className="
                      w-3.5
                      h-3.5
                      text-emerald-400
                    "
                  />

                  {PERSONAL_INFO.linkedin}
                </span>
              </div>

              {/* Tagline */}

              <p
                className="
                  text-slate-300
                  italic
                  pt-1
                  text-[11px]
                "
              >
                {PERSONAL_INFO.tagline}
              </p>
            </div>

            {/* ==================================================
                PROFILE PHOTO
            =================================================== */}

            <div
              className="
                shrink-0
                flex
                flex-col
                items-center
                gap-1.5
              "
            >
              <div
                className="
                  w-20
                  h-20
                  sm:w-24
                  sm:h-24
                  rounded-2xl
                  overflow-hidden
                  border-2
                  border-emerald-500/40
                  shadow-xl
                  relative
                  group
                "
              >
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Shubham Pawar"
                  className="
                    w-full
                    h-full
                    object-cover
                    object-[center_18%]
                    scale-125
                  "
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />
              </div>

              <span
                className="
                  text-[10px]
                  text-slate-400
                  font-semibold
                  tracking-wider
                  uppercase
                "
              >
                PGDM BA '26
              </span>
            </div>
          </div>

          {/* ====================================================
              CORE EXECUTIVE HIGHLIGHTS
          ===================================================== */}

          <div>
            <h4
              className="
                font-extrabold
                uppercase
                text-emerald-400
                tracking-wider
                mb-2
                flex
                items-center
                gap-1.5
              "
            >
              <Sparkles className="w-3.5 h-3.5" />

              Core Executive Highlights
            </h4>

            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-4
                gap-2.5
                text-center
              "
            >
              {/* 35 Months */}

              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >
                <span
                  className="
                    font-black
                    text-white
                    text-base
                    block
                  "
                >
                  35 Months
                </span>

                <span
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  SAP Support Experience
                </span>
              </div>

              {/* 700+ */}

              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >
                <span
                  className="
                    font-black
                    text-white
                    text-base
                    block
                  "
                >
                  700+ Issues
                </span>

                <span
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  Resolved within SLA
                </span>
              </div>

              {/* 99.73 */}

              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >
                <span
                  className="
                    font-black
                    text-white
                    text-base
                    block
                  "
                >
                  99.73 %ile
                </span>

                <span
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  MHT-CET Entrance Rank
                </span>
              </div>

              {/* Awards */}

              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >
                <span
                  className="
                    font-black
                    text-white
                    text-base
                    block
                  "
                >
                  21 Awards
                </span>

                <span
                  className="
                    text-[10px]
                    text-slate-400
                  "
                >
                  SAP Appreciation Honors
                </span>
              </div>
            </div>
          </div>

          {/* ====================================================
              WORK EXPERIENCE
          ===================================================== */}

          <div>
            <h4
              className="
                font-extrabold
                uppercase
                text-emerald-400
                tracking-wider
                mb-2
              "
            >
              Work Experience (35 Months)
            </h4>

            <div className="space-y-3">
              {/* SAP */}

              <div
                className="
                  p-4
                  rounded-2xl
                  bg-slate-950
                  border
                  border-slate-800
                  space-y-2
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    sm:items-center
                    font-bold
                    text-white
                    gap-1
                  "
                >
                  <span className="text-sm">
                    Associate Solution Support Engineer —
                    SAP CallidusCloud (India) Pvt. Ltd.
                  </span>

                  <span
                    className="
                      text-emerald-400
                      text-[11px]
                    "
                  >
                    July 2023 – May 2026 |
                    Hyderabad
                  </span>
                </div>

                <ul
                  className="
                    list-disc
                    list-inside
                    space-y-1
                    text-slate-300
                    text-[11px]
                    leading-relaxed
                  "
                >
                  <li>
                    Resolved 700+ client issues across
                    SAP Territory, Quota, and SAP
                    Business Objects within strict SLA
                    guidelines.
                  </li>

                  <li>
                    Troubleshot 100+ critical production
                    escalations, driving live in-meeting
                    resolutions under strict deadlines.
                  </li>

                  <li>
                    Mentored 30+ new support engineers;
                    authored 10 wrap-up video guides and
                    published 5 technical newsletters.
                  </li>

                  <li>
                    Evaluated 10+ beta features in
                    Intelligent Support Environment;
                    earned 21 formal Appreciation Awards.
                  </li>

                  <li>
                    Synchronized Database, Network &
                    Operations teams to concurrently debug
                    multi-tiered platform bugs.
                  </li>
                </ul>
              </div>

              {/* Fiserv */}

              <div
                className="
                  p-4
                  rounded-2xl
                  bg-slate-950
                  border
                  border-slate-800
                  space-y-2
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    sm:items-center
                    font-bold
                    text-white
                    gap-1
                  "
                >
                  <span className="text-sm">
                    Technology Intern —
                    Fiserv India Pvt. Ltd.
                  </span>

                  <span
                    className="
                      text-emerald-400
                      text-[11px]
                    "
                  >
                    2022 (9 Weeks)
                  </span>
                </div>

                <ul
                  className="
                    list-disc
                    list-inside
                    space-y-1
                    text-slate-300
                    text-[11px]
                    leading-relaxed
                  "
                >
                  <li>
                    Mastered Salesforce CRM fundamentals;
                    completed Trailhead modules for sales
                    workflow optimization.
                  </li>

                  <li>
                    Developed no-code Salesforce
                    applications and designed custom
                    dashboards to plot lead generation
                    tracking.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ====================================================
              EDUCATION
          ===================================================== */}

          <div>
            <h4
              className="
                font-extrabold
                uppercase
                text-emerald-400
                tracking-wider
                mb-2
              "
            >
              Educational Qualification
            </h4>

            <div className="space-y-2">
              {EDUCATION_DATA.map((e) => (
                <div
                  key={e.id}
                  className="
                    flex
                    flex-col
                    sm:flex-row
                    justify-between
                    p-3
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                    gap-1
                  "
                >
                  <div>
                    <span className="font-bold text-white">
                      {e.degree}
                    </span>

                    {' — '}

                    <span className="text-slate-300">
                      {e.institution}
                    </span>
                  </div>

                  <div
                    className="
                      text-emerald-400
                      font-bold
                      text-[11px]
                    "
                  >
                    <span>
                      {e.score}
                    </span>

                    {' | '}

                    <span
                      className="
                        text-slate-400
                        font-normal
                      "
                    >
                      {e.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ====================================================
              ACHIEVEMENTS
          ===================================================== */}

          <div>
            <h4
              className="
                font-extrabold
                uppercase
                text-emerald-400
                tracking-wider
                mb-2
              "
            >
              Academic & Exam Achievements
            </h4>

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-2.5
              "
            >
              {ACHIEVEMENTS_DATA.map((a) => (
                <div
                  key={a.id}
                  className="
                    p-3
                    rounded-xl
                    bg-slate-950
                    border
                    border-slate-800
                  "
                >
                  <span
                    className="
                      font-bold
                      text-amber-300
                      block
                      text-xs
                    "
                  >
                    {a.title} ({a.metric})
                  </span>

                  <span
                    className="
                      text-slate-400
                      text-[11px]
                      leading-snug
                      block
                      mt-0.5
                    "
                  >
                    {a.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};