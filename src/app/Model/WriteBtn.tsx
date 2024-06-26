'use client'
import Link from 'next/link';

export default function WriteBtn(){

    return (
        <Link 
            href={'/wndlswkd/write'} 
            style={{
                height: '39px',
                display: 'inline-grid',
                // display: 'inline-block',
                padding: '0px 10px',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'white',
                backgroundColor: '#a9a9f6',
                borderRadius: '9px',
                fontSize: '16px',
                alignItems: 'center'
            }}
        >
                write
        </Link>
    );
}