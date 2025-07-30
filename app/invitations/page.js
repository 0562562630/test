'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { LogOut } from 'lucide-react';

export default function InvitationsPage() {
  const router = useRouter();

  const [invitations, setInvitations] = useState([
    {
      title: 'ورشة عمل التخطيط الفعال',
      date: '11/3/2025',
      weekday: 'الثلاثاء',
      image: '/images/workshop1.png',
    },
    {
      title: 'مؤتمر تقني',
      date: '13/3/2025',
      weekday: 'الخميس',
      image: '/images/technicalconference.png',
    },
    {
      title: 'احتفال سنوي',
      date: '1/1/2025',
      weekday: 'الأربعاء',
      image: '/images/annualcelebration.png',
    },
    {
      title: 'ملتقى الذكاء الاصطناعي',
      date: '11/6/2025',
      weekday: 'الأربعاء',
      image: '/images/technicalforum.png',
    },
    {
      title: 'ندوة علمية',
      date: '20/6/2025',
      weekday: 'الخميس',
      image: '/images/scientificsymposium.png',
    },
    {
      title: 'ورشة عمل الأمن السيبراني',
      date: '20/4/2025',
      weekday: 'الأحد',
      image: '/images/workshop2.png',
    },
  ]);

  const [menuOpenIndex, setMenuOpenIndex] = useState(null);
  const [reminded, setReminded] = useState(Array(invitations.length).fill(false));

  // ✅ تحميل الدعوات الجديدة من localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('newInvitations') || '[]');
    if (saved.length > 0) {
      setInvitations((prev) => [...saved, ...prev]);
      setReminded((prev) => [false, ...prev]);
    }
  }, []);

  const handleDelete = (index) => {
    const newInvitations = [...invitations];
    newInvitations.splice(index, 1);
    setInvitations(newInvitations);
    setReminded((prev) => {
      const newState = [...prev];
      newState.splice(index, 1);
      return newState;
    });
  };

  return (
    <div className="min-h-screen flex bg-[#f9faff]" dir="rtl">
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-gradient-to-b from-[#507ba6] to-[#7d97b8] text-white flex flex-col justify-between">
        <div className="flex flex-col gap-2 px-4 mt-6">
          <div className="flex items-center gap-2 mb-12">
            <Image src="/images/icons8-logo.png" alt="شعار" width={100} height={100} className="rounded-full" />
            <span className="text-6xl font-bold">حاضر</span>
          </div>
          <button onClick={() => router.push('/profile')} className="flex gap-2 py-2 px-4 hover:bg-white/20">🏠 الصفحة الرئيسية</button>
          <button onClick={() => router.push('/invited')} className="flex gap-2 py-2 px-4 hover:bg-white/20">👥 المدعوين</button>
          <button className="flex gap-2 py-2 px-4 bg-white/20 rounded">📝 الدعوات</button>
          <button onClick={() => router.push('/account')} className="flex gap-2 py-2 px-4 hover:bg-white/20">👤 فيّ الحربي</button>
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
            <span className="text-white">تسجيل الخروج</span>
          </button>
        </div>

        <div className="flex justify-around gap-4 px-2 mb-6">
          {['W', 'instag', 'X', 'vector'].map((img, idx) => (
            <a key={idx} href="#" className="bg-[#003366] p-2 rounded-xl hover:bg-white/20 transition">
              <Image src={`/images/${img}.png`} alt="icon" width={24} height={24} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </aside>

      {/* المحتوى الرئيسي */}
      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#1e2b47]">الدعوات</h1>
          <button onClick={() => router.push('/createaninvits')} className="bg-[#7c91b3] text-white px-4 py-2 flex items-center gap-2">
            <Image src="/images/paperr.png" alt="paper icon" width={15} height={15} />
            <span>إنشاء دعوة</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {invitations.map((item, index) => (
            <div key={index} className="relative border-2 border-blue-500 rounded-lg overflow-hidden shadow-md">
              {item.image ? (
                <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-[150px] object-cover" />
              ) : (
                <div className="w-full h-[150px] bg-gray-200 flex items-center justify-center text-gray-500">لا توجد صورة</div>
              )}
              <div className="p-4 text-right bg-white">
                <p className="text-lg font-bold text-[#1e2b47]">{item.title}</p>
                <p className="text-sm text-gray-600">{item.weekday} 🗓 {item.date}</p>
              </div>

              {/* القائمة الجانبية لكل دعوة */}
              <div className="absolute top-2 left-2 flex flex-col items-center">
                <button onClick={() => setMenuOpenIndex(menuOpenIndex === index ? null : index)}>
                  <div className="flex flex-col gap-1">
                    <span className="w-1.5 h-1.5 bg-[#003366] rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-[#003366] rounded-full"></span>
                    <span className="w-1.5 h-1.5 bg-[#003366] rounded-full"></span>
                  </div>
                </button>

                {menuOpenIndex === index && (
                  <div className="bg-white border mt-2 rounded shadow-lg w-32 text-sm text-right z-10">
                    <button
                      onClick={() => router.push(`/invitationdetails?title=${encodeURIComponent(item.title)}`)}
                      className="block w-full text-right px-4 py-2 hover:bg-gray-100"
                    >
                      تفاصيل الدعوة
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="block w-full text-right px-4 py-2 text-red-600 hover:bg-red-50"
                    >
                      حذف
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
