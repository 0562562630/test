'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function InvitationDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleParam = searchParams.get('title') || '';

  const [title, setTitle] = useState(titleParam);
  const [content, setContent] = useState('');
  const [guests, setGuests] = useState([]);

  // بيانات النسب محدثة حسب طلبك
  const attendanceData = [
    { label: 'ملتقى الذكاء الاصطناعي', value: 55 },
    { label: 'ندوة علمية', value: 35 },
    { label: 'ورشة عمل التخطيط الفعال', value: 100 },
    { label: 'ورشة عمل الأمن السيبراني', value: 40 },
    { label: 'مؤتمر تقني', value: 80 },
    { label: 'احتفال سنوي ', value: 65 },
  ];

  // إيجاد النسبة المناسبة حسب العنوان
  const currentAttendance = attendanceData.find(a => a.label.trim() === title.trim());
  const attendanceRate = currentAttendance ? currentAttendance.value : 0;

  useEffect(() => {
    const key = `invitation_${titleParam}`;
    const saved = localStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      setContent(parsed.content || '');
      setGuests(parsed.guests || []);
    } else {
      setGuests([
        { name: 'فهد عبدالعزيز الحربي', email: 'Fahad_2002@gmail.com', reminded: 'نعم', attended: 'تم الحضور' },
        { name: 'حسين محمد العوفي', email: 'Hussein_2002@gmail.com', reminded: 'نعم', attended: 'تم الحضور' },
        { name: 'خالد محمد الشمري', email: 'khalid_mo100@gmail.com', reminded: 'نعم', attended: 'تم الحضور' },
        { name: 'احمد عمر الأحمدي', email: 'Ahmed_omar1@gmail.com', reminded: 'نعم', attended: 'تم الحضور' },
      ]);
    }
  }, [titleParam]);

  const handleSave = () => {
    const key = `invitation_${title}`;
    const data = { content, guests };
    localStorage.setItem(key, JSON.stringify(data));
    router.push('/invitations');
  };

  return (
    <div className="min-h-screen flex bg-[#f0f6ff]" dir="rtl">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#003366] mb-6">تفاصيل: {title}</h1>

        <div className="grid grid-cols-2 gap-4 border border-blue-700">
          {/* نسبة الحضور الفعلي */}
          <div className="flex flex-col items-center justify-center border border-blue-700 py-6">
            <h2 className="text-xl font-bold text-[#003366] mb-4">نسبة الحضور الفعلي</h2>

            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 150 150" >
                {/* الخلفية */}
                <circle
                  cx="75" cy="75" r="60"
                  stroke="#cbd9ec"
                  strokeWidth="20"
                  fill="none"
                />
                {/* النسبة */}
                <circle
                  cx="75" cy="75" r="60"
                  stroke="#003366"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="377"
                  strokeDashoffset={`${377 - (attendanceRate / 100) * 377}`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#003366] text-2xl font-bold">
                {attendanceRate}%
              </span>
            </div>

            {/* الأسطورة */}
            <div className="flex gap-6 mt-4 text-sm text-[#003366] font-semibold">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#003366] rounded-sm"></div> عدد الحاضرين
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#cbd9ec] rounded-sm"></div> عدد غير الحاضرين
              </div>
            </div>
          </div>

          {/* المحتوى */}
          <div className="border border-blue-700 py-6 px-4 flex flex-col gap-3">
            <h2 className="text-xl font-bold text-[#003366] mb-2">المحتوى</h2>
            <div className="text-right">
              <div className="mb-2">
                <span className="font-semibold">العنوان:</span>
                <input
                  type="text"
                  className="border w-full px-2 py-1 mt-1"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <span className="font-semibold">مضمون الدعوة:</span>
                <textarea
                  className="border w-full h-24 px-2 py-1 mt-1"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* جدول المدعوين */}
        <div className="mt-8 border border-blue-700">
          <table className="w-full text-center">
            <thead className="bg-[#cbd9ec] text-[#003366] font-bold">
              <tr>
                <th className="py-2 px-4 border">اسم المدعو</th>
                <th className="py-2 px-4 border">البريد الالكتروني</th>
                <th className="py-2 px-4 border">تم التذكير؟</th>
                <th className="py-2 px-4 border">حالة الحضور</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest, idx) => (
                <tr key={idx} className="bg-white">
                  <td className="border py-2">{guest.name}</td>
                  <td className="border py-2">{guest.email}</td>
                  <td className="border py-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={guest.reminded}
                      onChange={(e) => {
                        const updated = [...guests];
                        updated[idx].reminded = e.target.value;
                        setGuests(updated);
                      }}
                    >
                      <option>نعم</option>
                      <option>لا</option>
                    </select>
                  </td>
                  <td className="border py-2">
                    <select
                      className="border rounded px-2 py-1"
                      value={guest.attended}
                      onChange={(e) => {
                        const updated = [...guests];
                        updated[idx].attended = e.target.value;
                        setGuests(updated);
                      }}
                    >
                      <option>تم الحضور</option>
                      <option>لم يتم الحضور</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* زر الحفظ */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSave}
            className="bg-[#003366] text-white px-6 py-2  hover:bg-[#002244] transition"
          >
            حفظ التعديلات
          </button>
        </div>
      </main>
    </div>
  );
}
