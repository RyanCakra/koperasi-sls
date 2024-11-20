import React from 'react';
import Button from '../atoms/Button';

function section() {
  return (
    <div className="flex mx-24 justify-between bg-yellow-500 py-10">
      <div className="bg-blue-400 w-1/4">
        <img src="/src/assets/images/sigma.png" className="w-full h-full" alt="" />
      </div>
      <div className="bg-red-500 w-3/4 px-10">
        <div className="mt-4">
          <h2 className="font-semibold text-xl">Sekilas tentang kami</h2>
          <p className="font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eius numquam in, velit vitae tenetur fugit error explicabo iure ducimus magni, autem, nostrum quidem. Hic dolore esse nisi ab natus.</p>
          <div>
            <Button text="Lihat Selengkapnya" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default section;
