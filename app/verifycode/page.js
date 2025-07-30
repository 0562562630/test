'use client';
import { useRouter } from 'next/navigation';

export default function VerifyCode() {
  const router = useRouter();

  const handleVerify = (e) => {
    e.preventDefault();
    router.push('/resetpassword');
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center" dir="rtl">
      <div className="bg-white p-10 shadow-md rounded-md w-full max-w-xl flex gap-10">
        <div className="flex-1">
          <h2 className="text-2xl text-[#003366] font-bold mb-2">تحقق من بريدك الالكتروني</h2>
          <p className="text-sm text-gray-600 mb-4">
            أرسلنا رمز التحقق إلى <span className="font-semibold">Fay_2002@gmail.com</span>
          </p>
          <form onSubmit={handleVerify}>
            <label className="block mb-2 text-sm text-[#003366]">رمز التحقق:</label>
            <input
              type="text"
              maxLength={4}
              defaultValue="9737"
              className="w-full mb-6 px-4 py-2 bg-[#F1F6FA] rounded border"
              required
            />
            <button type="submit" className="bg-[#003366] text-white px-6 py-2 rounded">
              إرسال
            </button>
          </form>
        </div>
       
      </div>
    </div>
  );
}
