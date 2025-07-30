'use client';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا ممكن تضيف تحقق من صحة كلمة المرور لو حبيت
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center" dir="rtl">
      <div className="bg-white p-10 shadow-md rounded-md w-full max-w-xl flex gap-10">
        <div className="flex-1">
          <h2 className="text-2xl text-[#003366] font-bold mb-6">تغيير كلمة المرور</h2>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label className="block mb-1 text-[#003366]">كلمة المرور الجديدة:</label>
              <input
                type={showPass ? 'text' : 'password'}
                className="w-full px-4 py-2 bg-[#F1F6FA] border rounded pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
className="absolute left-3 top-[70%] transform -translate-y-1/2 text-gray-500"              >
                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative mb-6">
              <label className="block mb-1 text-[#003366]">إعادة كلمة المرور الجديدة:</label>
              <input
                type={showConfirm ? 'text' : 'password'}
                className="w-full px-4 py-2 bg-[#F1F6FA] border rounded pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute left-3 top-[70%] transform -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <button type="submit" className="bg-[#003366] text-white px-6 py-2 rounded w-full">
              حفظ
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
