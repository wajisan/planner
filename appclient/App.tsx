import React from 'react';
import Planning from './components/Planning';
import { getTestAPI } from './services/tasks';


export default function App() {

  const test = getTestAPI();

  return (
    <Planning></Planning>
  );
}
