import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import React, { useState } from "react";
import "./styles.css";

// Asegúrate de que la versión y la ruta son correctas
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// Importar los estilos para AnnotationLayer y TextLayer
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

const width = 600;
const height = 872;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function Test({ pdfPath }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Document file="https://firebasestorage.googleapis.com/v0/b/club-social-petrolero.appspot.com/o/pdfs%2Festatuto.pdf?alt=media&token=b849ddb9-588f-4b62-8db2-df34f7690d39" onLoadSuccess={onDocumentLoadSuccess}>
      <HTMLFlipBook width={width} height={height}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={index + 1} pageNumber={index + 1} />
        ))}
      </HTMLFlipBook>
    </Document>
  );
}

class PdfReader extends React.Component {
  componentDidMount() {
    const container = document.getElementById("pdf-container");
    if (container) {
      const { pdfPath } = this.props;
      ReactDOM.render(<Test pdfPath={pdfPath} />, container);
    } else {
      console.error("Target container is not a DOM element");
    }
  }

  render() {
    return null; // No renderizar nada aquí, ya que el componente se renderizará en componentDidMount
  }
}

export default PdfReader;
