'use client'
import '@/app/wndlswkd/CSS/write.css'

export default function MarkdownEditor({ context, onInputChange }: { context: string, onInputChange: React.ChangeEventHandler<HTMLTextAreaElement>}) {

    return (
        <div>
            <textarea
            value={context}
            placeholder="Context"
            onChange={onInputChange}
            // rows={10}
            // cols={50}
            required
            />
            {/* <div className='preview_part'>
                <h3>Preview:</h3>
                <ReactMarkdown>{context}</ReactMarkdown>
            </div> */}
        </div>
    );
};
