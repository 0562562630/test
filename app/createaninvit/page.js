'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CreateInvitee() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    const newInvitee = { name, email };

    // استرجاع البيانات الموجودة مسبقًا من localStorage
    const existing = JSON.parse(localStorage.getItem('invitees') || '[]');

    // إضافة المدعو الجديد
    const updated = [...existing, newInvitee];

    // حفظ البيانات الجديدة
    localStorage.setItem('invitees', JSON.stringify(updated));

    alert(`تم حفظ: ${name} - ${email}`);

    // التوجيه إلى صفحة المدعوين
    router.push('/invited');
  };

  return (
    <div className="min-h-screen flex bg-[#f9faff]" dir="rtl">
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

          <nav className="flex flex-col gap-2 px-4 text-sm">
            <button onClick={() => router.push('/profile')} className="flex items-center gap-2 py-2 px-4  hover:bg-white/20">
              🏠 <span>الصفحة الرئيسية</span>
            </button>
            <button onClick={() => router.push('/invited')} className="flex items-center gap-2 py-2 px-4  bg-white/20">
              👥 <span>المدعوين</span>
            </button>
            <button onClick={() => router.push('/invitations')} className="flex items-center gap-2 py-2 px-4  hover:bg-white/20">
              📝 <span>الدعوات</span>
            </button>
           <button onClick={() => router.push('/account')} className="flex gap-2 py-2 px-4 hover:bg-white/20 ">
  👤 فيّ الحربي
</button>
          </nav>
        </div>

        <div className="flex justify-around gap-4 px-2 mb-6">
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
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-right">
          <h2 className="text-2xl font-bold mb-6 text-[#003366]">المدعوّين</h2>

          <div className="mb-4">
            <label className="block mb-1 text-sm text-gray-700">اسم المدعو</label>
            <input
              type="text"
              className="w-full bg-blue-50 text-right p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="  "
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-sm text-gray-700">البريد الالكتروني</label>
            <input
              type="email"
              className="w-full bg-blue-50 text-right p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
            />
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#003366] text-white py-2 rounded hover:bg-[#00264d] transition"
          >
            حفظ
          </button>
        </div>
      </main>
    </div>
  );
}
