import React from 'react';
import { DiFirebase, DiReact, DiGit } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, Box, Boxes } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/html.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>HTML</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/css.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>CSS</p></div>
          </div>
        </Box><Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/sass.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>SASS</p></div>
          </div>
        </Box><Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/javascript.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>JavaScript</p></div>
          </div>
        </Box><Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/react.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>React</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/node.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>Node</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/jquery.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>JQuery</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/jasmine.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>Jasmine</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/python.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>Python</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/flask.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>Flask</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/postgresql.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>PostgreSQL</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/api.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>REST API</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/git.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>Git</p></div>
          </div>
        </Box>
        <Box>
          <div style={{background: "white", padding: "5px", borderRadius: "15px", width: "87px", height: "87px", border: "1px solid #eee"}}>
            <div style={{marginBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center"}}><img src='/images/vscode.svg' style={{width: '45px', height: '45px'}} /></div>
            <div><p style={{display: "flex", justifyContent: "center", alignItems: "center", color: "black", fontSize: "1.5rem"}}>VSCode</p></div>
          </div>
        </Box>
    </Boxes>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size="3rem" />
        <ListContainer>
          <ListTitle>Version Control</ListTitle>
          <ListParagraph>
            Experience with <br />
            Restful Routing and Git.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
