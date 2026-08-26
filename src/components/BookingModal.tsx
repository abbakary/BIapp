import React, { useState } from 'react';
import { X, Clock, CheckCircle2, ArrowRight, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import { BookingData } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialService }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceType, setServiceType] = useState<string>(
    initialService || 'Free 30-min Strategy Call'
  );

  // Generate next 10 dates (excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let dayOffset = 1;

    while (count < 8) {
      const d = new Date();
      d.setDate(today.getDate() + dayOffset);
      if (d.getDay() !== 0 && d.getDay() !== 6) { // Mon-Fri
        dates.push({
          fullDate: d.toISOString().split('T')[0],
          dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
          monthDay: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        });
        count++;
      }
      dayOffset++;
    }
    return dates;
  };

  const availableDates = getAvailableDates();
  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0]?.fullDate || '');
  const [selectedTime, setSelectedTime] = useState<string>('02:00 PM UTC');

  const timeSlots = [
    '09:00 AM UTC',
    '10:30 AM UTC',
    '01:00 PM UTC',
    '02:30 PM UTC',
    '04:00 PM UTC',
    '05:30 PM UTC',
  ];

  const serviceOptions = [
    { title: 'Free 30-min Strategy Call', desc: 'Discuss architecture, pain points & project fit (0 cost).' },
    { title: 'Business Intelligence Dashboard Build', desc: 'Scope custom executive dashboards, semantic model & ETL.' },
    { title: 'Corporate Power BI Training Workshop', desc: 'Upskill internal analyst teams with live hands-on modules.' },
    { title: 'DAX & Performance Troubleshooting', desc: 'Audit and fix slow reports or complex calculation issues.' },
  ];

  const dataStackOptions = [
    'Microsoft Excel',
    'SQL Server / Azure SQL',
    'PostgreSQL / MySQL',
    'Microsoft Fabric / Synapse',
    'Salesforce / HubSpot',
    'Shopify / E-commerce',
    'Google Sheets / BigQuery',
    'Custom REST APIs'
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    companySize: '10-50 employees',
    currentDataStack: [] as string[],
    projectScope: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [bookedDetails, setBookedDetails] = useState<BookingData | null>(null);

  const toggleDataStack = (stack: string) => {
    if (formData.currentDataStack.includes(stack)) {
      setFormData({
        ...formData,
        currentDataStack: formData.currentDataStack.filter(s => s !== stack)
      });
    } else {
      setFormData({
        ...formData,
        currentDataStack: [...formData.currentDataStack, stack]
      });
    }
  };

  const handleNextToStep2 = () => {
    setStep(2);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Please enter a valid work email';
    if (!formData.organization.trim()) errors.organization = 'Please provide your company name';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    const booking: BookingData = {
      id: 'BK-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      serviceType,
      date: selectedDate,
      timeSlot: selectedTime,
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      companySize: formData.companySize,
      currentDataStack: formData.currentDataStack,
      projectScope: formData.projectScope,
      createdAt: new Date().toISOString(),
    };

    // Save to local storage
    try {
      const existing = JSON.parse(localStorage.getItem('kido_powerbi_bookings') || '[]');
      localStorage.setItem('kido_powerbi_bookings', JSON.stringify([booking, ...existing]));
    } catch (err) {
      console.warn('Could not save booking to localStorage', err);
    }

    setBookedDetails(booking);
    setStep(3);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // safe fallback
    }
  };

  const downloadPDFConfirmation = () => {
    if (!bookedDetails) return;

    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const W = 210;

    // ── Colours (Microsoft palette) ───────────────────────────────────────
    const msBlue  = [0,   120, 212] as [number,number,number];
    const msTeal  = [0,   188, 182] as [number,number,number];
    const msGreen = [16,  124,  16] as [number,number,number];
    const msDark  = [23,   23,  23] as [number,number,number];
    const msGray  = [243, 243, 243] as [number,number,number];
    const msWhite = [255, 255, 255] as [number,number,number];

    // ── Helper: set fill ──────────────────────────────────────────────────
    const fill  = (c: [number,number,number]) => doc.setFillColor(c[0], c[1], c[2]);
    const stroke= (c: [number,number,number]) => doc.setDrawColor(c[0], c[1], c[2]);
    const tcolor= (c: [number,number,number]) => doc.setTextColor(c[0], c[1], c[2]);

    // ── BACKGROUND ────────────────────────────────────────────────────────
    fill(msGray); doc.rect(0, 0, W, 297, 'F');

    // ── HEADER BAND ───────────────────────────────────────────────────────
    const hH = 48;
    fill(msBlue); doc.rect(0, 0, W, hH, 'F');
    // diagonal accent top-right
    doc.setFillColor(0, 90, 170);
    doc.triangle(W - 55, 0, W, 0, W, hH, 'F');
    // teal left stripe
    fill(msTeal); doc.rect(0, 0, 5, hH, 'F');

    // brand text
    tcolor(msWhite);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Mohamed Kido', 13, 18);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(190, 225, 255);
    doc.text('Business Intelligence Expert & Power BI Consultant', 13, 26);
    doc.text('Tanzania (TZ)  |  Serving East Africa & Worldwide', 13, 32);

    // Windows-logo squares top-right
    const sqX = W - 20; const sqY = 8; const s = 4.5; const g = 1.2;
    doc.setFillColor(242,  80,  34); doc.rect(sqX,       sqY,       s, s, 'F');
    doc.setFillColor(127, 186,   0); doc.rect(sqX+s+g,   sqY,       s, s, 'F');
    doc.setFillColor(  0, 164, 239); doc.rect(sqX,       sqY+s+g,   s, s, 'F');
    doc.setFillColor(255, 185,   0); doc.rect(sqX+s+g,   sqY+s+g,   s, s, 'F');

    // ── CONFIRMED BADGE ───────────────────────────────────────────────────
    let y = hH + 10;
    fill(msGreen); doc.roundedRect(13, y, 52, 7, 1.5, 1.5, 'F');
    tcolor(msWhite);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text('BOOKING CONFIRMED', 17, y + 4.8);

    // ── HEADLINE ──────────────────────────────────────────────────────────
    y += 14;
    tcolor(msDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text("You're all set,", 13, y);
    y += 9;
    tcolor(msBlue);
    doc.setFontSize(20);
    doc.text(`${bookedDetails.name.split(' ')[0]}!`, 13, y);

    y += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(75, 75, 75);
    doc.text('Your consultation with Mohamed Kido has been confirmed.', 13, y);
    y += 5.5;
    doc.text('Session details are below. Keep this document for your records.', 13, y);

    // ── TEAL DIVIDER ──────────────────────────────────────────────────────
    y += 7;
    stroke(msTeal); doc.setLineWidth(0.5);
    doc.line(13, y, W - 13, y);

    // ── SESSION DETAILS CARD ──────────────────────────────────────────────
    y += 4;
    const rows: [string, string, boolean][] = [
      ['Meeting Type',    bookedDetails.serviceType,                           false],
      ['Date & Time',     `${bookedDetails.date}  |  ${bookedDetails.timeSlot}`, true],
      ['Attendee',        bookedDetails.name,                                  false],
      ['Work Email',      bookedDetails.email,                                 false],
      ['Organisation',    bookedDetails.organization,                          false],
      ['Company Size',    bookedDetails.companySize,                           false],
      ['Confirmation ID', bookedDetails.id,                                    false],
    ];
    const cardH = 10 + rows.length * 9 + 2;
    fill(msWhite); doc.roundedRect(13, y, W - 26, cardH, 3, 3, 'F');
    stroke([220,220,220]); doc.setLineWidth(0.3);
    doc.roundedRect(13, y, W - 26, cardH, 3, 3, 'S');

    // card header
    fill(msBlue); doc.roundedRect(13, y, W - 26, 9, 3, 3, 'F');
    doc.rect(13, y + 4, W - 26, 5, 'F');
    tcolor(msWhite);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text('SESSION DETAILS', 19, y + 6.2);

    let ry = y + 16;
    rows.forEach(([label, value, highlight], i) => {
      if (i % 2 === 1) {
        doc.setFillColor(247, 251, 255);
        doc.rect(14, ry - 4.5, W - 28, 8.5, 'F');
      }
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(130, 130, 130);
      doc.text(label, 19, ry);

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      const tc = highlight ? msBlue : msDark;
      tcolor(tc);
      const vw = doc.getTextWidth(value);
      doc.text(value, W - 19 - vw, ry);

      if (i < rows.length - 1) {
        stroke([235,235,235]); doc.setLineWidth(0.15);
        doc.line(19, ry + 3, W - 19, ry + 3);
      }
      ry += 9;
    });

    y = ry + 4;

    // ── DATA STACK TAGS ───────────────────────────────────────────────────
    if (bookedDetails.currentDataStack && bookedDetails.currentDataStack.length > 0) {
      let tx = 19; let tagRows = 1;
      bookedDetails.currentDataStack.forEach((tag) => {
        doc.setFontSize(6.5);
        const tw = doc.getTextWidth(tag) + 7;
        if (tx + tw > W - 19) { tx = 19; tagRows++; }
        tx += tw + 3;
      });
      const tagsCardH = 9 + tagRows * 8 + 4;

      fill(msWhite); doc.roundedRect(13, y, W - 26, tagsCardH, 3, 3, 'F');
      stroke([220,220,220]); doc.setLineWidth(0.3);
      doc.roundedRect(13, y, W - 26, tagsCardH, 3, 3, 'S');

      // left accent bar
      fill(msBlue); doc.roundedRect(13, y, 4, tagsCardH, 1, 1, 'F');

      tcolor(msBlue);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.text('DATA SOURCES / STACK', 21, y + 6.5);

      let tagX = 19; let tagY = y + 13;
      bookedDetails.currentDataStack.forEach((tag) => {
        doc.setFontSize(6.5);
        const tw = doc.getTextWidth(tag) + 7;
        if (tagX + tw > W - 19) { tagX = 19; tagY += 8; }
        doc.setFillColor(225, 242, 255);
        doc.roundedRect(tagX, tagY - 4, tw, 5.5, 1, 1, 'F');
        stroke(msBlue); doc.setLineWidth(0.15);
        doc.roundedRect(tagX, tagY - 4, tw, 5.5, 1, 1, 'S');
        tcolor(msBlue);
        doc.setFont('helvetica', 'normal');
        doc.text(tag, tagX + 3.5, tagY);
        tagX += tw + 3;
      });

      y += tagsCardH + 5;
    }

    // ── POWER BI BRANDING STRIP ───────────────────────────────────────────
    doc.setFillColor(240, 246, 255);
    doc.roundedRect(13, y, W - 26, 18, 3, 3, 'F');
    stroke([200,225,255]); doc.setLineWidth(0.3);
    doc.roundedRect(13, y, W - 26, 18, 3, 3, 'S');
    // yellow left bar
    doc.setFillColor(255, 185, 0);
    doc.roundedRect(13, y, 4, 18, 1, 1, 'F');

    tcolor(msDark);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.text('Microsoft Power BI  |  Business Intelligence Excellence', 21, y + 7);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 100, 100);
    doc.text('Mohamed Kido  |  kidomoody@gmail.com  |  +255 693 380 817', 21, y + 13.5);

    y += 23;

    // ── WHAT HAPPENS NEXT ─────────────────────────────────────────────────
    doc.setFillColor(230, 248, 240);
    doc.roundedRect(13, y, W - 26, 26, 3, 3, 'F');
    stroke([13, 74, 54]); doc.setLineWidth(0.3);
    doc.roundedRect(13, y, W - 26, 26, 3, 3, 'S');
    doc.setFillColor(13, 74, 54);
    doc.roundedRect(13, y, 4, 26, 1, 1, 'F');

    tcolor([13, 74, 54] as [number,number,number]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.text('What happens next?', 21, y + 7);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(40, 80, 60);
    doc.text('1.  Mohamed Kido will reach out via WhatsApp or Email within 24 hours to share the meeting link.', 21, y + 14);
    doc.text('2.  Prepare any sample spreadsheets, schemas, or reports to maximize your session value.', 21, y + 20);

    y += 30;

    // ── FOOTER ────────────────────────────────────────────────────────────
    const footY = y + 4;
    fill(msDark); doc.rect(0, footY, W, 20, 'F');
    fill(msTeal);  doc.rect(0, footY, 5, 20, 'F');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7);
    doc.setTextColor(180, 180, 180);
    doc.text('(c) 2026 Mohamed Kido  |  Business Intelligence Expert  |  Tanzania', W / 2, footY + 8, { align: 'center' });
    doc.text('This document is auto-generated. Direct Email: kidomoody@gmail.com', W / 2, footY + 14, { align: 'center' });

    doc.save(`Mohamed_Kido_Booking_${bookedDetails.id}.pdf`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto overscroll-contain animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white text-gray-900 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh] sm:max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-7 py-3 sm:py-4 bg-gray-50 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 bg-slate-900 shrink-0">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h3 className="text-xs sm:text-base font-bold text-gray-900 leading-tight flex items-center gap-1.5">
                <span>Schedule a Consultation with Mohamed Kido</span>
                <span className="text-[10px] font-normal text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                  Tanzania 🇹🇿
                </span>
              </h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500 line-clamp-1">{PERSONAL_INFO.title} · Serving East Africa & Worldwide</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center transition-colors shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="px-4 sm:px-7 py-2.5 bg-gray-100/70 border-b border-gray-100 flex items-center justify-between text-xs shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step >= 1 ? 'bg-[#0d4a36] text-white' : 'bg-gray-300 text-gray-700'
            }`}>
              1
            </span>
            <span className={step === 1 ? 'font-bold text-gray-900' : 'text-gray-500'}>Session & Slot</span>
          </div>

          <div className="w-6 sm:w-8 h-0.5 bg-gray-300"></div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step >= 2 ? 'bg-[#0d4a36] text-white' : 'bg-gray-300 text-gray-700'
            }`}>
              2
            </span>
            <span className={step === 2 ? 'font-bold text-gray-900' : 'text-gray-500'}>Your Data Stack</span>
          </div>

          <div className="w-6 sm:w-8 h-0.5 bg-gray-300"></div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
              step === 3 ? 'bg-emerald-600 text-white' : 'bg-gray-300 text-gray-700'
            }`}>
              3
            </span>
            <span className={step === 3 ? 'font-bold text-emerald-800' : 'text-gray-500'}>Confirmed</span>
          </div>
        </div>

        {/* Step 1: Select Service, Date and Time */}
        {step === 1 && (
          <div className="p-4 sm:p-7 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-5 animate-in fade-in duration-200">
            {/* Service Type Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                1. Select Engagement Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {serviceOptions.map((opt) => (
                  <div
                    key={opt.title}
                    onClick={() => setServiceType(opt.title)}
                    className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all ${
                      serviceType === opt.title
                        ? 'bg-[#0d4a36]/5 border-[#0d4a36] ring-1 ring-[#0d4a36]'
                        : 'bg-white border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold text-gray-900">{opt.title}</span>
                      {serviceType === opt.title && (
                        <CheckCircle2 className="w-4 h-4 text-[#0d4a36] shrink-0" />
                      )}
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed">{opt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                2. Choose Date
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {availableDates.map((d) => (
                  <button
                    key={d.fullDate}
                    type="button"
                    onClick={() => setSelectedDate(d.fullDate)}
                    className={`py-2 px-1 rounded-xl text-center border transition-all ${
                      selectedDate === d.fullDate
                        ? 'bg-[#0d4a36] text-white border-[#0d4a36] shadow-xs'
                        : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-[10px] block uppercase font-medium">{d.dayName}</span>
                    <span className="text-xs sm:text-sm font-bold block">{d.monthDay.split(' ')[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                3. Choose Time Slot (UTC)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all ${
                      selectedTime === time
                        ? 'bg-gray-900 text-white border-gray-900 shadow-xs'
                        : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{time}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                type="button"
                onClick={handleNextToStep2}
                className="w-full sm:w-auto px-6 py-3 bg-[#0d4a36] hover:bg-[#083627] text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Continue to Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Company Details and Stack */}
        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="p-4 sm:p-7 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-4 sm:space-y-5 animate-in fade-in duration-200">
            <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 flex items-center justify-between text-xs text-gray-700">
              <div>
                <span className="font-semibold text-gray-900">{serviceType}</span>
                <p className="text-[11px] text-gray-500">{selectedDate} at {selectedTime}</p>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-emerald-800 font-semibold hover:underline"
              >
                Change
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4a36] bg-white"
                />
                {formErrors.name && <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4a36] bg-white"
                />
                {formErrors.email && <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. East Africa Freight Corp"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4a36] bg-white"
                />
                {formErrors.organization && <p className="text-[11px] text-rose-500 mt-1">{formErrors.organization}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Company Size
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4a36] bg-white"
                >
                  <option value="1-10 employees">1 - 10 employees</option>
                  <option value="10-50 employees">10 - 50 employees</option>
                  <option value="50-200 employees">50 - 200 employees</option>
                  <option value="200+ employees">200+ employees</option>
                </select>
              </div>
            </div>

            {/* Current Data Stack Multi-Select */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Current Data Sources / Stack (Optional)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {dataStackOptions.map((stack) => (
                  <button
                    key={stack}
                    type="button"
                    onClick={() => toggleDataStack(stack)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                      formData.currentDataStack.includes(stack)
                        ? 'bg-[#0d4a36] text-white border-[#0d4a36]'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
                    }`}
                  >
                    {stack}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                What are your main goals or challenges? (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.projectScope}
                onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                placeholder="e.g. We need to automate our weekly executive commercial reports and train our analytics team on DAX."
                className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4a36] bg-white"
              />
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-gray-500 hover:text-gray-800 font-semibold"
              >
                Back
              </button>

              <button
                type="submit"
                id="btn-confirm-booking"
                className="px-6 py-3 bg-[#0d4a36] hover:bg-[#083627] text-white font-bold text-xs sm:text-sm rounded-full transition-all shadow-sm flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Confirm & Book Meeting</span>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Instant Confirmation Celebration */}
        {step === 3 && bookedDetails && (
          <div className="p-5 sm:p-9 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-5 text-center animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
                Booking Confirmed
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mt-2">
                You're all set, {bookedDetails.name.split(' ')[0]}!
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto mt-2">
                Your session with <span className="font-semibold text-gray-900">Mohamed Kido</span> is confirmed. Download your PDF confirmation receipt below.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 text-left max-w-md mx-auto space-y-2.5 text-xs">
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-500">Meeting Type:</span>
                <span className="font-bold text-gray-900">{bookedDetails.serviceType}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-500">Date & Time:</span>
                <span className="font-bold text-emerald-800">{bookedDetails.date} at {bookedDetails.timeSlot}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <span className="text-gray-500">Organization:</span>
                <span className="font-semibold text-gray-900">{bookedDetails.organization}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Confirmation ID:</span>
                <span className="font-mono text-gray-600 font-semibold">{bookedDetails.id}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={downloadPDFConfirmation}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Confirmation</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-gray-900 hover:bg-black text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
