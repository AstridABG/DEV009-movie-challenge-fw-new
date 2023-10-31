import logo from '../images/logo.png';
import './header.css';

function Select() {
    return (
        <select name='genres' id='selectGen'>
            <option value='option1'>Aventura</option>
            <option value='option2'>Accion</option>
            <option value='option3'>Comedia</option>
        </select>
    )
    }

function InputSearch() {
    return (
        <input type='text' name='searchByName' id='inputSearch' placeholder='Busqueda por nombre'>
        </input>
    )
}

export default function Header() {
    return (
        <header className='headerComp'>
            <img src={logo} className='logoHeader'></img>
            <Select/>
            <Select/>
            <InputSearch/>
            
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
