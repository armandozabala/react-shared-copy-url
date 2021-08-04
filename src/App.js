import React, { useRef, useState } from "react";
import { RWebShare } from "react-web-share";
import "./App.css";
import {
  WhatsappShareButton,
  FacebookShareButton,
  EmailIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailShareButton,
  TelegramShareButton,
} from "react-share";

function App() {

  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  
  const copy = (e) => {
  
      textAreaRef.current.select();
      document.execCommand('copy');
      // This is just personal preference.
      // I prefer to not show the the whole text area selected.
      e.target.focus();
      setCopySuccess('Link copiado 😃');
  
  }



  return (
    <div className="App">
      <header className="App-header p-20">
        <p className="mb-5"> Componente para compartir 🔥 Link de Pagos </p>
        <div>
          <p>Opción 1</p>
          <RWebShare
            data={{
              text: "Like humans, flamingos make friends for life",
              url: "https://on.natgeo.com/2zHaNup",
              title: "Compartir",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="bg-gray-500 rounded p-2 mb-5 text-2xl mt-3">
              Compartir  <i className="fas fa-share"></i>
            </button>
          </RWebShare>
        </div>


       

        { /* <p>Input con opción de copiar</p>

        <div className="flex w-80 mb-3 mt-3">
       
          <input
            type="text"
            ref={textAreaRef}
            placeholder="Placeholder"
            className="px-3 py-2 placeholder-blue-gray-300 text-gray-500 relative rounded text-sm border border-blue-gray-100 outline-none focus:outline-none focus:ring w-full pr-8"
          />
       
        { !copySuccess ? (    
          <button className="bg-blue-500 text-white active:bg-pink-600 font-bold mt-1 ml-2 uppercase text-sm px-5 py-4 rounded  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            onClick={copy} 
           >
          <i className="fas fa-copy text-xl"></i>
        </button>
        ) : (  
        <button className="bg-green-500 text-white active:bg-pink-600 font-bold mt-1 ml-2 uppercase text-sm px-5 py-4 rounded  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
        onClick={copy} 
          >
          <i className="fas fa-check text-xl"></i>
        </button>) } 
        </div>
        
        <p> {copySuccess && (
        <div class="bg-green-400 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <span class="block sm:inline">Link copiado correctamente!!!</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
        </span>
      </div>
        )} </p> */}

        <p>Opción 2</p>


        <div style={{ flex: 1, marginTop: 10 }}>
          <FacebookShareButton url={"http://github.com"} quote={"titulo"}>
            <FacebookIcon size={52} round />
          </FacebookShareButton>

          <WhatsappShareButton
            url={"http://github.com"}
            title={"titulo"}
            separator={", "}
          >
            <WhatsappIcon size={52} round />
          </WhatsappShareButton>

          <EmailShareButton
            url={"http://github.com"}
            title={"titulo"}
            separator={", "}
          >
            <EmailIcon size={52} round />
          </EmailShareButton>

          <TelegramShareButton
            url={"http://github.com"}
            title={"titulo"}
            separator={", "}
          >
            <TelegramIcon size={52} round />
          </TelegramShareButton>
        </div>
      </header>
    </div>
  );
}

export default App;
