'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2, Save } from 'lucide-react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';

export default function InviteesPage() {
  const router = useRouter();
  const [invitees, setInvitees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState('');
  const [editEmail, setEditEmail] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('invitees') || '[]');
    setInvitees(stored);
  }, []);

  const handleDelete = (index) => {
    const updated = [...invitees];
    updated.splice(index, 1);
    setInvitees(updated);
    localStorage.setItem('invitees', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditName(invitees[index].name);
    setEditEmail(invitees[index].email);
  };

  const saveEdit = () => {
    const updated = [...invitees];
    updated[editIndex] = { name: editName, email: editEmail };
    setInvitees(updated);
    localStorage.setItem('invitees', JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen flex bg-[#f9faff]" dir="rtl">
      <aside className="w-64 bg-gradient-to-b from-[#507ba6] to-[#7d97b8] text-white flex flex-col justify-between">
        <div className="flex flex-col gap-2 px-4 mt-6">
          <div className="flex items-center gap-2 mb-12">
            <Image src="/images/icons8-logo.png" alt="شعار" width={100} height={100} className="rounded-full" />
            <span className="text-6xl font-bold">حاضر</span>
          </div>
          <button onClick={() => router.push('/profile')} className="flex gap-2 py-2 px-4 hover:bg-white/20 ">🏠 الصفحة الرئيسية</button>
          <button className="flex gap-2 py-2 px-4 bg-white/20 ">👥 المدعوين</button>
          <button
  onClick={() => router.push('/invitations')}
  className="flex items-center gap-2 py-2 px-4 hover:bg-white/20"
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



    </div>

        <div className="flex justify-around gap-4 px-2 mb-6">
          {['W', 'instag', 'X', 'vector'].map((img, idx) => (
            <a key={idx} href="#" className="bg-[#003366] p-2 rounded-xl hover:bg-white/20 transition">
              <Image src={`/images/${img}.png`} alt="icon" width={24} height={24} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </aside>

      <main className="flex-1 px-10 py-8 text-right">
      <div className="flex justify-between items-center mb-6">
  <h1 className="text-2xl font-bold text-[#1e2b47]">المدعوين</h1>
  <button
    onClick={() => router.push('/createaninvit')}
    className="bg-[#7c91b3] text-white px-4 py-2  flex items-center gap-2"
  >
    <Image
      src="/images/useraddd.png"
      alt="user add icon"
      width={15}
      height={15}
    />
    <span>إنشاء مدعو</span>
  </button>
</div>


        <div className="overflow-x-auto">
          <table className="w-full border border-[#cdd8e4]">
            <thead className="bg-white">
              <tr className="text-[#1e2b47] text-center ">
                <th className="border px-4 py-2">اسم المدعو</th>
                <th className="border px-4 py-2">البريد الالكتروني</th>
                <th className="border px-4 py-2">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {invitees.map((inv, idx) => (
                <tr key={idx} className="text-[#1e2b47] text-center">
                  <td className="border px-4 py-2">
                    {editIndex === idx ? (
                      <input
                        className="bg-blue-50 p-1 rounded text-right w-full"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      inv.name
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editIndex === idx ? (
                      <input
                        className="bg-blue-50 p-1 rounded text-right w-full"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                      />
                    ) : (
                      inv.email
                    )}
                  </td>
                  <td className="border px-4 py-2 flex justify-center gap-3">
                    {editIndex === idx ? (
                      <button onClick={saveEdit} className="text-green-600 hover:text-green-800">
                        <Save size={16} />
                      </button>
                    ) : (
                      <>
                        <button onClick={() => handleDelete(idx)} className="text-red-500 hover:text-red-700 px-4 py-2">
                          <Trash2 size={16} />
                        </button>
                        <button onClick={() => handleEdit(idx)} className="text-gray-600 hover:text-gray-800 px-4 py-2">
                          <Pencil size={16} />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
              {invitees.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-500">لا يوجد مدعوين حالياً</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
