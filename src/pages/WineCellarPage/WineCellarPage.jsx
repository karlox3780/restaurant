import './WineCellarPage.css';
import wines from '../../assets/data/wines.json';
import WineColum from '../../components/WineColum/WineColum';

function WineCellarPage() {
    const winesArray = wines;

    const filterWines = (type) => {
        const winesFiltered = winesArray.filter(wine => wine.type === type)
        return winesFiltered;
    }

    return (
        <div className='flex flex-col items-center m-[10px]'>
            <h1 className='text-[45px] text-[#8ea56f] mb-[20px] animate-fade-down'>Bodega</h1>
            <div className='w-[70%] grid grid-cols-3'>
                <div className='text-left mb-[20px] animate-fade-right'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Rioja</h1>
                    <WineColum wines={filterWines("Rioja")}></WineColum>
                </div>
                <div className='text-left mb-[20px] animate-fade-down'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Ribera del Duero</h1>
                    <WineColum wines={filterWines("Ribera del Duero")}></WineColum>
                </div>
                <div className='text-left mb-[20px] animate-fade-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Blancos</h1>
                    <WineColum wines={filterWines("Blancos")}></WineColum>

                    <div className='text-left mt-[20px] animate-fade-left'>
                        <h1 className='text-[25px] text-[#8ea56f]'>Rosados</h1>
                        <WineColum wines={filterWines("Rosados")}></WineColum>
                    </div>
                </div>
                <div className='text-left mb-[20px] animate-fade-right'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Toro</h1>
                    <WineColum wines={filterWines("Toro")}></WineColum>
                </div>
                <div className='text-left mb-[20px] animate-fade-up'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Otros</h1>
                    <WineColum wines={filterWines("Otros")}></WineColum>
                </div>
                <div className='text-left mb-[20px] animate-fade-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Cavas</h1>
                    <WineColum wines={filterWines("Cavas")}></WineColum>
                </div>
            </div>
        </div>
    )
}

export default WineCellarPage;