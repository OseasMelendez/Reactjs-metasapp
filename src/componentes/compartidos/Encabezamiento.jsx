function Encabezamiento(){
    return(
        <div className="h-15 flex justify-between shadow bg-white text-gray-700">
            <div className="flex items-center pl-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-10 w-10" width="30" height="30" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
             </svg>
             <a href="/" className="text-lg font-semibold text-gray-900 uppercase ml-2">Metas App</a>
            </div>
            <nav>
                <a href="/perfil" className="flex items-center px-4 h-15 hover:bg-gray-200">
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                </svg>
                </a>
            </nav>
        </div>
    );
}
 export default Encabezamiento;