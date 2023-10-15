import './MenuPage.css';

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
            <div class="tabs mx-auto w-[800px]" onClick={handleTabs}>
                <div class="top flex text-gray-100 overflow-hidden">
                    <div class="buttons w-full flex bg-[#24251D]">
                        <span tab="1" class="btn cursor-pointer p-2 px-3 active-button">One</span>
                        <span tab="2" class="btn cursor-pointer p-2 px-3">Two</span>
                    </div>
                </div>
                <div class="center text-gray-800 relative">
                    <div class="tab w-full absolute top-0 active-tab">

                    </div>

                    <div class="tab w-full absolute top-0">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default MenuPage;