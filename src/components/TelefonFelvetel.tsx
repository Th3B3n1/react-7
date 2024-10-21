import { useState } from "react"

export function TelefonFelvetel()
{
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState(0);

    function sendData()
    {
        let data = {
            brand: brand,
            model: model,
            price: price
        }
        fetch("http://localhost:3000/phones", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
    }
    return (
        <form>
            <label htmlFor="Brand">Brand: </label><input type="text" name="Brand" id="" onInput={(e) => setBrand(e.currentTarget.value)} required /><br />
            <label htmlFor="Model">Model: </label><input type="text" name="Model" id="" onInput={(e) => setModel(e.currentTarget.value)} required /><br />
            <label htmlFor="Price">Price: </label><input type="number" name="Price" id="" onInput={(e) => setPrice(Number(e.currentTarget.value))} required /><br />
            <input type="submit" onClick={sendData} /><br />
        </form>
    )
}