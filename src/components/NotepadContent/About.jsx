//npm packages
import React from 'react'


function About({ content }) {
    const { paragraphs } = content;
    return (
        <div>
            <h2>About Me</h2>
            <img class="fit-picture" src="https://i.imgur.com/CmZD88z.png" width={60}height={80}/>
            {
                paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))
            }

        </div>
    )
}

export default About;
