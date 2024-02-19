import React, { useEffect } from 'react';
import TaxBit from '@taxbit/browser';
import { formW8BEN_EData } from './formW8BEN_EData';

function App() {
  useEffect(() => {
    const taxBit = new TaxBit({ bearerToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1qRXpRamxETmpRd01ESkVORU16TVVFd1FUWTRRamRDTlRaRk5VSTFRVVV5TlVGQlJUQTNPUSJ9.eyJodHRwczovL3RheGJpdC5jb20vdGVuYW50LWlkIjoiMzE0MWQ1ZDAtZDQ5YS00ZmIwLWJjYjktZGQxNmFjMDdhNWZiIiwiaHR0cHM6Ly90YXhiaXQuY29tL2FjY291bnQtb3duZXItaWQiOiJmYzJhZmIyYy1jZmQ2LTQ1YTYtYTQ5Ny0wYjU1ZTE1ZjEwNTgiLCJpc3MiOiJodHRwczovL2F1dGgudGF4Yml0LmNvbS8iLCJzdWIiOiIwcUNCUDNiY2NJR1B2SjNFUklsUjZxSmtTNkVjNjBWR0BjbGllbnRzIiwiYXVkIjoidGF4Yml0LWludGVybmFsIiwiaWF0IjoxNzA4MzYwODY5LCJleHAiOjE3MDg0NDcyNjksImF6cCI6IjBxQ0JQM2JjY0lHUHZKM0VSSWxSNnFKa1M2RWM2MFZHIiwic2NvcGUiOiJyZWFkOmNvaW5zIHJlYWQ6dGF4cHJvZmlsZXMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJwZXJtaXNzaW9ucyI6WyJyZWFkOmNvaW5zIiwicmVhZDp0YXhwcm9maWxlcyJdfQ.I51om9RBoPrJpYDyK_xXsWgw7-oL9nd5xNP0e_Hy1JBiS1XoylIRGY3skkkbbe8ZgrSs6jnUykZzZvDhhPtbwbb5TzTmB1dm2YvLhbkIYCoJkIAi4P-lgLUPeLU9w8tDVHWSe_NmCqkAHHJGWJJ802G2YDslE5KffFtfJvRkEALdJoh0EbEdpBMEiDVVcS8cDxT_DatnigHes5UOOkzNjspPcvPS7fgScVx-W2-yGezqm-TrJwEWoi8NbPyVvGg5tO3TMQhPv4--qfz26XuL13XfarQAbxJa41yUeLThBtryayIKfCVyz-IEZ1TuDSM0jOMs4gT74gSZdweW1p37SQ" });
    let collectResult;
    try {
      collectResult = taxBit.ui.taxDocumentation.collect({
         hostElement: document.querySelector("#tax-info-container"),
         data: formW8BEN_EData
      });
    } catch (error) {
      console.log(error);
    }

  }, []);

  return (
    <div className="App">
      <div id="tax-info-container" style={{ height: "100vh", width: "100vh", overflow: "auto" }}></div>
    </div>
  );
}

export default App;

