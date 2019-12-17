import React from 'react'

let greeting = 'good morning'
const currentHour = new Date().getHours()

const headingStyle = {
    fontSize: '50px',
    fontWeight: 'bold',
    borderBottom: '5px solid black'
}

if (currentHour >= 12 && currentHour <= 16) {
    greeting = 'good afternoon'
    headingStyle.color = 'green'
}
if (currentHour >= 16 && currentHour <= 24) {
    greeting = 'good evening'
    headingStyle.color = 'blue'
}

function Heading() {
    return <h1 style={headingStyle}>{greeting}</h1>
}

export default Heading
