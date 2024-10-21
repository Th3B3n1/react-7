import { useEffect, useState } from "react"
import { Phone } from "./Phone";

export function TelefonLista()
{
    const [phones, setPhones] = useState([] as Phone[])
    useEffect(() =>
    {
        fetch("http://localhost:3000/phones")
        .then(response => response.json())
        .then(data => setPhones(data))
        .catch((error) =>
        {
            throw new Error(error.message);
        });
        
    })
    return (
        <>
            <h2>Telefon lista</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {phones.map((phone, index) =>
                    (
                        <tr key={index}>
                            <td>{phone.Id}</td>
                            <td>{phone.Brand}</td>
                            <td>{phone.Model}</td>
                            <td>{phone.Price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}