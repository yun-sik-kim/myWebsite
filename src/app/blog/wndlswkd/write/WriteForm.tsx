"use client";
import { useState, useEffect } from "react";
import MarkdownEditor from "../MarkdownEditor";
import CustumReactMarkdown from "@/app/blog/Model/CustumReactMarkdown";
import '@/app/blog/wndlswkd/CSS/write.css'

import { Post } from "@/types/Post";

export default function WriteForm() {
  // const [id, setId] = useState<string>(post.id);
  // const [postNo, setPostNo] = useState<number | null>(post.postNo);
  const [category, setCategory] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [subTitle, setSubTitle] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);
  const [context, setContext] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // postNo,
        category,
        title,
        subTitle,
        date,
        tags,
        context,
      }),
    });

    if (response.ok) {
      alert("Data submitted successfully");
    } else {
      alert("Failed to submit data");
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subtitle"
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value || '')}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <MarkdownEditor
            context={context}
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
