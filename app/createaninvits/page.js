'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Sidebar = ({ activePath }) => {
  const router = useRouter();
  const navItems = [
    { label: 'الصفحة الرئيسية', icon: '🏠', path: '/' },
    { label: 'المدعوين', icon: '👥', path: '/invited' },
    { label: 'الدعوات', icon: '📝', path: '/invitations' },
    { label: 'فيّ الحربي', icon: '👤', path: '/account' },
  ];
  return (
    <aside className="w-64 bg-gradient-to-b from-[#507ba6] to-[#7d97b8] text-white flex flex-col justify-between">
      <div className="flex flex-col gap-2 px-4 mt-6">
        <div className="flex items-center gap-2 mb-12">
          <Image src="/images/icons8-logo.png" alt="شعار" width={100} height={100} className="rounded-full" />
          <span className="text-6xl font-bold">حاضر</span>
        </div>
        {navItems.map((item) => (
          <button key={item.label} onClick={() => router.push(item.path)} className="flex gap-2 py-2 px-4 hover:bg-white/20 rounded">
            {item.icon} {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

const CreateInvitation = () => {
  const router = useRouter();
  const [invitees, setInvitees] = useState([
    'فهد عبدالعزيز الحربي',
    'احمد عمر الأحمدي',
    'حسين محمد العوفي',
    'خالد محمد الشهري',
  ]);
  const [newInvitee, setNewInvitee] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [title, setTitle] = useState('');
  const [weekday, setWeekday] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleDelete = (index) => {
    const updated = [...invitees];
    updated.splice(index, 1);
    setInvitees(updated);
  };

  const handleSelectChange = (e) => {
    const selected = e.target.value;
    if (selected && !invitees.includes(selected)) {
      setInvitees([...invitees, selected]);
    }
    setNewInvitee('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const handleSave = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const newInvitation = {
        title,
        date: selectedDate ? selectedDate.toLocaleDateString('en-GB') : '',
        weekday,
        image: reader.result, // صورة Base64
        invitees,
      };
      const existing = JSON.parse(localStorage.getItem('newInvitations') || '[]');
      localStorage.setItem('newInvitations', JSON.stringify([newInvitation, ...existing]));
      router.push('/invitations');
    };
    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      // بدون صورة
      const newInvitation = {
        title,
        date: selectedDate ? selectedDate.toLocaleDateString('en-GB') : '',
        weekday,
        image: '',
        invitees,
      };
      const existing = JSON.parse(localStorage.getItem('newInvitations') || '[]');
      localStorage.setItem('newInvitations', JSON.stringify([newInvitation, ...existing]));
      router.push('/invitations');
    }
  };

  return (
    <div className="flex-1 p-8 bg-[#f9faff] min-h-screen text-right font-sans flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold text-center mb-6 text-[#003366]">الدعوات</h1>

        <div className="border border-[#003366] p-4 rounded mb-6">
          <h2 className="text-xl font-semibold mb-4 text-[#003366] text-center">إنشاء دعوة</h2>

          <h3 className="text-md font-semibold text-[#003366] mb-2">بيانات المناسبة:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="العنوان" className="border rounded px-2 py-1" />
            <input type="text" value={weekday} onChange={(e) => setWeekday(e.target.value)} placeholder="اليوم" className="border rounded px-2 py-1" />
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd-MM-yyyy"
              placeholderText="DD-MM-YYYY"
              className="border rounded px-2 py-1 w-full"
              wrapperClassName="w-full"
            />
            <div className="relative w-full">
              <input type="file" id="imageUpload" className="hidden" onChange={handleImageChange} />
              <label htmlFor="imageUpload" className="w-full h-[32px] border-[#000000] border rounded px-2 py-1 flex items-center justify-end gap-1 text-gray-500 cursor-pointer hover:bg-gray-100 transition text-sm">
                <span className="text-xs">{imageFile ? imageFile.name : 'لم يتم إدراج صورة'}</span>
                📷
              </label>
            </div>
          </div>
        </div>

        <div className="border border-[#003366] p-4 rounded">
          <h3 className="text-md font-semibold text-[#003366] mb-2">المدعوين:</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {invitees.map((name, idx) => (
              <div key={idx} className="bg-white border border-gray-300 rounded px-2 py-1 flex items-center gap-1">
                {name}
                <button onClick={() => handleDelete(idx)} className="text-red-500 hover:text-red-700">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded p-2" value={newInvitee} onChange={handleSelectChange}>
              <option value="">اختر اسم المدعو</option>
              <option value="فهد عبدالعزيز الحربي">فهد عبدالعزيز الحربي</option>
              <option value="احمد عمر الأحمدي">احمد عمر الأحمدي</option>
              <option value="حسين محمد العوفي">حسين محمد العوفي</option>
              <option value="خالد محمد الشهري">خالد محمد الشهري</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button onClick={handleSave} className="bg-[#003366] text-white px-9 py-2 hover:bg-[#001f3f]">
          حـفـظ
        </button>
      </div>
    </div>
  );
};

export default function CreateInvitationPage() {
  return (
    <div className="min-h-screen flex bg-[#f9faff]" dir="rtl">
      <Sidebar activePath="/invitations" />
      <CreateInvitation />
    </div>
  );
}
