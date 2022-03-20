import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";

function LandingPage() {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");
  //   if (userInfo) {
  //     history.push("/notes/");
  //   }
  // }, [history]);
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to NoteZipper</h1>
              <p className='subtitle'>Store your notes bitch</p>
            </div>
            <div className='buttonContainer'>
              <a href='/login'>
                <Button size='lg' className='landingbutton'>
                  Log In
                </Button>
              </a>
              <a href='/register'>
                <Button
                  size='lg'
                  className='landingbutton'
                  variant='outline-primary'>
                  Register
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
