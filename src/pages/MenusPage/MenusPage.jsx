import './MenusPage.css';
import menus from '../../assets/data/menus.json';

function MenusPage() {
    const { especial_menu } = menus;
    const { tasting_menu } = menus;
    console.log(especial_menu)
    return (
        <div className='absolute flex flex-col items-center justify-center h-fit min-h-full w-full p-[10px] text-teal-200'>
            <div className='w-[600px] bg-[#24251D] p-[10px]'>
                <h1 className="text-[30px]">MENÚS DE DIARIO</h1>
                <h3>( CONTACTE CON NOSOTROS, EN CASO DE SER UN GRUPO DE MÁS DE 10 PERSONAS )</h3>
            </div>
            <div className='w-[600px] bg-[#24251D] p-[10px] m-[10px]'>
                <h1 className='text-[25px]'>{especial_menu.name}</h1>
                <h1 className='text-[20px] mt-[5px]'>{especial_menu.price_week}</h1>
                <h1 className='text-[20px] mt-[5px]'>{especial_menu.prece_weekend}</h1>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{especial_menu.starters.name}</h2>
                    {
                        especial_menu.starters.items.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{especial_menu.second_course.name}</h2>
                    {
                        especial_menu.second_course.items.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{especial_menu.dessert.name}</h2>
                    <p>{especial_menu.dessert.item}</p>
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <p className=''>{especial_menu.wine}</p>
                </div>

            </div>

            <div className='w-[600px] bg-[#24251D] p-[10px] m-[10px]'>
                <h1 className='text-[25px]'>{tasting_menu.name}</h1>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{tasting_menu.starters.name}</h2>
                    {
                        tasting_menu.starters.items.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{tasting_menu.second_course.name}</h2>
                    {
                        tasting_menu.second_course.items.map(item => {
                            return (
                                <p>{item}</p>
                            )
                        })
                    }
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <h2 className='text-[20px]'>{tasting_menu.dessert.name}</h2>
                    <p>{tasting_menu.dessert.item}</p>
                </div>
                <div className='border p-[20px] m-[20px]'>
                    <p className=''>{tasting_menu.drink}</p>
                </div>

            </div>
        </div>
    )
}

export default MenusPage;