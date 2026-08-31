import React, { useState } from 'react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Send, 
  Mail, 
  Phone, 
  Globe, 
  Layers, 
  AlertCircle,
  Clock,
  Sparkles,
  CalendarCheck
} from 'lucide-react';
import { BookingFormData } from '../types';
import { sendLeadToGoogleSheets } from '../services/leadService';

export const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    email: '',
    phone: '',
    siteUrl: '',
    espSystem: 'eSputnik'
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation helpers
  const validateEmail = (val: string): string => {
    if (!val.trim()) return 'Введіть робочий Email';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRegex.test(val.trim())) return 'Введіть коректний Email (наприклад: name@company.com)';
    return '';
  };

  const validatePhone = (val: string): string => {
    if (!val.trim()) return 'Введіть контактний номер телефону';
    const cleaned = val.replace(/[\s\-\(\)\+]/g, '');
    if (!/^\d+$/.test(cleaned) || cleaned.length < 9 || cleaned.length > 15) {
      return 'Введіть коректний номер телефону (наприклад: +380 67 123 45 67)';
    }
    return '';
  };

  const validateSiteUrl = (val: string): string => {
    if (!val.trim()) return 'Введіть URL вашого сайту';
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/i;
    if (!urlPattern.test(val.trim())) {
      return 'Введіть коректний URL сайту (наприклад: myshop.ua або https://myshop.com)';
    }
    return '';
  };

  const validateAll = () => {
    const emailErr = validateEmail(formData.email);
    const phoneErr = validatePhone(formData.phone);
    const siteErr = validateSiteUrl(formData.siteUrl);

    const newErrors: Record<string, string> = {};
    if (emailErr) newErrors.email = emailErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (siteErr) newErrors.siteUrl = siteErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    let err = '';
    if (field === 'email') err = validateEmail(formData.email);
    if (field === 'phone') err = validatePhone(formData.phone);
    if (field === 'siteUrl') err = validateSiteUrl(formData.siteUrl);
    setErrors(prev => ({ ...prev, [field]: err }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (touched[name]) {
      let err = '';
      if (name === 'email') err = validateEmail(value);
      if (name === 'phone') err = validatePhone(value);
      if (name === 'siteUrl') err = validateSiteUrl(value);
      setErrors(prev => ({ ...prev, [name]: err }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true, siteUrl: true });

    if (!validateAll()) {
      setFormStatus('error');
      setErrorMessage('Будь ласка, виправте виділені поля перед відправкою');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const result = await sendLeadToGoogleSheets(formData);
      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
        setErrorMessage(result.error || 'Помилка при надсиланні даних. Спробуйте ще раз.');
      }
    } catch (err: any) {
      setFormStatus('error');
      setErrorMessage('Не вдалося з\'єднатися із сервером. Перевірте з\'єднання з інтернетом.');
    }
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-24 bg-gradient-to-b from-[#0F172A] via-[#111C33] to-[#0F172A] text-white overflow-hidden border-b border-slate-800">
      
      {/* Decorative Technical Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#5BACEA]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF5223]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Grid: Content Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Subtitle & Diagnostic Angles */}
          <div className="lg:col-span-7 space-y-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Live-діагностика Retention-маркетингу:{' '}
              <span className="text-[#5BACEA]">експертний розбір точок входу в Retention</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
              Забронюйте 45-хвилинну онлайн-сесію зі спеціалістом з Retention-маркетингу Netpeak. 
              У режимі реального часу знайдемо вузькі місця у вашій воронці, розберемо точки росту в зборі контактів та базові автоматизації.
            </p>

            {/* Main Message Banner */}
            <div className="p-4.5 rounded-xl bg-slate-800/60 border border-slate-700/80 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#5BACEA]/15 text-[#5BACEA] shrink-0 mt-0.5">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm sm:text-base font-semibold text-slate-100 leading-snug">
                    Експертний розбір точок входу в Retention (форми підписки, бонусна система, канали комунікації).
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience Cards (Enhanced & Accented) */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-4 w-1 bg-[#5BACEA] rounded-full"></span>
                <h2 className="text-base uppercase tracking-wider text-white font-extrabold">
                  Для кого підійде цей аудит:
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Variant 1: From Scratch */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border-2 border-[#5BACEA]/40 hover:border-[#5BACEA] shadow-lg transition-all space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#5BACEA]/20 text-[#5BACEA] text-xs font-extrabold uppercase tracking-wide">
                      Запуск з нуля
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#5BACEA] animate-pulse"></span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    Якщо Retention ще не запущено
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Знайдемо потенційні вузькі місця воронки до старту, перевіримо чистоту бази контактів, підберемо канали та створимо чек-лист для запуску без зливу бюджету.
                  </p>
                </div>

                {/* Variant 2: Already Active */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border-2 border-[#FF5223]/40 hover:border-[#FF5223] shadow-lg transition-all space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-md bg-[#FF5223]/20 text-[#FF5223] text-xs font-extrabold uppercase tracking-wide">
                      Пошук точок росту
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5223] animate-pulse"></span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    Якщо розсилки вже працюють
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    Виявимо, на яких етапах воронки відсікаються клієнти, знайдемо розриви в тригерних комунікаціях та приховані зони вигорання бази.
                  </p>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Embedded Booking Form */}
          <div className="lg:col-span-5">
            <div 
              id="audit-form" 
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white text-slate-900 shadow-2xl border border-slate-200 relative overflow-hidden transition-all"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#5BACEA] via-[#FF5223] to-[#5BACEA]"></div>

              {formStatus === 'success' ? (
                /* 2nd Screen: Thank-you state with full details & next steps */
                <div className="text-center py-6 sm:py-8 space-y-5 animate-fadeIn">
                  <div className="w-18 h-18 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" />
                      Заявку прийнято
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Дякуємо за довіру!
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                      Ми вже отримали ваші дані. Наш Retention Team Lead розпочав первинний аналіз сайту.
                    </p>
                  </div>

                  {/* Next Steps Timeline Card */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#5BACEA]" />
                      Що відбудеться далі:
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#5BACEA]/20 text-[#5BACEA] font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                        <span>Зв'яжемося з вами протягом <strong>15–30 хвилин</strong> у робочий час для узгодження зручного слоту зустрічі.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#5BACEA]/20 text-[#5BACEA] font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                        <span>Проведемо <strong>45-хвилинну Live-діагностику</strong> у Zoom / Google Meet.</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary of sent info */}
                  <div className="p-3.5 rounded-xl bg-slate-100/70 border border-slate-200 text-left text-xs text-slate-600 space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Email:</span>
                      <span className="font-semibold text-slate-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Телефон:</span>
                      <span className="font-semibold text-slate-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Сайт:</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[180px]">{formData.siteUrl}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Система:</span>
                      <span className="font-semibold text-slate-900">{formData.espSystem}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setFormStatus('idle');
                      setFormData({
                        email: '',
                        phone: '',
                        siteUrl: '',
                        espSystem: 'eSputnik'
                      });
                      setTouched({});
                      setErrors({});
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span>Відправити ще одну заявку</span>
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                      Забронювати Live-аудит
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Заповніть форму — підготуємо аудит вашого сайту до зустрічі
                    </p>
                  </div>

                  {formStatus === 'error' && errorMessage && (
                    <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-fadeIn">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    {/* Field 1: Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Робочий Email <span className="text-[#FF5223]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={() => handleBlur('email')}
                          placeholder="name@company.com"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                            touched.email && errors.email 
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                              : 'border-slate-300 focus:ring-[#5BACEA] focus:border-transparent'
                          }`}
                        />
                      </div>
                      {touched.email && errors.email && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Field 2: Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Телефон <span className="text-[#FF5223]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={() => handleBlur('phone')}
                          placeholder="+380 (XX) XXX-XX-XX"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                            touched.phone && errors.phone 
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                              : 'border-slate-300 focus:ring-[#5BACEA] focus:border-transparent'
                          }`}
                        />
                      </div>
                      {touched.phone && errors.phone && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Field 3: Site URL */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        URL сайту <span className="text-[#FF5223]">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="siteUrl"
                          value={formData.siteUrl}
                          onChange={handleChange}
                          onBlur={() => handleBlur('siteUrl')}
                          placeholder="https://yoursite.com"
                          className={`w-full pl-10 pr-3.5 py-2.5 rounded-lg border bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 ${
                            touched.siteUrl && errors.siteUrl 
                              ? 'border-red-400 focus:ring-red-400 bg-red-50/30' 
                              : 'border-slate-300 focus:ring-[#5BACEA] focus:border-transparent'
                          }`}
                        />
                      </div>
                      {touched.siteUrl && errors.siteUrl && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          {errors.siteUrl}
                        </p>
                      )}
                    </div>

                    {/* Field 4: ESP/CDP system */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Яку ESP/CDP систему зараз використовуєте
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Layers className="w-4 h-4" />
                        </div>
                        <select
                          name="espSystem"
                          value={formData.espSystem}
                          onChange={handleChange}
                          className="w-full pl-10 pr-8 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#5BACEA] focus:border-transparent transition-all appearance-none cursor-pointer"
                        >
                          <option value="eSputnik">eSputnik</option>
                          <option value="Klaviyo">Klaviyo</option>
                          <option value="Omnisend">Omnisend</option>
                          <option value="SendPulse">SendPulse</option>
                          <option value="Ще не використовуємо">Ще не використовуємо</option>
                          <option value="Інша система (Mailchimp, Unisender тощо)">Інша система</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-3.5 px-6 rounded-xl bg-[#FF5223] hover:bg-[#e6461a] active:scale-[0.99] text-white font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Обробка запиту...</span>
                          </>
                        ) : (
                          <>
                            <span>Забронювати консультацію</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 text-center leading-relaxed">
                      Заповнюючи форму, ви погоджуєтеся з{' '}
                      <a 
                        href="https://netpeak.net/uk/blog/privacy/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[#5BACEA] hover:text-[#388dc8] underline font-medium"
                      >
                        Політикою конфіденційності
                      </a>.
                    </div>

                  </form>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
