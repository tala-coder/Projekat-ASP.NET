import React from 'react'
import Admin from './Admin'


const Lists = ({ data }) => {
    return (
        <>
            {data.map((post) => {
                return (
                    <article key={post.postId}>
                        <Admin car={post} {...post} />
                    </article>
                )
            })}
        </>
    )
}

export default Lists
