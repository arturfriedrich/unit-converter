import React, { useState } from "react"

export default function App() {
    const [convertable, setConveratble] = useState("")

    function handleChange(event) {
        setConveratble(event.target.value)    
    }

    return (
        <main>
            <section className="main-section">
                <h1 className="heading">Metric / Imperial unit conversion</h1>
                <input 
                    type="text"
                    placeholder="0"
                    className="input-field" 
                    name="convertableInput"
                    value={convertable}
                    onChange={handleChange}
                />
            </section>
            <section className="results">
                <div className="conversion-results">
                    <h3 className="measure">Length (Meter / Feet)</h3>
                    <p className="converted-values">{convertable} meters = {Math.round((convertable / 0.304) * 1000) / 1000} feet | {convertable} feet = {Math.round((convertable * 0.304) * 1000) / 1000} meters</p>
                </div>
                <div className="convert-section">
                    <h3 className="measure">Volume (Liters / Gallons)</h3>
                    <p className="converted-values">{convertable} liters = {Math.round((convertable * 0.264) * 1000) / 1000} gallons | {convertable} gallons = {Math.round((convertable / 0.264) * 1000) / 1000} liters</p>
                </div>
                <div className="convert-section">
                    <h3 className="measure">Mass (Kilograms / Pounds)</h3>
                    <p className="converted-values">{convertable} kilos = {Math.round((convertable / 0.4535) * 1000) / 1000} pounds | {convertable} kilos = {Math.round((convertable * 0.4535) * 1000) / 1000} pounds</p>
                </div>
            </section>
        </main>
    )
}