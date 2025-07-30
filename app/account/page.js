'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function AccountPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    fullName: 'فيّ عبدالرؤوف الحربي',
    email: 'Fay_2002@gmail.com',
    password: '********',
    confirmPassword: '********',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    const confirmed = window.confirm('هل أنت متأكد أنك تريد تسجيل الخروج؟');

    if (confirmed) {
      alert('تم تسجيل الخروج');
      router.push('/');
    }
    // إذا لم يؤكد، لا يحدث شيء ويبقى في نفس الصفحة
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 text-right font-sans" dir="rtl">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-[#003366] mb-8 text-center">الحساب الشخصي</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-[#003366] font-semibold mb-1">الاسم كامل:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-[#F1F6FA] border border-gray-200 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[#003366] font-semibold mb-1">البريد الالكتروني:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F1F6FA] border border-gray-200 rounded px-4 py-2 focus:outline-none"
            />
          </div>

          <div className="relative">
            <label className="block text-[#003366] font-semibold mb-1">كلمة المرور:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-[#F1F6FA] border border-gray-200 rounded px-4 py-2 pr-10 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-3 top-[70%] transform -translate-y-1/2 text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="relative">
            <label className="block text-[#003366] font-semibold mb-1">إعادة كلمة المرور:</label>
            <input
              type={showConfirm ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-[#F1F6FA] border border-gray-200 rounded px-4 py-2 pr-10 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute left-3 top-[70%] transform -translate-y-1/2 text-gray-500"
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-[#003366] hover:bg-[#002b55] text-white py-2  font-bold"
            >
              حفظ التعديل
            </button>
          </div>
        </form>

       
      </div>
    </div>
  );
}
