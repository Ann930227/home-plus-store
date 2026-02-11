import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. 頂部宣傳條 */}
      <div className="bg-[#FF6600] text-white text-center py-2 text-sm font-bold">
        全站滿 $999 免運 | 新註冊會員現折 $100
      </div>

      {/* 2. 導覽列 Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* 這裡改掉了名稱 */}
          <div className="text-2xl font-black text-[#FF6600]">HOME PLUS 居家生活</div>
          
          <div className="flex-1 mx-10">
            <input 
              type="text" 
              placeholder="搜尋各式居家好物..." 
              className="w-full bg-gray-100 border-none rounded-full px-5 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
          <div className="flex items-center space-x-6 text-gray-600 text-sm">
            <span className="cursor-pointer hover:text-orange-500">會員中心</span>
            <span className="cursor-pointer hover:text-orange-500 font-bold text-orange-600">購物車 (0)</span>
          </div>
        </div>
      </header>

      {/* 3. 主視覺 Banner */}
      <div className="w-full bg-orange-50 h-72 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 tracking-tight">打造你的理想空間</h2>
          <p className="text-gray-600 mt-3 text-lg font-light">精選家具與收納用品，質感生活從這裡開始</p>
          <button className="mt-6 bg-[#FF6600] text-white px-8 py-2.5 rounded-full font-bold hover:bg-orange-700 transition shadow-lg">
            查看熱銷榜
          </button>
        </div>
      </div>

      {/* 4. 商品列表區 */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold border-l-4 border-orange-500 pl-3 text-gray-800">熱門推薦商品</h3>
          <span className="text-orange-500 text-sm cursor-pointer hover:underline">查看全部商品</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all group border border-gray-100">
              <div className="bg-gray-50 aspect-square rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                {/* 這裡隨機換點圖示感 */}
                {['🛋️', '🪑', '💡', '📦'][i-1]}
              </div>
              <h4 className="text-gray-700 text-sm font-medium h-10 line-clamp-2">
                質感嚴選 - 居家必備系列商品 {i}
              </h4>
              <div className="mt-3 flex items-baseline space-x-2">
                <span className="text-red-500 font-bold text-xl">$1,290</span>
                <span className="text-gray-400 text-xs line-through">$1,580</span>
              </div>
              <button className="w-full mt-4 bg-white border border-[#FF6600] text-[#FF6600] py-2 rounded-lg font-bold group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                加入購物車
              </button>
            </div>
          ))}
        </div>
      </main>
      

      {/* 5. 底部資訊 */}
      <footer className="bg-gray-100 py-10 border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 HOME PLUS 居家生活 版權所有</p>
        </div>
      </footer>
    </div>
  );
}