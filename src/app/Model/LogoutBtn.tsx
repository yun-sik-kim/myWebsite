'use client'
import { signOut } from 'next-auth/react'

export default function LogoutBtn(){

    return (
        <button onClick={()=>{ signOut() }}
                style={{
                    border: 'none',
                    height: '39px',
                    display: 'inline-grid',
                    cursor: 'pointer',
                    padding: '0px 10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    color: 'white',
                    backgroundColor: '#59597e',
                    borderRadius: '9px',
                    fontSize: '16px',
                    alignItems: 'center'
                }}
        >
            Logout
        </button>
    );
}