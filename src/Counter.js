import { useState } from 'react';
import Button from '@mui/material/Button';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <Button variant="contained" color="success" className="likes-dislikes" onClick={() => { setLike(like + 1); }}>👍{like}</Button>
      <Button variant="contained" color="success" className="likes-dislikes" onClick={() => { setDisLike(dislike + 1); }}>👎{dislike}</Button>
    </div>

  );
}
