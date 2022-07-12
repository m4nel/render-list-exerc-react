type Props = {
    data: {
        name: string;
        age: number;
    }
}


export const Botao = ({data}: Props) => {
    return (
        <li>
            {data.name} - {data.age} anos.
        </li>
    )
}

export default Botao ;