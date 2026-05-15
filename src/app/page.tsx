'use client';

import { useState, useRef } from 'react';
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  Download, 
  Copy, 
  ArrowRight, 
  Plus, 
  Star,
  Activity
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import { toPng } from 'html-to-image';

// --- Mock Data ---
const POLICY_TEMPLATE = {
  purpose: "To establish a standardized framework for clinic operations ensuring patient safety and regulatory compliance.",
  scope: "This policy applies to all clinical and administrative staff members of the facility.",
  definitions: "SOP: Standard Operating Procedure. HIPAA: Health Insurance Portability and Accountability Act.",
  policyStatement: "The clinic shall maintain the highest standards of professional conduct and clinical excellence in all patient interactions.",
  responsibilities: "The Clinic Director is responsible for oversight. All staff are responsible for adherence to these guidelines.",
  procedure: "1. Intake and assessment. 2. Treatment planning. 3. Documentation. 4. Follow-up care.",
  documentationRequirements: "All patient interactions must be documented in the EMR within 24 hours.",
  complianceConsiderations: "Adhere to state-specific regulations and federal HIPAA requirements.",
  reviewSchedule: "This policy will be reviewed annually or as needed based on regulatory changes."
};

const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_5kQ9AMaPw3toajS4M80VO00";

export default function PolicyFlowAI() {
  const [step, setStep] = useState<'landing' | 'generator' | 'result'>('landing');
  const [formData, setFormData] = useState({
    clinicType: '',
    state: '',
    policyType: '',
    notes: ''
  });
  const [policy, setPolicy] = useState<typeof POLICY_TEMPLATE | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const policyRef = useRef<HTMLDivElement>(null);

  const handleStart = () => setStep('generator');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate policy');
      }

      const generatedPolicy = await response.json();
      setPolicy(generatedPolicy);
      setStep('result');
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'An error occurred while generating the policy.');
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!policy) return;
    const text = Object.entries(policy)
      .map(([key, value]) => `${key.toUpperCase()}:\n${value}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    alert('Policy copied to clipboard!');
  };

  const downloadPDF = async () => {
    if (!policyRef.current) return;
    
    const doc = new jsPDF();
    const element = policyRef.current;
    
    // Simple PDF generation using text
    let y = 20;
    doc.setFontSize(20);
    doc.text("PolicyFlow AI - Generated Policy", 20, y);
    y += 10;
    
    doc.setFontSize(12);
    Object.entries(policy!).forEach(([key, value]) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.setFont("helvetica", "bold");
      doc.text(key.toUpperCase(), 20, y);
      y += 7;
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(value, 170);
      doc.text(lines, 20, y);
      y += (lines.length * 7) + 5;
    });
    
    doc.save(`${formData.policyType || 'Policy'}.pdf`);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setStep('landing')}>
            <Activity className="text-blue-600 w-8 h-8" />
            <span className="font-bold text-xl tracking-tight text-slate-900">PolicyFlow AI</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#pricing" className="text-slate-600 hover:text-blue-600 font-medium">Pricing</a>
            <button 
              onClick={handleStart}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {step === 'landing' && (
        <div className="animate-in fade-in duration-500">
          {/* Hero Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-blue-600" />
                <span>Trusted by 500+ clinics nationwide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Generate audit-ready clinic policies and SOPs in minutes using AI.
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Built specifically for telehealth, wellness, weight loss, and med spa clinics. Save hours of manual work and stay compliant with state regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleStart}
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
                >
                  Generate Your First Policy <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                  View Samples
                </button>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-white border-y border-slate-100 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Audit-Ready</h3>
                <p className="text-slate-600 leading-relaxed">Our AI is trained on clinical standards and state-specific healthcare regulations to ensure compliance.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Specialized Context</h3>
                <p className="text-slate-600 leading-relaxed">Tailored for modern clinics like Med Spas and Telehealth providers, not generic corporate templates.</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Instant Export</h3>
                <p className="text-slate-600 leading-relaxed">Download as PDF or copy directly to your operations manual with one click.</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
                <p className="text-lg text-slate-600">Everything you need to keep your clinic compliant.</p>
              </div>
              
              <div className="max-w-md mx-auto bg-white border-2 border-blue-600 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider transform translate-x-12 translate-y-6 rotate-45">
                  Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">PolicyFlow AI Professional</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-slate-900">$149</span>
                    <span className="text-slate-500 font-medium">/month</span>
                  </div>
                  <div className="space-y-2 mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Save hours of manual clinic documentation work
                    </p>
                    <p className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Generate audit-ready policies and SOPs in minutes
                    </p>
                    <p className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      Built for telehealth, wellness, and med spa businesses
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {[
                    "Unlimited AI Policy Generation",
                    "State-Specific Compliance Logic",
                    "Download as PDF & DOCX",
                    "Custom SOP Builder",
                    "Audit Preparation Checklist",
                    "Priority Email Support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={STRIPE_PAYMENT_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all text-center block"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {step === 'generator' && (
        <div className="py-20 px-6 max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-500">
          <button 
            onClick={() => setStep('landing')}
            className="text-slate-500 hover:text-slate-700 mb-8 flex items-center gap-1 font-medium"
          >
            ← Back to Home
          </button>
          
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Generate Policy</h2>
            <p className="text-slate-600 mb-8">Fill in the details below and our AI will draft a comprehensive policy for your clinic.</p>
            
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Clinic Type</label>
                  <select 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.clinicType}
                    onChange={(e) => setFormData({...formData, clinicType: e.target.value})}
                  >
                    <option value="">Select type...</option>
                    <option value="Telehealth">Telehealth</option>
                    <option value="Wellness Clinic">Wellness Clinic</option>
                    <option value="Weight Loss Clinic">Weight Loss Clinic</option>
                    <option value="Med Spa">Med Spa</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">State</label>
                  <select 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                  >
                    <option value="">Select state...</option>
                    <option value="California">California</option>
                    <option value="Florida">Florida</option>
                    <option value="Texas">Texas</option>
                    <option value="New York">New York</option>
                    <option value="Arizona">Arizona</option>
                    <option value="Other">Other (USA)</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Policy/SOP Type</label>
                <input 
                  required
                  placeholder="e.g. HIPAA Compliance, Patient Intake, Controlled Substances"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.policyType}
                  onChange={(e) => setFormData({...formData, policyType: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Additional Notes (Optional)</label>
                <textarea 
                  placeholder="Any specific requirements or nuances for your clinic?"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isGenerating}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isGenerating ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Generating Policy...
                  </>
                ) : (
                  <>Generate Policy <Plus className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {step === 'result' && policy && (
        <div className="py-12 px-6 max-w-4xl mx-auto animate-in fade-in duration-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <button 
                onClick={() => setStep('generator')}
                className="text-slate-500 hover:text-slate-700 mb-2 flex items-center gap-1 font-medium"
              >
                ← Back to Generator
              </button>
              <h2 className="text-3xl font-bold text-slate-900">{formData.policyType}</h2>
              <p className="text-slate-500">{formData.clinicType} • {formData.state}</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={copyToClipboard}
                className="bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Copy className="w-4 h-4" /> Copy
              </button>
              <button 
                onClick={downloadPDF}
                className="bg-white text-slate-700 border border-slate-200 px-4 py-2.5 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> PDF
              </button>
              <a 
                href={STRIPE_PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
              >
                Upgrade
              </a>
            </div>
          </div>
          
          <div 
            ref={policyRef}
            className="bg-white rounded-2xl p-10 md:p-16 shadow-lg border border-slate-100 font-serif leading-relaxed text-slate-800"
          >
            <div className="border-b-2 border-slate-900 pb-8 mb-10">
              <h1 className="text-4xl font-bold text-slate-900 uppercase tracking-tight mb-2">{formData.policyType}</h1>
              <div className="text-sm font-bold text-slate-500 flex gap-6">
                <span>EFFECTIVE DATE: {new Date().toLocaleDateString()}</span>
                <span>STATUS: DRAFT</span>
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">1. Purpose</h3>
                <p>{policy.purpose}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">2. Scope</h3>
                <p>{policy.scope}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">3. Definitions</h3>
                <p>{policy.definitions}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">4. Policy Statement</h3>
                <p>{policy.policyStatement}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">5. Responsibilities</h3>
                <p>{policy.responsibilities}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">6. Procedure</h3>
                <p>{policy.procedure}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">7. Documentation Requirements</h3>
                <p>{policy.documentationRequirements}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">8. Compliance Considerations</h3>
                <p>{policy.complianceConsiderations}</p>
              </section>
              
              <section>
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-3">9. Review Schedule</h3>
                <p>{policy.reviewSchedule}</p>
              </section>
            </div>
            
            <div className="mt-20 pt-8 border-t border-slate-100 text-xs text-slate-400 text-center">
              Generated by PolicyFlow AI. This document is a template and should be reviewed by legal counsel.
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Activity className="text-blue-500 w-6 h-6" />
            <span className="font-bold text-white">PolicyFlow AI</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm">© 2024 PolicyFlow AI. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
