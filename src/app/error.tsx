'use client' // Error components must be Client Components

export default function Error({error,reset}: {error: Error & { digest?: string }, reset: () => void}) {
    return(
        <div>
            <h4>Error please reload</h4>
            <button onClick={()=>{ reset() }}>Reload!</button>
        </div>
    );
}