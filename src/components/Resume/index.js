import React from 'react';
import File from '../../assets/images/resume/Coding-Resume2020.pdf'
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
    console.log(File);

  return (
      
    <div className="container-1">
      <a className="resume" href={File} download>Click to Download Resume</a>
      <Document
        file={File}
      >
        <Page pageNumber={1} />
      </Document>
      
    </div>
  );
}

export default Resume;