'use client'
import { useEffect, useState } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { BsFillMicFill } from 'react-icons/bs';
import { SiConvertio } from 'react-icons/si';
import robo from "../../../public/Gallery/robo.gif"
import Image from 'next/image';

const Commandvoice = () => {
  const [copyTxt, setCopyTxt] = useState('');
  const [isCopied, setCopied] = useClipboard(copyTxt);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-In' });
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript } = useSpeechRecognition();


  useEffect(() => {
    handleCommand(transcript);
  }, [transcript]);





  const handleCommand = (command) => {
    console.log("Cheak it Command", command)
    if (command === 'go to about') {
      window.location.href = '/about';
    }
    else if (command === 'go to contact') {
      window.location.href = '/contactus';
    }

    else if (command === 'go to feedback') {
      window.location.href = '/feedback';
    }

    else if (command === 'go to event') {
      window.location.href = '/event';
    }


    else if (command === 'copy text') {
      setCopyTxt(transcript);
      setCopied(true);
    }
  };


  // if (!browserSupportsSpeechRecognition) {
  //   alert("No Browser support Commander");
  //   return
  // }




  return (
    <>
      <div className='mt-5'>
        <h1>
          Speech to Text Converter <SiConvertio />
        </h1>
        <p className='text-4xl text-center mt-4 font-bold'>Click and Command for Route Change</p>
        <div onClick={() => setCopyTxt(transcript)}>{transcript}</div>
        <div className='justify-center flex mt-3'>

          <button className='me-4 rounded-full shadow-2xl flex items-center bg-green-400 text-white font-extrabold p-5' onClick={startListening}>
            <BsFillMicFill /> Start
          </button>
          <span><Image className='rounded-full border-4 border-green-400' width={100} height={100} src={robo} alt="No Image"></Image></span>

          {/* <button onClick={stopListening}>
            <BsFillMicMuteFill /> Stop
          </button> */}


          {/* <button onClick={setCopied}>
            <BiSolidCopyAlt />
            {isCopied ? ' Copied' : ' Copy to clipboard'}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Commandvoice;




