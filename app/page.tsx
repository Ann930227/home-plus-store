import React from 'react';

export default function Home() {
  const products = [
    { id: 1, name: '歐萊透氣高背全網椅 辦公椅', price: '3,999', originalPrice: '4,990', tag: '熱銷品' },
    { id: 2, name: '日本IRIS 米色天板 四層收納櫃', price: '2,190', originalPrice: '2,690', tag: '限定優惠' },
    { id: 3, name: 'MITSUBISHI三菱 28L變頻AI智慧除濕機', price: '34,721', originalPrice: '39,900', tag: '線上獨賣' },
    { id: 4, name: 'HOPMA 美背大容量三門二抽衣櫃', price: '3,080', originalPrice: '7,799', tag: '熱銷品' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 頂部橘色宣傳 */}
      <div className="bg-[#FF6600] text-white text-center py-2 text-sm font-bold">
        新春煥新 開運選 | 限時回饋 5 折起
      </div>

      {/* 導覽列 */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-3xl font-black text-[#FF6600]">HOME PLUS</div>
          <div className="flex-1 mx-10 max-w-xl">
            <input type="text" placeholder="搜尋商品..." className="w-full bg-gray-100 rounded-full px-6 py-2 outline-none border focus:border-[#FF6600]" />
          </div>
          <div className="flex space-x-6 text-gray-600 text-sm">
            <span>所有商品</span>
            <span>活動優惠</span>
            <span>關於我們</span>
          </div>
        </div>
      </header>

      {/* 主內容區 */}
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">新春煥新 開運選</h2>
        
        {/* 商品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group">
              {/* 商品圖片預留區 */}
              <div className="aspect-square bg-gray-100 relative">
                <div className="absolute top-2 left-2 bg-orange-100 text-[#FF6600] text-xs px-2 py-1 rounded">
                  {product.tag}
                </div>
                <div className="w-full h-full flex items-center justify-center text-gray-400">商品圖片</div>
              </div>
              
              {/* 商品資訊 */}
              <div className="p-4">
                <h3 className="text-gray-700 text-sm h-10 overflow-hidden mb-2 group-hover:text-[#FF6600] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline space-x-2">
                  <span className="text-[#FF6600] text-xl font-bold">${product.price}</span>
                  <span className="text-gray-400 text-xs line-through">${product.originalPrice}</span>
                </div>
                <button className="w-full mt-4 py-2 border border-[#FF6600] text-[#FF6600] rounded hover:bg-[#FF6600] hover:text-white transition-colors text-sm font-medium">
                  立即選購
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
