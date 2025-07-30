'use client';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const router = useRouter();

  const handleSend = (e) => {
    e.preventDefault();
    router.push('/verifycode');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center" dir="rtl">
      <div className="bg-white p-10 shadow-md rounded-md w-full max-w-lg flex gap-10">
        <div className="flex-1">
          <h2 className="text-2xl text-[#003366] font-bold mb-6">تغيير كلمة المرور</h2>
          <form onSubmit={handleSend}>
            <label className="block mb-2 text-sm text-gray-600">البريد الالكتروني:</label>
            <input
              type="email"
              defaultValue="Fay_12002@gmail.com"
              className="w-full mb-6 px-4 py-2 bg-[#F1F6FA] rounded border"
              required
            />
            <button type="submit" className="bg-[#003366] text-white px-6 py-2 rounded">
              إرسال رمز التحقق
            </button>
          </form>
        </div>
        
      </div>
    </div>
  );
}
