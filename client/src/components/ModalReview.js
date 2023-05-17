import React, {useState, useEffect } from 'react';
import { BsEmojiFrown, BsEmojiNeutral, BsEmojiSmile } from 'react-icons/bs';

const ModalReview = ({vendedor, cliente, onClose}) => {
    // LÓGICA DEL COMPONENTE

    // Datos del vendedor
    const nombreVendedor = vendedor.firstname + " " + vendedor.lastname;

    // Controla el estado de la review
    const [resenia, setResenia] = useState({
      // Valores posibles: 1, 2, 3
      calification: 0,
      review: "",
      // Valores posibles: "Active", "desactived", "blocked"
      state: "Active",
      client: cliente,
      vendor: vendedor,
    });


    // Función para actualizar el valor de la calificación
    const handleCalificationChange = (value) => {
      setResenia({
        ...resenia,
        calification: value,
      });
      console.log(resenia);
    };

    // Función para actualizar el comentario de la review
    const handleReviewChange = (e) => {
      const { value } = e.target;
      setResenia({
        ...resenia,
        review: value,
      });
      console.log(resenia);
    };

    // Función para enviar la review
    const sendReview = () => {
      console.log(resenia);
      onClose();
    };


    // RENDERIZADO DEL COMPONENTE
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="flex items-end sm:items-center justify-center min-h-screen pt-4 px-4 pb-8 sm:pb-0 text-center">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-12">
            
          <h1 className="text-gray-400 text-2xl text-center font-bold mb-8">¿Cómo fue tu experiencia de compra con {nombreVendedor}?</h1>
                <div className="flex w-full items-center justify-center mb-4">
                    {
                      resenia.calification === 0 ?
                          <>
                              <BsEmojiFrown className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(1)} />
                              <BsEmojiNeutral className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600 mx-4" onClick={() => handleCalificationChange(2)} />
                              <BsEmojiSmile className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(3)} />
                          </>
                      : resenia.calification === 1 ?
                          <>
                              <BsEmojiFrown className="text-4xl text-verde cursor-pointer hover:text-verde-light" onClick={() => handleCalificationChange(1)} />
                              <BsEmojiNeutral className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600 mx-4" onClick={() => handleCalificationChange(2)} />
                              <BsEmojiSmile className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(3)} />
                          </>
                      : resenia.calification === 2 ?
                          <>
                              <BsEmojiFrown className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(1)} />
                              <BsEmojiNeutral className="text-4xl text-verde cursor-pointer hover:text-verde-light mx-4" onClick={() => handleCalificationChange(2)} />
                              <BsEmojiSmile className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(3)} />
                          </>
                      : resenia.calification === 3 &&
                          <>
                              <BsEmojiFrown className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600" onClick={() => handleCalificationChange(1)} />
                              <BsEmojiNeutral className="text-4xl text-gray-400 cursor-pointer hover:text-gray-600 mx-4" onClick={() => handleCalificationChange(2)} />
                              <BsEmojiSmile className="text-4xl text-verde cursor-pointer hover:text-verde-light" onClick={() => handleCalificationChange(3)} />
                          </>                             
                    }
                </div>
                {
                  (resenia.calification !== 0) && 
                  <>
                    <p className='text-center text-verde mb-4 text-lg font-semibold'>
                      {
                        resenia.calification === 1 ? 
                          "Mala"
                        : resenia.calification === 2 ?
                          "Neutral"
                        : resenia.calification === 3 &&
                          "Buena"
                      }
                    </p>
                    <textarea 
                        value={resenia.review}
                        className="w-full h-24 border border-gray-300 rounded-lg py-2 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent mb-4"
                        placeholder="Escribe tu comentario (opcional)..."
                        onChange={handleReviewChange}
                    ></textarea>
                    
                    <div className='flex w-full items-center justify-center '>
                      <button 
                      className='bg-verde hover:bg-verde-light py-2 px-4 text-white font-semibold rounded-lg mr-2'
                      onClick={sendReview}
                      >
                          Enviar
                      </button>
                      <button 
                      className='bg-gray-200 hover:bg-gray-100 py-2 px-4 font-semibold rounded-lg ml-2'
                      onClick={onClose}
                      >
                          Cancelar
                      </button>
                    </div>
                  </>
                }
          </div>
        </div>
      </div>
    );

}

export default ModalReview;