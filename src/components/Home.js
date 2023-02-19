import React from 'react'
import { useGetAllArticlesQuery } from '../features/APISlice'

export default function Home() {
    const { data, error, isLoading } = useGetAllArticlesQuery('')

    return (
        <div>
            <h1>Home</h1>
            {isLoading && <h1>Loading..</h1>}
            {error && <h1>{error}</h1>}
            {data && JSON.stringify(data)}
        </div>
    )
}
