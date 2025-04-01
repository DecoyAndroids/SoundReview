import styles from './searcgInput.module.scss'

export const SearchInput = () => {
    return(
      <div className={`ml-[30px] mr-[30px] mt-[15px] mb-[13px] ${styles.SearchInput}`}>
        <button className='bg-white p-0 p m-0 ml-0 hover:bg-white hover:text-zinc-400'>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search  h-4 w-4 shrink-0 c-black">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
        <input placeholder="Найти" className='m-0 p-0 outline-none rounded-none w-[100%]'/>
      </div>
    )
}