export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center py-4 px-8 bg-transparent z-50">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="PharmaCheck Logo"
          className="w-[247px] h-[100px] object-contain"
        />
      </div>

      <nav className="flex justify-around items-center w-[685px] h-[70px] rounded-[40px] bg-white shadow-md flex-shrink-0">
        <a href="#" className="flex justify-center items-center w-[71px] h-[30px] text-black text-[24px] font-description font-bold leading-normal no-underline flex-shrink-0">
          Home
        </a>
        <a href="#" className="flex justify-center items-center w-[71px] h-[30px] text-[#004E64] border-b-4 border-[#004E64] text-[24px] font-description font-bold leading-normal no-underline flex-shrink-0">
          About
        </a>
        <a href="#" className="flex justify-center items-center w-[71px] h-[30px] text-black text-[24px] font-description font-bold leading-normal no-underline flex-shrink-0">
          Verify
        </a>
        <a href="#" className="flex justify-center items-center w-[71px] h-[30px] text-black text-[24px] font-description font-bold leading-normal no-underline flex-shrink-0">
          Categories
        </a>
      </nav>

      <div className="flex w-[208px] h-[56px] rounded-[40px] bg-white shadow-md overflow-hidden flex-shrink-0">
        <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] bg-[#c7f5f0] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/USA Flag.png" alt="US Flag" className="w-[24px] h-auto mr-2 object-contain" />
          ENG
        </button>
        <button className="flex items-center gap-2 px-[14px] py-[8px] rounded-[40px] text-black text-[24px] font-semibold font-description transition-colors">
          <img src="/Indonesia Flag.png" alt="ID Flag" className="w-[24px] h-auto mr-2 object-contain" />
          IND
        </button>
      </div>
    </header>
  );
}