import './AboutUsPage.css';
import AboutImage from '../../assets/images/About.jpg'

function AboutUsPage() {
    return (
        <div className='absolute flex flex-col h-fit min-h-full w-full p-[10px] items-center justify-center text-teal-200 animate-fade-down animate-duration-1000'>
            <img className="w-[300px]" src={AboutImage} alt="Imagen del restaurante" />
            <p className="w-[500px] pt-[20px] text-justify">
                Nuestro trato cercano y familiar, junto a nuestra experiencia de años en el sector de la hostelería nos permite elaborar cada día, con ilusión y buen hacer, los mejores platos con los productos más frescos del mercado, para ofrecérselos con la exquisita presencia y cariño que nos caracteriza.
            </p>
            <p className="w-[500px] text-justify">
                La carta, elaborada por profesionales venidos de los fogones del Txistu y el Asador Donostiarra atraen cada día por la calidad de los productos y la maestría con que son preparados.
            </p>
            <p className="w-[500px] text-justify">
                En la plaza ajardinada donde nos encontramos hay un parking subterráneo para dejar el coche. Allí mismo, los niños podrán jugar mientras los padres degustan.
            </p>
        </div>
    );
}
export default AboutUsPage;