import axios from "axios";
import { useEffect, useState } from "react";

export function Homepage() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [input]);

  const getData = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4001/trips?keywords=${input}`
      );
      setData(result.data.data);
    } catch (error) {}
  };
  return (
    <>
      <Header />
      {/* div for search components */}
      <div className="mx-40">
        {/* div for search title */}
        <div>ค้นหาที่เที่ยว</div>
        <div className="flex justify-center">
          <p>หาที่เที่ยวแล้วไปกัน..</p>
        </div>
        {/* search input */}
        <div className="flex justify-center">
          <input
            className="border border-black w-full"
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>
      </div>
      {/* <ProductCard /> */}
      {data.map((item) => (
        <ProductCard
          key={item.eid}
          image0={item.photos[0]}
          title={item.title}
          description={item.description}
          link={item.url}
          category0={item.tags[0]}
          category1={item.tags[1]}
          category2={item.tags[2]}
          category3={item.tags[3]}
          image1={item.photos[1]}
          image2={item.photos[2]}
          image3={item.photos[3]}
        />
      ))}
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

export function Search() {
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
    </>
  );
}

export function ProductCard(props) {
  return (
    <>
      {/* Overall Product Card */}
      <div className="flex my-5 justify-center">
        {/* div for image */}
        <div className="w-72 h-48 mr-4">
          <img
            src={props.image0}
            alt="imageindex0"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        {/* div for right side content */}
        <div className="w-1/2">
          {/* div for right top text */}
          <div>
            <h2>{props.title}</h2>
            <p className="line-clamp-1">{props.description}</p>
            <div>
              <a href={props.link}>อ่านต่อ</a>
            </div>
            <p>
              หมวด {props.category0} {props.category1} {props.category2}{" "}
              {props.category3}
            </p>
          </div>
          {/* div for right bottom img */}
          <div className="flex w-16 h-16">
            <img src={props.image1} alt="imageindex1" />
            <img src={props.image2} alt="imageindex2" />
            <img src={props.image3} alt="imageindex3" />
          </div>
        </div>
      </div>
    </>
  );
}
