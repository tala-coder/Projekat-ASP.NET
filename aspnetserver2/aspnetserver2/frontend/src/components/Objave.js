import React from 'react'
import Objava from './Objava'


const Objave = ({ data }) => {
    return (
        <>
            {data.map((post) => {
                return (
                    <article key={post.postId}>
                        <Objava car={post} {...post} />
                    </article>
                )
            })}
        </>
    )
}

export default Objave
