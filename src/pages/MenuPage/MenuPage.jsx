import './MenuPage.css';
import Menu from '../../assets/data/menu.json';

function MenuPage() {

    function handleTabs(e) {
        e.preventDefault();
        const root = document.querySelector(".tabs"), tabs = root.querySelectorAll(".tab"), btns = root.querySelectorAll(".btn");
        var t = e.target, val = t.getAttribute("tab");
        if (val != null) {
            tabs.forEach(each => { each.classList.remove("active-tab"); });
            btns.forEach(each => { each.classList.remove("active-button"); });
            tabs[val - 1].classList.add("active-tab");
            btns[val - 1].classList.add("active-button");
        }

    }

    return (
        <div className="absolute flex flex-col h-fit min-h-full w-full p-[10px] items-center justify-center text-teal-200 animate-fade-down animate-duration-1000">
            <div className="tabs max-lg:w-full" onClick={handleTabs}>
                <div className="top flex text-gray-100 overflow-hidden">
                    <div className="buttons w-full flex bg-[#24251D] max-lg:grid max-lg:grid-cols-2">
                        <span tab="1" className="btn cursor-pointer p-2 px-3 active-button">Mostrar Todo</span>
                        {
                            Menu.map((item, index) => {
                                return (
                                    <span tab={index + 2} className="btn cursor-pointer p-2 px-3">{item.name}</span>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="center h-fit text-teal-200 relative">
                    <div className="tab w-full h-fit top-0 animate-fade-up animate-duration-1000 active-tab">
                        {
                            Menu.map(submenu => {
                                return (
                                    <>
                                        <h1 className="bg-[#24251D] py-[5px] my-[10px]">{submenu.name}</h1>
                                        {
                                            submenu.items.map(plate => {
                                                return (
                                                    <p className='flex items-center justify-between'><span className='text-left'>{plate.name}</span><span className='text-right max-lg:min-w-[70px]'>{plate.price} {plate.price === "Precio Según Mercado" ? "" : "€"}</span></p>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                    {
                        Menu.map(submenu => {
                            return (
                                <div className="tab w-full h-fit top-0 animate-fade-up animate-duration-1000">
                                    <h1 className="bg-[#24251D] py-[5px] my-[10px]">{submenu.name}</h1>
                                    {
                                        submenu.items.map(plate => {
                                            return (
                                                <p className="flex items-center justify-between"><span className='text-left'>{plate.name}</span><span className='text-right max-lg:min-w-[70px]'>{plate.price} {plate.price === "Precio Según Mercado" ? "" : "€"}</span></p>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default MenuPage;