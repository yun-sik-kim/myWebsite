"use client"
import { useState, useEffect } from 'react';
import React, { FormEvent } from 'react';

import MarkdownEditor from "@/app/wndlswkd/MarkdownEditor";
import CustumReactMarkdown from '@/app/Model/CustumReactMarkdown';
import '@/app/wndlswkd/CSS/write.css'

export default function EditForm({ postData }: { postData: any }) {
  const [postNo, setPostNo] = useState(postData.postNo);
  const [category, setCategory] = useState(postData.category);
  const [title, setTitle] = useState(postData.title);
  const [subTitle, setSubTitle] = useState(postData.subTitle);
  const [date, setDate] = useState(postData.date);
  const [tag, setTag] = useState(postData.tag);
  const [context, setContext] = useState(postData.context);
  const [colour, setColour] = useState(postData.colour);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ postNo, category, title, subTitle, date, context, tag, colour }),
    });

    if (response.ok) {
      alert('Data submitted successfully');
    } else {
      alert('Failed to submit data');
    }
  };

  return (
    <div className='edit_page'>
      <div className='writing_part'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="category"
            value={category} // nullish coalescing, if category is null, it falls back to an empty string ''.
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Title"
            value={title ?? ""}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={subTitle ?? ""}
            onChange={(e) => setSubTitle(e.target.value)}
            required
          />
          <input
            type="date"
            value={date ?? ""}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {/* <textarea
          placeholder="Context"
          value={context ?? ''}
          onChange={(e) => setContext(e.target.value)}
          required
        ></textarea> */}
          <MarkdownEditor
            context={context ?? ""}
            onInputChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContext(e.target.value)
            }
          />
          <input
            type="text"
            placeholder="tag"
            value={tag ?? ""}
            onChange={(e) => setTag(e.target.value)}
            required
          />
          {/* <input type='file' accept='image/*'
          onChange={async(e)=>{
            await fetch('/api')
          }}
        /> */}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className='preview_part'>
        <div className='preview_part'>
            <h3>Preview:</h3>
            <CustumReactMarkdown>{context}</CustumReactMarkdown>
        </div>
      </div>
    </div>
  );
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}