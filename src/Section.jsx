import React from 'react'

function Section(props) {
    const bg ={
        backgroundImage: `url(${props.backgroundImg})` ,
        backgroundPosition: "centre", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover"
    }
  return (
    <div className="section" style={bg}>
        <div className="modelname">
            <h1>{props.name}</h1>
            <h4>{props.tagline}</h4>

        </div>
        <div className="btn">
            <a href="">{props.button1}</a>
            <a href="">{props.button2}</a>
        </div>
    </div>
  )
}

export default Section