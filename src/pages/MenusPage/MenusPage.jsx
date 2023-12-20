import './MenusPage.css';
import menus from '../../assets/data/menus.json';
import FadeInSection from '../../components/FadeInSection/FadeInSection.jsx';

function MenusPage() {
    return (
        <div className='absolute flex flex-col items-center justify-center h-fit min-h-full w-full p-[10px] text-teal-200 animate-fade-down animate-duration-1000'>
            <FadeInSection class="w-[600px] max-xl:w-full">
                <div className='w-[600px] bg-[#24251D] p-[10px] max-xl:w-full'>
                    <h1 className="text-[30px]">MENÚS DE DIARIO</h1>
                    <h3>( CONTACTE CON NOSOTROS, EN CASO DE SER UN GRUPO DE MÁS DE 10 PERSONAS )</h3>
                </div>
            </FadeInSection>
            {
                menus.map(menu => {
                    return (
                        <FadeInSection class="w-[600px] max-xl:w-full">
                            <div className='w-[600px] bg-[#24251D] p-[10px] my-[10px] max-xl:w-full'>
                                <h1 className='text-[25px]'>{menu?.name}</h1>
                                {menu.price_week && <h1 className='text-[20px] mt-[5px]'>{menu.price_week}</h1>}
                                {menu.price_weekend && <h1 className='text-[20px] mt-[5px]'>{menu.price_weekend}</h1>}
                                <div className='border p-[20px] m-[20px]'>
                                    <h2 className='text-[20px]'>{menu?.starters.name}</h2>
                                    {
                                        menu?.starters.items.map(item => {
                                            return (
                                                <p>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className='border p-[20px] m-[20px]'>
                                    <h2 className='text-[20px]'>{menu?.second_course.name}</h2>
                                    {
                                        menu?.second_course.items.map(item => {
                                            return (
                                                <p>{item}</p>
                                            )
                                        })
                                    }
                                </div>
                                <div className='border p-[20px] m-[20px]'>
                                    <h2 className='text-[20px]'>{menu?.dessert.name}</h2>
                                    <p>{menu?.dessert.item}</p>
                                </div>
                                <div className='border p-[20px] m-[20px]'>
                                    <p className=''>{menu?.drink}</p>
                                </div>

                            </div>
                        </FadeInSection>
                    )
                })
            }
        </div>
    )
}

export default MenusPage;