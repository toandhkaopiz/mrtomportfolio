import { jsPDF } from 'jspdf';
import { CONTACT, ABOUT, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, LANGUAGES_DATA } from './constants';

export const generateProfessionalCV = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to check page break
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - 80) {
      addFooter();
      doc.addPage();
      yPosition = margin + 20;
      return true;
    }
    return false;
  };

  // Helper function to add section header
  const addSectionHeader = (title: string) => {
    checkPageBreak(60);
    yPosition += 25;

    // Decorative line
    doc.setDrawColor(20, 184, 166);
    doc.setLineWidth(2);
    doc.line(margin, yPosition, margin + 80, yPosition);

    yPosition += 18;

    // Section title
    doc.setTextColor(15, 118, 110);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(title.toUpperCase(), margin, yPosition);

    yPosition += 8;

    // Underline
    doc.setDrawColor(20, 184, 166);
    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);

    yPosition += 25;
  };

  // Helper to add footer
  const addFooter = () => {
    const currentPage = doc.getCurrentPageInfo().pageNumber;
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'italic');

    // Left: Name and title
    doc.text(`${CONTACT.name} - ${CONTACT.title}`, margin, pageHeight - 30);

    // Center: Page number (will be updated later)
    doc.text(`Page ${currentPage}`, pageWidth / 2, pageHeight - 30, { align: 'center' });

    // Right: Date
    const date = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    doc.text(`Generated: ${date}`, pageWidth - margin, pageHeight - 30, { align: 'right' });
  };

  // ============ HEADER SECTION ============
  // Background rectangle
  doc.setFillColor(15, 118, 110);
  doc.rect(0, 0, pageWidth, 100, 'F');

  // Name
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(26);
  doc.setFont('helvetica', 'bold');
  doc.text(CONTACT.name, margin, 40);

  // Title
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text(CONTACT.title, margin, 62);

  // Contact info - email
  doc.setFontSize(9);
  doc.text(`📧 ${CONTACT.email}`, margin, 80);

  // Contact info - LinkedIn
  doc.text(`💼 ${CONTACT.linkedin.replace('https://', '')}`, margin, 92);

  yPosition = 130;

  // ============ PROFESSIONAL SUMMARY ============
  addSectionHeader('Professional Summary');

  doc.setFontSize(10);
  doc.setTextColor(30, 41, 59);
  doc.setFont('helvetica', 'normal');

  const bioLines = doc.splitTextToSize(CONTACT.bio, contentWidth);
  for (let i = 0; i < bioLines.length; i++) {
    doc.text(bioLines[i], margin, yPosition + (i * 14));
  }
  yPosition += bioLines.length * 14 + 20;

  // ============ ABOUT ============
  checkPageBreak(60);
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  const aboutLines = doc.splitTextToSize(ABOUT, contentWidth);
  for (let i = 0; i < aboutLines.length; i++) {
    doc.text(aboutLines[i], margin, yPosition + (i * 14));
  }
  yPosition += aboutLines.length * 14 + 25;

  // ============ EXPERIENCE ============
  addSectionHeader('Professional Experience');

  for (const exp of EXPERIENCE_DATA) {
    checkPageBreak(120);

    // Role
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 118, 110);
    doc.text(exp.role, margin, yPosition);
    yPosition += 20;

    // Company
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(20, 184, 166);
    doc.text(exp.company, margin, yPosition);

    // Period on the right
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(9);
    doc.setTextColor(71, 85, 105);
    doc.text(exp.period, pageWidth - margin, yPosition, { align: 'right' });

    yPosition += 18;

    // Description bullets
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);

    for (const desc of exp.description) {
      checkPageBreak(30);
      const bulletLines = doc.splitTextToSize(`• ${desc}`, contentWidth - 20);
      for (let i = 0; i < bulletLines.length; i++) {
        doc.text(bulletLines[i], margin + 12, yPosition + (i * 12));
      }
      yPosition += bulletLines.length * 12 + 5;
    }

    // Skills
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(20, 184, 166);
    const skillsText = `Skills: ${exp.skills.join(', ')}`;
    const skillLines = doc.splitTextToSize(skillsText, contentWidth - 20);
    yPosition += 5;
    for (let i = 0; i < skillLines.length; i++) {
      doc.text(skillLines[i], margin + 12, yPosition + (i * 11));
    }
    yPosition += skillLines.length * 11 + 20;
  }

  // ============ PROJECTS ============
  addSectionHeader('Key Projects');

  for (const project of PROJECTS_DATA) {
    checkPageBreak(80);

    // Project Title
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 118, 110);
    doc.text(project.title, margin, yPosition);

    // Team Size on the right
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(71, 85, 105);
    doc.text(`Team Size: ${project.teamSize}`, pageWidth - margin, yPosition, { align: 'right' });

    yPosition += 18;

    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    const descLines = doc.splitTextToSize(project.description, contentWidth - 15);
    for (let i = 0; i < descLines.length; i++) {
      doc.text(descLines[i], margin + 8, yPosition + (i * 12));
    }
    yPosition += descLines.length * 12 + 8;

    // Technologies
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(20, 184, 166);
    const techText = `Technologies: ${project.tags.join(', ')}`;
    const techLines = doc.splitTextToSize(techText, contentWidth - 15);
    for (let i = 0; i < techLines.length; i++) {
      doc.text(techLines[i], margin + 8, yPosition + (i * 11));
    }
    yPosition += techLines.length * 11 + 15;
  }

  // ============ SKILLS ============
  addSectionHeader('Technical Skills & Competencies');

  for (const category of SKILLS_DATA) {
    checkPageBreak(35);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 118, 110);
    doc.text(`${category.title}:`, margin, yPosition);
    yPosition += 16;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(30, 41, 59);
    const skillsText = category.skills.join(' • ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth - 15);
    for (let i = 0; i < skillLines.length; i++) {
      doc.text(skillLines[i], margin + 8, yPosition + (i * 12));
    }
    yPosition += skillLines.length * 12 + 12;
  }

  // ============ LANGUAGES ============
  addSectionHeader('Languages');

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(30, 41, 59);

  for (const lang of LANGUAGES_DATA) {
    checkPageBreak(18);
    doc.text(`• ${lang.name}: ${lang.proficiency}`, margin + 8, yPosition);
    yPosition += 15;
  }

  // Add footer to last page
  addFooter();

  // Update page numbers on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    doc.setFont('helvetica', 'italic');
    doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 30, { align: 'center' });
  }

  // Save the PDF
  doc.save('Douglas_Tony_Senior_Backend_Engineer_CV.pdf');
};

