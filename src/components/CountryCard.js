import React from "react"
import './CountryCard.css'

export default function CountryCard({ name }) {
    return (
        <div className="country-card">
            <h1 className="country-name">{name}</h1>
        </div>
    )
}