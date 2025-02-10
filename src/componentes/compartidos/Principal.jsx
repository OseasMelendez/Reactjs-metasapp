import './Principal.css'
import Vinculo from './Vinculo';

function Principal({children}){
    return(
        <div className='principal'>
            <aside className='aside'>
                <Vinculo href='/lista' texto='Lista de Metas'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-3 5h3m-6 0h.01M12 16h3m-6 0h.01M10 3v4h4V3h-4Z"/>
                </svg>

                </Vinculo>
                <Vinculo href='/crear' texto='Nueva Meta'>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>

                </Vinculo>
                
            </aside>
            <main className='main'>
                {children}
            </main>
        </div>
    );
}
 export default Principal;