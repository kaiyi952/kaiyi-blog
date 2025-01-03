import React from 'react'

const Articlepage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const rawData = await fetch(`http://localhost:3000/api/article/${id}`)
    const article = rawData.json();
    return (
        <div>{article}</div>
    )
}

export default Articlepage