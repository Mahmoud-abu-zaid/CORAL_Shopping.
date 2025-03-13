export default function Home() {
  return (
    <>
      <div className="bg-[#f4f4f5] flex justify-center items-center flex-wrap py-[60px]">
        <div className="p-[35px]">
          <h2 className="text-[60px]">Collections</h2>
          <p className="py-[15px] text-[19px]">
            you can explore ans shop many differnt collection <br />
            from various barands here.
          </p>
          <button className="bg-[#29262f] text-white px-3 py-2 ">
            <i className="fa-solid fa-bag-shopping pr-2"></i> Shop Now
          </button>
        </div>
        <div className="p-2">
          <div className="rounded-br-[140px] border-[#b7b7b8] border-2 p-2 rounded-tl-[140px] ">
            <img src="/imges/engin-akyurt-jaZoffxg1yc-unsplash 1.png" alt="img hero section" className="rounded-tl-[140px] rounded-br-[140px] w-[350px]" />
          </div>
        </div>
      </div>
    </>
  );
}
