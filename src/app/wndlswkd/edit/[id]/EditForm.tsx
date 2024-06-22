"use client"
import { useState, useEffect } from 'react';
import React, { FormEvent } from 'react';

export default function EditForm( props: any ) {
  const [postNo, setPostNo] = useState(props.postNo);
  const [category, setCategory] = useState(props.category);
  const [title, setTitle] = useState(props.title);
  const [subTitle, setSubTitle] = useState(props.subTitle);
  const [date, setDate] = useState(props.date);
  const [tag, setTag] = useState(props.tag);
  const [context, setContext] = useState(props.context);
  const [colour, setColour] = useState(props.colour);

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
        onChange={(e) => setSubTitle(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        placeholder="Context"
        value={context}
        onChange={(e) => setContext(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="colour"
        value={colour}
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