import { ChatTeardropDots } from 'phosphor-react';
import { WidgetForm } from './WidgetForm';
import { Popover } from '@headlessui/react'



export function Widget (){
    


    return (
        <Popover className='absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end'>
         <Popover.Panel>
             <WidgetForm/>
         </Popover.Panel> 

        <Popover.Button  className='bg-red-500 rounded-full p-3 h-12 text-white flex items-center group'>
            <ChatTeardropDots className='w-6 h-6'/>

            <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                <span className='pl-2'></span>
                FeedBack
            </span>
        </Popover.Button>
        </Popover>
    )
}