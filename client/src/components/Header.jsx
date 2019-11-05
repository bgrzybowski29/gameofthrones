import React from 'react';
import { Link } from 'react-router-dom';
export default function Header(props) {

  return (
    <header>
      <h1>GOT FULL STACK</h1>
      <nav>
        <Link to="/">Characters</Link>
        <Link to={`/new`}>Create</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}