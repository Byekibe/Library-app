import { useEffect, useState } from "react";

const Footer = () => {
    const [date, setDate] = useState("");
    const url = "http://localhost:7000/date"

    useEffect(() => {
        const fetchDateData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setDate(data.year)
            } catch (error) {
                console.log(error)
            }
        };

        fetchDateData();
    })
    return (
        <>
            <div>
                Footer: {date}
            </div>
        </>
    );
};

export default Footer;