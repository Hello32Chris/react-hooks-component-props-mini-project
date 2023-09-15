import React from "react";

function About( { blogData } ) {

    return (
        <div>
            <aside>
                <img src={blogData.image || "https://via.placeholder.com/215"} alt={"blog logo"} title={"blog logo"} />
                <p>{blogData.about}</p>
            </aside>
        </div>
    )
}

export default About;