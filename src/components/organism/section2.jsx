import React from 'react';

function Section() {
  return (
    <div className="mx-24 bg-green-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-10">
      {/* Left Section */}
      <div className="bg-white shadow-lg rounded-lg w-full md:w-3/4 p-8">
        <div>
          <h2 className="text-gray-700 font-semibold text-xl mb-4">Visi Kami</h2>
          <p className="text-gray-900 font-bold text-2xl mb-8">Menjadi koperasi dengan pengelolaan terbaik di Indonesia</p>
        </div>
        <div>
          <h2 className="text-gray-700 font-semibold text-xl mb-4">Misi Kami</h2>
          <p className="text-gray-900 mb-4">Meningkatkan kesejahteraan anggota dengan memberikan manfaat ekonomi melalui:</p>
          <ul className="list-decimal list-inside space-y-3 text-gray-700">
            <li>Pengembangan usaha yang menguntungkan dan selaras dengan sistem nilai Astra</li>
            <li>
              Peningkatan kinerja anggota melalui:
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Sumber daya manusia</li>
                <li>Sistem informasi dan teknologi</li>
                <li>Quality Cost Delivery Innovation (QCDI)</li>
              </ul>
            </li>
            <li>Peningkatan kesejahteraan anggota</li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-blue-100 shadow-lg rounded-lg w-full h-full md:w-1/4 p-4 flex justify-center items-center">
        <img src="/src/assets/images/sigma.png" className="w-full h-3/4 object-cover rounded-md" alt="Visi dan Misi" />
      </div>
    </div>
  );
}

export default Section;
