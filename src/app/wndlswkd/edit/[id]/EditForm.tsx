"use client"
import { useState, useEffect } from 'react';
import React, { FormEvent } from 'react';

import MarkdownEditor from "@/app/wndlswkd/MarkdownEditor";
import CustumReactMarkdown from '@/app/Model/CustumReactMarkdown';
import '@/app/wndlswkd/CSS/write.css'

import { Post } from '@/types/Post';

export default function EditForm({ post }: { post: Post }) {
  const [id, setId] = useState(post.id);
  // const [postNo, setPostNo] = useState(post.postNo);
  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [subTitle, setSubTitle] = useState(post.subTitle);
  const [date, setDate] = useState(post.date);
  const [tags, setTags] = useState(post.tags);
  const [context, setContext] = useState(post.context);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, category, title, subTitle, date, tags, context, }),
    });

    if (response.ok) {
      alert('Data submitted successfully');
    } else {
      alert('Failed to submit data');
    }
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Split the input value by commas and trim whitespace
    const tagArray = e.target.value.split(',').map(tag => tag.trim());
    setTags(tagArray);
  };

  return (
    <div className='edit_page'>
      <div className='writing_part'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="category"
            value={category}
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
            onChange={(e) => setSubTitle(e.target.value || '')}
          />
          <input
            type="date"
            value={date ?? ""}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <MarkdownEditor
            context={context ?? ""}
            onInputChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setContext(e.target.value)
            }
          />
          <input
            type="text"
            placeholder="Enter tags separated by commas"
            value={tags.join(', ')}
            onChange={handleTagsChange}
            required
          />
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

// function getRandomColor() {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }