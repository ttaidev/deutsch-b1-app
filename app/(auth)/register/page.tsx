"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  }, [router]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-slate-200 shadow-xl text-center space-y-4">
        <Sparkles className="w-10 h-10 text-indigo-600 mx-auto animate-spin" />
        <h1 className="text-xl font-bold text-slate-800">Tài khoản Gạo đã sẵn sàng!</h1>
        <p className="text-xs text-slate-500 font-medium">Đang tự động chuyển hướng đến bảng điều khiển...</p>
      </div>
    </div>
  );
}
