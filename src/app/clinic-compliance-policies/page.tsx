import { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import PillarLayout from '@/components/PillarLayout';

export const metadata: Metadata = {
  title: 'Clinic Compliance Policies: Every Document Your Medical Practice Needs',
  description: 'The complete directory of mandatory clinic compliance policies. From HIPAA to OSHA, build an audit-ready medical manual in minutes.',
  alternates: { canonical: '/clinic-compliance-policies' },
};

export default function ClinicCompliancePillarPage() {
  const sections = [
    {
      id: 'mandatory-manuals',
      title: 'The Essential Medical Policy Manual',
      content: (
        <>
          <p>Running a compliant medical practice requires more than just clinical skill; it requires a library of written policies that define how your business operates. These documents serve as your "source of truth" during insurance audits, regulatory reviews, and legal disputes.</p>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> HIPAA Privacy & Security</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> OSHA Safety Manual</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Infection Control SOPs</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Employee Handbook</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Disaster Recovery Plan</li>
             <li className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-green-500" /> Medication Management</li>
          </ul>
        </>
      )
    },
    {
      id: 'osha-compliance',
      title: 'OSHA Standards for Clinics',
      content: (
        <>
          <p>OSHA compliance is mandatory for any clinic with employees. This includes bloodborne pathogen standards, hazard communication, and personal protective equipment (PPE) protocols.</p>
          <p>Your OSHA policies must define how medical waste is disposed of, the process for reporting clinical needlesticks, and the location of Safety Data Sheets (SDS) for all clinical chemicals.</p>
        </>
      )
    },
    {
      id: 'infection-control',
      title: 'Clinical Infection Control Protocols',
      content: (
        <>
          <p>Post-pandemic, infection control has become a top priority for clinical audits. Your SOPs must define sterilization procedures for medical instruments, clinic sanitation schedules, and staff hand-hygiene requirements.</p>
          <div className="bg-slate-100 p-8 rounded-2xl border border-slate-200">
             <h4 className="font-bold text-slate-900 mb-4">SOP Example: Sanitation Schedule</h4>
             <p className="font-serif italic text-sm">"Clinical treatment rooms must be sanitized between every patient encounter using hospital-grade EPA-registered disinfectants. High-touch administrative surfaces (front desk, lobby) shall be sanitized every 4 hours during clinical operations..."</p>
          </div>
        </>
      )
    },
    {
      id: 'patient-rights',
      title: 'Patient Rights & Grievance Procedures',
      content: (
        <>
          <p>Transparency is a key component of healthcare compliance. Clinics must provide patients with a written statement of their rights and a clear, documented process for filing a clinical grievance.</p>
          <p>Our generator creates Patient Rights documents that align with federal standards and include placeholders for your clinic's specific patient advocate or medical director contact information.</p>
        </>
      )
    },
    {
      id: 'audit-readiness',
      title: 'Preparing for a Regulatory Clinical Audit',
      content: (
        <>
          <p>The goal of professional policy generation is permanent audit-readiness. This means your policies are not just "on a shelf," but are actively followed and regularly updated.</p>
          <p>We recommend a "Clinical Compliance Calendar" where different sections of your policy manual are reviewed and re-signed by clinical staff every quarter.</p>
        </>
      )
    }
  ];

  const faqs = [
    { question: "Do small clinics really get audited?", answer: "Yes. Insurance payers (Medicare, private insurers) and state medical boards can audit any practice at any time, often triggered by a patient complaint or statistical anomaly in billing." },
    { question: "What is an 'Evidence-Based' policy?", answer: "An evidence-based policy is one derived from clinical research and recognized standards of care (like CDC or professional specialty board guidelines)." },
    { question: "How long must I keep medical records?", answer: "Retention rules vary by state, but federal HIPAA rules generally require retention of clinical documentation for at least 6 years from the date of its creation or last use." },
    { question: "Is a digital policy manual valid?", answer: "Yes, provided that all staff members have immediate access to it during clinical hours and that version control is maintained." },
    { question: "Should my medical director sign every policy?", answer: "Yes, clinical best practice is for the Medical Director to review and formally sign off on all clinical Standard Operating Procedures annually." }
  ];

  return (
    <PillarLayout
      title="Clinic Compliance Policies"
      industry="Clinic Compliance"
      headline="Clinic Compliance Policies: The Definitive Documentation Guide."
      subheadline="Build a complete clinical manual with audit-ready policies for HIPAA, OSHA, and operations."
      introduction="Compliance is the foundation of clinical excellence. A well-documented practice is a safe practice—protecting patients, staff, and practitioners from regulatory risk."
      sections={sections}
      faqs={faqs}
    />
  );
}
