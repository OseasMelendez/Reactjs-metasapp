import './Vinculo.css'

function Vinculo({children,texto,href}){
    return(
    <a href={href} className='vinculos'>
       {children}
       <span className='texto'>{texto}</span>
    </a>
    );
}

export default Vinculo;