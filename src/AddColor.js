import { TextField } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };
  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div className="add-color-form">
      <TextField
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        label="enter a color"
        variant="standard" />
      <Button variant="outlined" onClick={() => setColors([...colors, color])}>Add color</Button>

      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
