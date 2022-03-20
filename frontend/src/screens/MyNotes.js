import React, { useEffect, useState } from "react";
import { Accordion, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../components/MainScreen";
import axios from "axios";
function MyNotes() {
  const [notes, setNotes] = useState([]);
  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };
  useEffect(() => {
    fetchNotes();
  }, []);
  console.log(notes);
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure?")) {
    }
  };
  return (
    <MainScreen title='Welcom back Vivek'>
      <Link to='/createnote'>
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Card>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}>
                <Accordion.Header as={Card.Text}>{note.title}</Accordion.Header>
              </span>
              <div>
                <Button href={`note/${note._id}`}>Edit</Button>
                <Button
                  variant='danger'
                  className='mx-2'
                  onClick={() => deleteHandler(note._id)}>
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body eventKey='0'>
              <Card.Body>
                <h4>
                  <Badge variant='success'>Category - {note.category}</Badge>
                </h4>
                <blockquote className='blockquote mb-0'>
                  <p>{note.content}</p>
                  <footer className='blockquote-footer'>{note.category}</footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}

export default MyNotes;
