import {Album} from './album/Album'

export const AlbumContentHolder:React.FC = ()=> {
    return(
        <div className='grow w-full h-full bg-[rgb(var(--blackbrown))] grow rounded-lg h-fit'> 
            <Album/>
        </div>
    )
}