'use client'
import Link from "next/link"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Separator } from "~/components/ui/separator"
import { useAuthStore } from '~/store/authStore';
import { Slider } from "~/components/ui/shadcn/slider"
import { useAlbumPostRating} from "~/hooks/useAlbumPostRating"
import { useAlbumAverageRating } from "~/hooks/useAlbumAverageRating"
import { useAlbumUserRating } from "~/hooks/useAlbumUserRating"
import { useAlbumUpdateRating } from "~/hooks/useAlbumUpdateRating"
import { useRouter } from 'next/navigation'
import { RateWindowProps } from "~/app/types/propsTypes.module"

export const getColor = (value: number): string => {
    const clampedValue = Math.min(100, Math.max(0, value));
    const red = Math.round((100 - clampedValue) * 2.55);
    const green = Math.round(clampedValue * 2.55);
    return `rgb(${red}, ${green}, 0)`;
  };

export function getWordForm(value: number, wordForms: [string, string, string]): string {
    const absValue = Math.abs(value) % 100;
    const lastDigit = absValue % 10;
    if (absValue > 10 && absValue < 20) {return wordForms[2];}
    if (lastDigit === 1) {return wordForms[0];}
    if (lastDigit >= 2 && lastDigit <= 4) {return wordForms[1];}
  
    return wordForms[2]; 
  }

