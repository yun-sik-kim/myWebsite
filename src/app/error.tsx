'use client' // Error components must be Client Components

export default function Error({error,reset}: {error: Error & { digest?: string }, reset: () => void}) {
    return(
        <div>
            <h2>Seems like there is issue with the internet.</h2>
            <button onClick={()=>{ reset() }}>Reload!</button>
        </div>
    );
}