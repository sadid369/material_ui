import React from "react";
import { IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { DeleteOutline } from "@mui/icons-material";
function NoteCard({ note, handleDelete }) {
  return (
    <>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline></DeleteOutline>
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color={`textSecondary`}>
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default NoteCard;
