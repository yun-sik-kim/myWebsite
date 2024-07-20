import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import styles from '@/app/blog/CSS/markdown.module.css'


export default function CustumReactMarkdown({ children }: {children: any}) {

    return (
        < ReactMarkdown
            className={styles.markdown}
            remarkPlugins={[remarkGfm]}
            components={{
                // Map `h1` (`# heading`) to use `h2`s.
                h1: 'h2',
                h2: 'h3',
                h3: 'h4',
                // Rewrite `em`s (`*like so*`) to `i` with a red foreground color.
                // em(props) {
                // const {node, ...rest} = props
                // return <i style={{color: 'red'}} {...rest} />
                // }
            }}
        >
            { children }
        </ ReactMarkdown>
    )
}