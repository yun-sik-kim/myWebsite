'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './CSS/page.module.css'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            subject,
            content,
          }),
        });
    
        if (response.ok) {
          alert("Sent!");
          router.push('/');
        } else {
          alert("sorry, something wrong with server. Please refresh page and send again.");
        }
    };

    return (
        <div className={styles.grid_system}>
            <div className={styles.email_content}>
                <h3>email:</h3>
                <input
                    type="text"
                    value={email}
                    placeholder="example123@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <h3>subject:</h3>
                <input
                    type="text"
                    value={subject}
                    placeholder="To yunsik Kim"
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <form onSubmit={handleSubmit}>
                    <h3>message:</h3>
                    <textarea
                    value={content}
                    placeholder="message me"
                    rows={10}
                    cols={50}
                    style={{resize: 'none'}}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    />
                    <button type="submit">send</button>
                </form>
            </div>
        </div>
    );
}