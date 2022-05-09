import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";


export function CloseButton (){
    return(
        <Popover.Button className='top-5 right-5 absolute text-zinc-400 hover:text-red-400 title="Fechar formulario de FeedNack"'>
            <X  weight='bold' className="w-4 h-4" />
        </Popover.Button>

       
    );
}