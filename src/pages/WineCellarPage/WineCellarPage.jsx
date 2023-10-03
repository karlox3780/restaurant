import './WineCellarPage.css';
import wines from '../../assets/data/wines.json';

function WineCellarPage() {
    const winesArray = wines;

    const filterWines = (type) => {
        const winesFiltered = winesArray.filter(wine => wine.type === type)
        return winesFiltered;
    }

    return (
        <div className='flex flex-col items-center m-[10px]'>
            <h1 className='text-[45px] text-[#8ea56f]'>Bodega</h1>
            <div className='w-[70%] grid grid-cols-3'>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Rioja</h1>
                    {
                        filterWines("Rioja").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Ribera del Duero</h1>
                    {
                        filterWines("Ribera del Duero").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Blancos</h1>
                    {
                        filterWines("Blancos").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Toro</h1>
                    {
                        filterWines("Toro").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Otros</h1>
                    {
                        filterWines("Otros").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Rosados</h1>
                    {
                        filterWines("Rosados").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className='text-left'>
                    <h1 className='text-[25px] text-[#8ea56f]'>Cavas</h1>
                    {
                        filterWines("Cavas").map((wine, index) => {
                            return (
                                <div className="text-teal-200" key={index}>
                                    {wine.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WineCellarPage;