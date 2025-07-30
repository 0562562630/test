'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LogOut } from 'lucide-react';

const arabicMonths = [
  'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
  'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'
];

const arabicWeekDays = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']; // الأحد - السبت

export default function DashboardPage() {
  const router = useRouter();

  // بيانات الحضور (لم يتم التعديل عليها هنا)
  const [attendance] = useState([
    { label: 'احتفال سنوي ', value: 65 },
    { label: 'مؤتمر تقني', value: 80 },
    { label: 'ورشة عمل الأمن السيبراني', value: 40 },
    { label: 'ورشة عمل التخطيط الفعال', value: 100 },
    { label: 'ندوة علمية', value: 35 },
    { label: 'ملتقى الذكاء الاصطناعي', value: 55 },
  ]);

  // مناسبات حسب التاريخ (format: YYYY-MM-DD)
  const events = [
    { title: 'ورشة عمل التخطيط الفعال', date: '2025-03-11' },
    { title: 'مؤتمر تقني', date: '2025-03-13' },
    { title: 'احتفال سنوي', date: '2025-01-01' },
    { title: 'ملتقى الذكاء الاصطناعي', date: '2025-06-11' },
    { title: 'ندوة علمية', date: '2025-06-20' },
    { title: 'ورشة عمل الأمن السيبراني', date: '2025-04-20' },
  ];

  // حالة الشهر المعروض (شهر وسنة)
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(0); // يناير = 0

  // حالة الحدث المختار لعرضه عند الضغط
  const [selectedEvent, setSelectedEvent] = useState(null);

  // التنقل للشهر السابق
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedEvent(null);
  };

  // التنقل للشهر التالي
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedEvent(null);
  };

  // توليد أيام الشهر للتقويم
  const generateCalendarDays = (year, monthIndex) => {
    const firstDay = new Date(year, monthIndex, 1).getDay(); // 0 = الأحد
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const blanks = [];
    for (let i = 0; i < firstDay; i++) {
      blanks.push(<div key={`blank-${i}`} />);
    }

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const event = events.find(e => e.date === dateStr);

      days.push(
        <div
          key={day}
          className={`py-1 rounded-md cursor-pointer select-none ${
            event ? 'bg-[#003366] text-white font-bold' : 'bg-gray-100 text-gray-800'
          }`}
          onClick={() => {
            if (event) setSelectedEvent(event);
            else setSelectedEvent(null);
          }}
          title={event ? event.title : ''}
        >
          {day}
        </div>
      );
    }

    return [...blanks, ...days];
  };

  return (
    <>
      <Head>
        <title>الصفحة الرئيسية - حاضر</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-row h-screen font-sans bg-white text-right" dir="rtl">
        {/* الشريط الجانبي */}
        <aside className="w-64 bg-gradient-to-b from-[#507ba6] to-[#7d97b8] text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-12 px-4 mt-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/icons8-logo.png"
                  alt="شعار"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <span className="text-6xl font-bold">حاضر</span>
              </div>
            </div>

            <nav className="flex flex-col gap-2 px-4">
              <button className="flex items-center gap-2 py-2 px-4 bg-white/20">
                🏠 <span>الصفحة الرئيسية</span>
              </button>
              <button onClick={() => router.push('/invited')} className="flex items-center gap-2 py-2 px-4  hover:bg-white/20">
                👥 <span>المدعوين</span>
              </button>
              <button
                onClick={() => router.push('/invitations')}
                className="flex items-center gap-2 py-2 px-4  hover:bg-white/20"
              >
                📝 <span>الدعوات</span>
              </button>

              <button onClick={() => router.push('/account')} className="flex gap-2 py-2 px-4 hover:bg-white/20 ">
                👤 فيّ الحربي
              </button>
               <button
  onClick={() => {
    const confirmed = window.confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟');
    if (confirmed) {
      alert('تم تسجيل الخروج');
      router.push('/home');
    }
  }}
  className="flex gap-2 items-center py-2 px-4 hover:bg-white/20 text-red-100"
>
  <LogOut size={20} className="text-red-500" />
  <span className="text-white"    >تسجيل الخروج</span>
</button>
            </nav>
          </div>

          <div className="flex justify-around gap-4 mt-10 px-2 mb-6">
            {['W', 'instag', 'X', 'vector'].map((img, idx) => (
              <a key={idx} href="#" className="bg-[#003366] p-2 rounded-xl hover:bg-white/20 transition">
                <Image
                  src={`/images/${img}.png`}
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            ))}
          </div>
        </aside>

        {/* المحتوى الرئيسي */}
        <main className="flex-1 px-10 py-8 overflow-y-auto bg-[#F9FBFC]">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#003366]">الصفحة الرئيسية</h1>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              أهلاً بك في موقعنا
              <Image
                src="/images/wave.gif"
                alt="wave icon"
                width={24}
                height={24}
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* عمود 1 */}
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[#003366] font-semibold text-lg">ابدأ دعوة جديدة بكل سهولة</span>
              <button
                onClick={() => router.push('/createaninvits')}
                className="text-[#003366] bg-blue-100 px-2 py-1  text-xs flex items-center gap-1"
              >
                ✉️ <span>إنشاء دعوة</span>
              </button>
            </div>

            {/* عمود 2 */}
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[#003366] font-semibold text-lg">أنشئ مدعوين في لحظات</span>
              <button
                onClick={() => router.push('/createaninvit')}
                className="text-[#003366] bg-blue-100 px-2 py-1  text-xs flex items-center gap-1"
              >
                👥 <span>إنشاء مدعو</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-lg p-6 shadow">
              <h2 className="text-center font-bold text-[#003366] mb-4">نسبة الحضور لكل مناسبة</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {attendance.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <p className="mb-1 text-sm font-semibold text-[#003366]">{item.value}%</p>
                    <div className="w-3/4 h-32 bg-blue-100 relative overflow-hidden">
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-[#003366]"
                        style={{ height: `${item.value}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-[#003366] text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* التقويم مع الأسهم */}
            <div className="bg-white rounded-lg p-6 shadow max-w-md mx-auto">
              <h2 className="text-center font-bold text-[#003366] mb-4">تقويم المناسبات</h2>
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={prevMonth}
                  className="text-[#003366] hover:text-blue-600 font-bold text-lg"
                  aria-label="الشهر السابق"
                >
                  →
                </button>
                <div className="text-lg font-semibold text-[#003366]">{arabicMonths[currentMonth]} {currentYear}</div>
                <button
                  onClick={nextMonth}
                  className="text-[#003366] hover:text-blue-600 font-bold text-lg"
                  aria-label="الشهر التالي"
                >
                  ←
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-sm text-center text-[#003366] font-semibold mb-2">
                {arabicWeekDays.map((day, idx) => (
                  <div key={idx}>{day}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1 text-sm text-center">
                {generateCalendarDays(currentYear, currentMonth)}
              </div>

              {selectedEvent && (
                <div className="mt-4 p-3 bg-blue-100 rounded text-[#003366] font-semibold relative">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-1 left-2 text-red-600 font-bold cursor-pointer"
                    title="إغلاق"
                  >
                    ×
                  </button>
                  المناسبة: {selectedEvent.title} <br />
                  التاريخ: {selectedEvent.date}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
