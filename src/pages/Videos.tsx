import React from 'react';
import { useParams } from 'react-router-dom';

function Videos() {
  const { keyword } = useParams();
  return <div>Videos {keyword ? keyword : '핫트랜드'}</div>;
}

export default Videos;
