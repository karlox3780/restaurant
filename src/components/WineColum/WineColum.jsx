import './WineColum.css';

function WineColum({ wines }) {
    return (
        <>
            {
                wines.map((wine, index) => {
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
export default WineColum;