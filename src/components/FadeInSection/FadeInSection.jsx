import { useEffect, useRef, useState } from "react";

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`${props.class} fade-in-section ${isVisible ? 'is-visible' : ''}`
            }
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
export default FadeInSection;