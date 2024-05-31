import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// Importar estilos
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const width = 600;
const height = 872;

const Page = React.forwardRef(({ pageNumber }, ref) => (
  <div ref={ref}>
    <ReactPdfPage pageNumber={pageNumber} width={width} />
  </div>
));

function PdfViewer({ pdfPath, pdfName }) {
  const [numPages, setNumPages] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  // Hook para manejar el cambio de tamaño y ajustar el modo de visualización
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);  // 768px es el breakpoint de Tailwind para 'md'
    };

    window.addEventListener('resize', handleResize);
    handleResize();  // Llamar inicialmente al montar el componente

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        // Renderiza un iframe para dispositivos móviles
          <div className="p-4 hover:bg-gray-100 text-blue-600 hover:text-blue-800 cursor-pointer">
              <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="flex items-center w-full">
                  <img src='/assets/icons/pdf_icon.png' className="w-6 h-6"/>
                  <span className="text-xl">{pdfName}</span>
              </a>
          </div>
      ) : (
        // Renderiza HTMLFlipBook para dispositivos no móviles
        <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
          <HTMLFlipBook width={width} height={height}>
            {Array.from({ length: numPages }, (_, index) => (
              <Page key={index + 1} pageNumber={index + 1} />
            ))}
          </HTMLFlipBook>
        </Document>
      )}
    </div>
  );
}

class PdfReader extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef(); // Crea un ref para el contenedor
  }

  componentDidMount() {
    if (this.containerRef.current) {
      ReactDOM.render(<PdfViewer pdfPath={this.props.pdfPath} pdfName={this.props.pdfName}/>, this.containerRef.current);
    } else {
      console.error("Target container is not a DOM element");
    }
  }

  render() {
    return <div ref={this.containerRef} />; // Usa ref aquí en lugar de ID
  }
}

export default PdfReader;
