"use client"
import { useState, useEffect } from 'react';

export default function WriteForm( props: any ) {
  const [postNo, setPostNo] = useState<number | null>(props.postNo);
  const [category, setCategory] = useState<string | null>(props.category);
  const [title, setTitle] = useState<string | null>(props.title);
  const [subTitle, setSubTitle] = useState<string | null>(props.subTitle);
  const [date, setDate] = useState<string | null>(props.date);
  const [tag, setTag] = useState<string | null>(props.tag);
  const [context, setContext] = useState<string | null>(props.context);
  const [colour, setColour] = useState<string | null>(props.colour);

  useEffect(() => {
    const newColour = getRandomColor();
    setColour(newColour);
    console.log(newColour);
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('/api/post', {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="category"
        value={category ?? ''}  // nullish coalescing, if category is null, it falls back to an empty string ''.
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title ?? ''}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subtitle"
        value={subTitle ?? ''}
        onChange={(e) => setSubTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date ?? ''}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Context"
        value={context ?? ''}
        onChange={(e) => setContext(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="tag"
        value={tag ?? ''}
        onChange={(e) => setTag(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
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