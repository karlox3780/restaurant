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
        <div className='absolute flex flex-col h-fit min-h-full w-full p-[10px] items-center justify-center text-teal-200 animate-fade-down animate-duration-1000'>
            <div className="tabs h-fit max-lg:w-full" onClick={handleTabs}>
                <div className="top flex text-gray-100 overflow-hidden">
                    <div className="buttons w-full flex bg-[#24251D] max-lg:flex-col">
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
                <div className="center h-fit text-teal-200 relative animate-fade-up animate-duration-1000">
                    <div className="tab w-full h-fit top-0 active-tab">
                        {
                            Menu.map(item => {
                                return (
                                    <>
                                        <h1 className="">{item.name}</h1>
                                        {
                                            item.items.map(plate => {
                                                return (
                                                    <p className='flex justify-between'><span>{plate.name}</span><span>{plate.price} €</span></p>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                    {
                        Menu.map(item => {
                            return (
                                <div className="tab w-full h-fit top-0">
                                    <h1 className="">{item.name}</h1>
                                    {
                                        item.items.map(plate => {
                                            return (
                                                <p className='flex justify-between'><span>{plate.name}</span><span>{plate.price} €</span></p>
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