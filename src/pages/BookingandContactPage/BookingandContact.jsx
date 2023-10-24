import './BookingandContact.css';

function BookingandContactPage() {
    return (
        <div className='absolute flex flex-col h-fit min-h-full w-full p-[10px] items-center justify-center text-teal-200 animate-fade-down animate-duration-1000'>
            <h1 className='text-[30px]'>Reservas y Contacto</h1>
            <span className='text-[20px]'>923 260 246</span>
            <iframe title="Mapa Restaurant"
                className="mt-[10px] w-full h-[50vh]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.5611726280868!2d-5.663824423514479!3d40.96919122183008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f2610d0934b01%3A0x3b28c0a66421dcdb!2sRestaurante%20Don%20Bustos-%20Restaurantes!5e0!3m2!1ses!2ses!4v1698107553320!5m2!1ses!2ses"
                style={{ "border": "0" }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                allowfullscreen>
            </iframe>
        </div>
    )
}
export default BookingandContactPage