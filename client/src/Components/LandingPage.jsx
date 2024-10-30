import axios from "axios";
import { useEffect, useState } from "react";

export function LandingPage() {
  return (
    <>
      <Header />
      <ProductCard />
    </>
  );
}

export function Header() {
  return (
    <>
      {/* div for title */}
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-[#31a0e0] mt-20">เที่ยวไหนดี</h1>
      </div>
    </>
  );
}

export function ProductCard() {
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${input}`
    );
  };
  return (
    <>
      {/* div for search components */}
      <div className="mx-40">
        {/* div for search title */}
        <div>ค้นหาที่เที่ยว</div>
        <div className="flex justify-center">
          <p>หาที่เที่ยวแล้วไปกัน..</p>
        </div>
        {/* search input */}
        <div className="flex justify-center">
          <input className="border border-black w-full"></input>
        </div>
      </div>
      {/* Overall Product Card */}
      <div>
        {/* div for image */}
        <div>
          <img>image index 0</img>
        </div>
        {/* div for right side content */}
        <div>
          {/* div for right top text */}
          <div>
            <h2>Title</h2>
            <p>Description</p>
            <p>อ่านต่อ</p>
            <p>Category</p>
          </div>
          {/* div for right bottom img */}
          <div>
            <img>image index 1</img>
            <img>image index 2</img>
            <img>image index 3</img>
          </div>
        </div>
      </div>
    </>
  );
}
