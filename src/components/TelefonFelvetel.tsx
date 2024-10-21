import { useState } from "react"

export function TelefonFelvetel()
{
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [price, setPrice] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    async function sendData(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        let data = {
            brand: brand,
            model: model,
            price: price
        }
        let response = await fetch("http://localhost:3000/phones", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {return response.json()})
        .catch((error) =>
        {
            throw new Error(error.message);
        });
        if (response != undefined)
        {
            if (response.error != undefined)
            {
                setSuccess("");
                setError(response.error);
            }
            else
            {
                setError("");
                setSuccess(response.message);
            }
        }
        setBrand("");
        setModel("");
        setPrice(0);
    }
    return (
        <>
            <p style={{color: "green"}}>{success}</p>
            <p style={{color: "red"}}>{error}</p>
            <h2>Telefon felvétel</h2>
            <form onSubmit={(e) => sendData(e)}>
                <label htmlFor="Brand">Brand: </label><input type="text" name="Brand" id="" onInput={(e) => setBrand(e.currentTarget.value)} value={brand} required /><br />
                <label htmlFor="Model">Model: </label><input type="text" name="Model" id="" onInput={(e) => setModel(e.currentTarget.value)} value={model} required /><br />
                <label htmlFor="Price">Price: </label><input type="number" name="Price" id="" onInput={(e) => setPrice(Number(e.currentTarget.value))} value={price} required /><br />
                <input type="submit"/><br />
            </form>
        </>
    )
}