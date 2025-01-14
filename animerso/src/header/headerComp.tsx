import logo from '../images/logo.png';
import './header.css';

function Select() {
    return (
       <p className='Lema Pulsate' title='Step into The Anime Universe'>Step into The Anime Universe</p>
    )
}

function InputSearch() {
    return (
        <div className="searchContainer">
            <input type='text' className='searchByName' title='Search by name...' placeholder='Search by name...' />
            <span className="search-icon" title='Go'>
                <svg viewBox="0 0 64 64" width="25px" height="25px"><linearGradient id="C4TdsG345VslfSD6bqYyXa" x1="20.499" x2="20.499" y1="13.001" y2="23.584" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#C4TdsG345VslfSD6bqYyXa)" d="M25,14.001c-5,0-9.002,3.999-9.002,8.999H25V14.001z"/><linearGradient id="C4TdsG345VslfSD6bqYyXb" x1="24.511" x2="26.011" y1="5.27" y2="59.777" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#C4TdsG345VslfSD6bqYyXb)" d="M24.999,10c-7.169,0-13.002,5.832-13.002,13.002s5.833,13.002,13.002,13.002 s13.002-5.832,13.002-13.002S32.168,10,24.999,10z M24.999,34.003c-6.066,0-11.001-4.935-11.001-11.001s4.935-11.001,11.001-11.001 s11.001,4.935,11.001,11.001S31.065,34.003,24.999,34.003z"/><linearGradient id="C4TdsG345VslfSD6bqYyXc" x1="31.109" x2="32.609" y1="5.089" y2="59.595" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#C4TdsG345VslfSD6bqYyXc)" d="M54.77,48.559l-8.752-9.864c-0.719-0.812-1.995-0.92-2.845-0.243l-2.486,1.973l-4.125-4.994 c3.337-3.106,5.439-7.521,5.439-12.429C42.001,13.627,34.374,6,24.999,6S7.997,13.627,7.997,23.002s7.627,17.002,17.002,17.002 c3.749,0,7.207-1.234,10.021-3.298l4.099,4.963l-2.366,1.877c-0.434,0.344-0.698,0.832-0.746,1.374 c-0.047,0.539,0.127,1.06,0.49,1.469l8.753,9.865C46.272,57.406,47.739,58,49.215,58c1.169,0,2.344-0.373,3.307-1.137l1.607-1.274 c1.08-0.858,1.739-2.068,1.856-3.406C56.1,50.859,55.669,49.572,54.77,48.559z M9.997,23.002C9.997,14.73,16.727,8,24.999,8 s15.002,6.73,15.002,15.002s-6.729,15.002-15.002,15.002S9.997,31.274,9.997,23.002z M48.642,44.666l-6.467,5.133l-1.477-1.656 l6.472-5.136L48.642,44.666z M44.418,40.018c0.013-0.01,0.03-0.014,0.049-0.014c0.022,0,0.045,0.007,0.055,0.018l1.319,1.487 l-6.476,5.139l-1.368-1.534L44.418,40.018z M52.885,54.022l-1.607,1.274c-1.361,1.081-3.394,0.915-4.532-0.369l-3.239-3.632 l6.464-5.13l3.303,3.722c0.53,0.598,0.785,1.351,0.718,2.122C53.924,52.795,53.53,53.51,52.885,54.022z"/></svg>
            </span>
        </div>
    )
}

export default function Header() {
    return (
        <header className='headerComp'>
            <img src={logo} className='logoHeader' title='logoAnimerso'></img>
            <Select />
            <InputSearch />

        </header>
    )
}


// // Definir la estructura de los datos que se manejarán en los selects
// interface SelectData {
//  value: string;
//  label: string;
// }

// // Función para manejar el cambio en el primer select
// const handleFirstSelectChange = (selectedOption: SelectData) => {
//  console.log('Seleccionado en el primer select:', selectedOption);
// };

// // Función para manejar el cambio en el segundo select
// const handleSecondSelectChange = (selectedOption: SelectData) => {
//  console.log('Seleccionado en el segundo select:', selectedOption);
// };

// // Función para manejar el cambio en el input de texto
// const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//  console.log('Texto ingresado en el input:', event.target.value);
// };

// // Componente del header
// const Header = () => {
//  // Definir los datos de los selects y el valor del input de texto
//  const [firstSelectValue, setFirstSelectValue] = useState<SelectData | null>(null);
//  const [secondSelectValue, setSecondSelectValue] = useState<SelectData | null>(null);
//  const [inputValue, setInputValue] = useState('');

//  // Datos de los selects
//  const firstSelectData: SelectData[] = [
//     { value: 'option1', label: 'Opción 1' },
//     { value: 'option2', label: 'Opción 2' },
//     { value: 'option3', label: 'Opción 3' },
//  ];

// }
