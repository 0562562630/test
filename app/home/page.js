'use client';

import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/navigation';  // استورد الrouter هنا

export default function LoginPage() {
  const router = useRouter();  // عرف الrouter

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'Fay_2002@gmail.com' && password === '12345678') {
      alert('تم تسجيل الدخول بنجاح');
      window.location.href = '/profile';
    } else {
      alert('البريد أو كلمة المرور غير صحيحة');
    }
  };

  return (
    <>
      <Head>
        <title>تسجيل الدخول - حاضر</title>
        <meta name="description" content="تسجيل دخول لمنصة حاضر" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-[#003366] to-[#FFFFFF] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md p-8 flex flex-col items-center space-y-6 text-right">
          {/* شعار */}
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-7xl font-bold text-white">حاضر</h1>
            <Image
              src="/images/icons8-logo.png"
              alt="شعار"
              width={120}
              height={120}
              className="rounded-full"
            />
          </div>

          {/* النموذج */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div>
              <label className="block text-xl text-white mb-1">البريد الالكتروني</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-4 py-2 pr-10 rounded-lg border bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xl text-white mb-1">كلمة المرور</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 pr-10 rounded-lg border bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                >
                  {/* ممكن تضيف ايقونة هنا */}
                </button>
              </div>

              <div
                onClick={() => router.push('/forgotpassword')}
                className="text-xs text-[#454545] mt-1 hover:underline cursor-pointer text-left"
              >
                هل نسيت كلمة المرور؟
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#003366] text-white rounded-lg hover:bg-[#002b55] font-semibold text-lg transition-all duration-200"
            >
              تسجيل دخول
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
