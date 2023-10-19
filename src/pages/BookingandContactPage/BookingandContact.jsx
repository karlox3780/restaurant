import './BookingandContact.css';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function BookingandContactPage() {

    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <div className='absolute h-full w-full animate-fade-left animate-delay-0 animate-duration-1000'>
            <Cal
                calLink="carlos-bustos/comida"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={{ layout: 'month_view' }}
            />
        </div>
    )
}
export default BookingandContactPage