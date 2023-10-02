import './WineCellarPage.css';
import wines from '../../assets/data/wines.json';

function WineCellarPage() {
    const winesArray = wines;
    return (
        <>
            {
                winesArray.map((wine, index) => {
                    return (
                        <div className="text-teal-200" key={index}>
                            {wine.name}
                        </div>
                    )
                })
            }
        </>
    )
}

export default WineCellarPage;