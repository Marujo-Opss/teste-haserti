import { CloseButton } from "../CloseButton";
import bugImageUrl from '../../imgs/bug.svg';
import ideiaImageUrl from '../../imgs/thought.svg';
import thoughtImageUrl from '../../imgs/ideia.svg';
import { ForwardedRef, useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccesStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: { 
            source: bugImageUrl,
            alt:'Imagem de um inseto'
        },
    },

    IDEIA: {
        title: 'Ideia',
        image: { 
            source: ideiaImageUrl,
            alt:'Imagem de uma lampada'
        },
    },

    OUTRO: {
        title: 'Outro',
        image: { 
            source: thoughtImageUrl,
            alt:'Imagem de uma nuvem de pensamento'
        },
    },
}

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm (){
    const [feedBackType, setFeedBackType] = useState<feedbackType | null> (null)
    const [feedbackSent, setFeedbackSent] = useState(false);
    

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedBackType(null);
    }

    return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
       
        { feedbackSent ? (
            <FeedbackSuccesStep onFeedbackRestartRequested ={handleRestartFeedback}/>
        ) : (
            <>
            {!feedBackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedBackType} />
        
        ):(
            <FeedbackContentStep
             feedbackType={feedBackType}
             onFeedbackRestartResquested={handleRestartFeedback}
             onFeedbackSent = {()=> setFeedbackSent(true)}
             />
         )}
            </>
        )}
        
        
        <footer className="text-xs text-neutral-400">
            <a className='underLine underLine-offset-2' href='https://haserti.com.br'>Haserti</a>
        
        </footer>
    </div>
    
    );   
}