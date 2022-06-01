import React from 'react'
// import Admin from './Admin'
import Update from './Update'


const Lists = ({ data, updatePost, onPostDeleted }) => {
    return (
        <>
            {data.map((post) => {
                return (
                    <article key={post.postId}>
                        <Update article={post} {...post} updatePost={updatePost} onPostDeleted={ onPostDeleted } />
                    </article>
                )
            })}
        </>
    )
}

export default Lists