export const RateWindow:React.FC<RateWindowProps> = (props) => {
    const{SpotiHref} = {...props}
    const [rateWindowState, setRateWindowState] = useState({
        isRateWindow : false,
        inAccNotice: false,
        actualRate : [50],
    })
    const { id } = useParams();
    const router = useRouter()
    const user = useAuthStore((state) => state.user);
    const inAcc = user?.id ? true : false
    const albumId = Array.isArray(id) ? id[0] : id ?? '';
    const albumIdSafe = albumId ?? '';
    const userIdSafe = user?.id ?? '';
    const averageRatingQuery = useAlbumAverageRating(albumIdSafe);
    const userRatingQuery = useAlbumUserRating(albumIdSafe, userIdSafe, {enabled: !!albumIdSafe && !!userIdSafe,}); 
    const { mutate: postRating, isPending } = useAlbumPostRating()
    const { mutate: updateRating} = useAlbumUpdateRating()
    
    const changeRateWindowState = () => {
            if (inAcc){
                setRateWindowState({...rateWindowState, isRateWindow:!rateWindowState.isRateWindow})
            }else{
                setRateWindowState({...rateWindowState, inAccNotice:true, isRateWindow:!rateWindowState.isRateWindow})
            }
        }
    
        const SliderOnChange = (val:number[])=>{
            setRateWindowState({...rateWindowState, 'actualRate':val})
        }
        
        const handlePostRating = () => {
            postRating({
                albumId: albumId!,
                userId: user?.id ?? '',
                rating: rateWindowState.actualRate[0] ?? 0,
            })
            setRateWindowState({...rateWindowState, isRateWindow:!rateWindowState.isRateWindow})
            window.location.reload()
    }
        const handleUpdateRating = () => {
            const confirmed = window.confirm("Вы точно хотите изменить свою оценку?");
            if (confirmed){
                updateRating({
                    albumId: albumId!,
                    userId: user?.id ?? '',
                    rating: rateWindowState.actualRate[0] ?? 0,
                })
            }
            setRateWindowState({...rateWindowState, isRateWindow:!rateWindowState.isRateWindow})
            window.location.reload()
    
        }

    return(
        <div className="flex grow flex-col gap-3">
                    <div className="bg-[rgb(var(--gray))] p-3 py-4 justify-around rounded-lg flex w-full gap-4 h-fit w-fit">
                        {/* <div className="flex flex-col 2xl:flex-row ">
                            <div>
                            <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка критиков</p>
                            <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> 84</p>                          
                            <div className={`h-[0.3rem] w-[10rem] m-auto mb-[1rem] overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                <div className={`h-full transition-all`} 
                                    style={{width:67+'%', backgroundColor:getColor(84)}}> 
                                </div>
                            </div>
                            </div>
                            <p className="my-auto font-[300] text-[rgb(var(--sub))] text-[1rem]">на основе <b>1700</b> оценок</p>    
                        </div> */}
                        {!averageRatingQuery.isLoading ? 
                            <div className="flex flex-col 2xl:flex-row">
                                <div>
                                <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка критиков</p>
                                <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> NR</p>
                                </div>
                            </div>
                        : <></>
                        }
                        <Separator orientation="vertical" className="bg-[rgb(var(--blackbrown))]"/>
                        {!averageRatingQuery.isLoading ?  
                            averageRatingQuery.data!.average !==  0 ? 
                                <div className="gap-2 flex flex-col 2xl:flex-row ">
                                    <div>
                                        <p className="text-[1.2rem] mb-[-0.8rem]  h-fit">оценка слушателей</p>
                                        <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> {averageRatingQuery.data!.average}</p>                          
                                        <div className={`h-[0.3rem] w-[10rem] m-auto mb-[1rem] overflow-hidden`} style={{backgroundColor:'rgb(var(--text))'}}>
                                            <div className={`h-full transition-all`} style={{width:averageRatingQuery.data!.average+'%', backgroundColor:getColor(averageRatingQuery.data!.average)}}/> 
                                        </div>
                                    </div>
                                    <p className="my-auto font-[300] text-[rgb(var(--sub))] text-[1rem]">на основе <b>{averageRatingQuery.data!.totalVotes}</b> {getWordForm(averageRatingQuery.data!.totalVotes, ['оценки', 'оценок', 'оценок'])}</p>           
                                </div>
                            :
                                <div className="flex flex-col 2xl:flex-row">
                                    <div>
                                        <p className="text-[1.2rem] mb-[-0.8rem] h-fit">оценка слушателей</p>
                                        <p className="m-auto text-[3.2rem] mb-[-0.5rem] h-fit w-fit"> NR</p>
                                    </div>
                                </div>
                        :<></>}
                    </div>
                    <div>
                        <Link className="bg-[rgb(var(--gray))] p-2 rounded-lg hover:bg-[rgb(var(--spotify))] transform duration-300" href={SpotiHref ?? ''}>Spotify</Link>
                    </div>
                    {!rateWindowState.isRateWindow ? 
                        (!userRatingQuery.data?.isRated ?    
                            <button className="bg-[rgb(var(--gray))] text-[1.2rem] p-3"  onClick={changeRateWindowState}> Поставить оценку</button>
                            :
                            <button className="bg-[rgb(var(--gray))] text-[1.2rem] p-3"  onClick={changeRateWindowState}> Вы оценили этот альбом на {userRatingQuery.data.userRate} {getWordForm(userRatingQuery.data.userRate ?? 0, ['балл', 'балла', 'баллов'])} </button>)
                    : 
                        (!rateWindowState.inAccNotice ?
                            (!userRatingQuery.data?.isRated ?
                                <div className="h-fit bg-[rgb(var(--gray))] relative rounded-lg flex flex-col gap-1" >
                                    <div className="h-fit bg-[rgb(var(--cursedblack))] w-[80%] m-auto flex flex-col mt-3 mb-3">
                                        <div className="h-1 rounded-lg mb-[-0.1rem]" style={{width:String(Number(rateWindowState.actualRate[0]))+'%', backgroundColor:getColor(rateWindowState.actualRate[0] ?? 50)}}/>
                                        <Slider defaultValue={[50]} max={100} step={1} onValueChange={SliderOnChange}  className="bg-black rounded-lg " name='actualRate' />                           
                                    </div>
                                    <button className="absolute top-0 right-0 hover:bg-[rgb(var(--sub))] p-1 m-1 mt-0" onClick={changeRateWindowState}>свернуть</button> 
                                    <button className=" bg-[rgb(var(--gray))] w-full text-[1.2rem] hover:bg-[rgb(var(--sub))] p-6" onClick={handlePostRating} > Поставить оценку {rateWindowState.actualRate}</button>                     
                                </div>
                                :
                                <div className="h-fit bg-[rgb(var(--gray))] relative rounded-lg flex flex-col gap-1" >
                                    <p className="text-[1.3rem] m-auto w-fit mt-[0.3rem]">Вы хотите изменить свою оценку?</p>
                                    <div className="h-fit bg-[rgb(var(--cursedblack))] w-[80%] m-auto flex flex-col mt-3 mb-3">
                                        <div className="h-1 rounded-lg mb-[-0.1rem]" style={{width:String(Number(rateWindowState.actualRate[0]))+'%', backgroundColor:getColor(rateWindowState.actualRate[0] ?? 50)}}/>
                                        <Slider defaultValue={[50]} max={100} step={1} onValueChange={SliderOnChange}  className="bg-black rounded-lg " name='actualRate' />                           
                                    </div>
                                    <button className="absolute top-0 right-0 hover:bg-[rgb(var(--sub))] p-1 m-1 mt-0" onClick={changeRateWindowState}>свернуть</button> 
                                    <button className=" bg-[rgb(var(--gray))] w-full text-[1.2rem] hover:bg-[rgb(var(--sub))] p-6" onClick={handleUpdateRating} > Да, я хочу изменить оценку на {rateWindowState.actualRate} {getWordForm(rateWindowState.actualRate[0] ?? 50, ['балл', 'балла', 'баллов'])}</button>                     
                                </div>)
                        : 
                            <div className="h-fit bg-[rgb(var(--gray))] relative rounded-lg flex flex-col gap-1">
                                <p className="h-fit p-2 m-auto">Чтобы поставить оценку альбому, нужно создать аккаунт или войти в него</p>
                                <div className="flex m-auto gap-5">
                                    <Link href='/login' className="bg-[rgb(var(--anthracitegrey))] p-2 px-5 rounded-lg hover:bg-[rgb(var(--sub))] transform duration-300">Войти</Link>
                                    <Link href='/signp' className="bg-[rgb(var(--anthracitegrey))] p-2 px-5 rounded-lg hover:bg-[rgb(var(--sub))] transform duration-300">Создать</Link>
                                </div>
                                <button className="absolute bottom-0 right-0 hover:bg-[rgb(var(--sub))] p-1 m-1 mt-0" onClick={changeRateWindowState}>свернуть</button> 
                            </div>)}
                </div>
    )
}