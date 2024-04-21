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

function PdfViewer({ pdfPath }) {
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
      <HTMLFlipBook width={width} height={height}>
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={index + 1} pageNumber={index + 1} />
        ))}
      </HTMLFlipBook>
    </Document>
  );
}

class PdfReader extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef(); // Crea un ref para el contenedor
  }

  componentDidMount() {
    if (this.containerRef.current) {
      ReactDOM.render(<PdfViewer pdfPath={this.props.pdfPath} />, this.containerRef.current);
    } else {
      console.error("Target container is not a DOM element");
    }
  }

  render() {
    return <div ref={this.containerRef} />; // Usa ref aquí en lugar de ID
  }
}

export default PdfReader;
