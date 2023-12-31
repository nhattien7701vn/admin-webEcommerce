const Header = () => {
  return (
    <header className="sticky top-0 flex justify-between items-center h-[70px] px-[3rem] bg-[#f0f0f0] border-solid border-b-2 border-[#d7d6d6] ">
      <span className="flex gap-[5px]">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z" fill="none" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
        </svg>
        <p>Dash Board / Chart</p>
      </span>
      <span className='flex gap-[0.5rem] items-center'>
        <p className="text-[35px]">ADMIN</p>
        <button className='p-[0.3rem] rounded-[10px] border-black border-[2px]' >
          <svg className='w-[1rem] h-[1rem]' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.9917 6H6V42H24" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33 33L42 24L33 15" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 23.9917H42" stroke="#000000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </span>
    </header>
  )
}
export default Header
