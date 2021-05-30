import React from "react";
import * as Styled from './Home.Styled';

const Home = () => {

  fetch("https://api.clashofclans.com/v1/players/%2389LLY2JLQ?Authorization=Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFmY2YzN2QwLTk2OTEtNGVjYS05MmUwLTVkY2Y0YzI0ZWQ4MiIsImlhdCI6MTYyMjM5NTY1MCwic3ViIjoiZGV2ZWxvcGVyL2UzZjAwZjg5LThmZWMtMDNhOS1iZjU0LTZjNWM2NTkyNGExNCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE3Mi42Ny4xMjguMTUyIiwiMTcyLjY3LjE2NS4yNTQiXSwidHlwZSI6ImNsaWVudCJ9XX0.xQNZlx6XDiM-9XTU7PjPJ9z4_-O2VzEuv1JrhGpCHuAS__ZTTcobPY-EPXkciGaQqwM9A_4I5ZDprHbAJjmexw")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
    }); 
    return (
        <Styled.Container>
            <h1> Hello </h1>   
        </Styled.Container>
    )
}

export default Home;

