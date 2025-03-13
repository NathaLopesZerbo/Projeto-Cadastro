import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Home() {


  const users = [
    {
    id: '3445ads',
    name: 'Natha',
    age: 18,
    email: 'natha@gmail.com'
  },
  {
    id: '3446ads',
    name: 'Allanis',
    age: 16,
    email: 'Allanis@gmail.com'
  },
  ]

  return (
    <div className="flex items-center pt-25 flex-col">
      <form className='flex flex-col gap-8 p-8 rounded-[10px] bg-form max-w-[50%] w-[400px] mb-5'>
        <h1 className='text-white text-3xl'>Cadastro de Usuário</h1>
        <input name='nome' type='text' placeholder='Digite seu Nome' />
        <input name='idade' type='number' placeholder='Digite sua idade'/>
        <input name='email' type='email' placeholder='Digite seu Email' />
        <button className='rounded-4xl bg-button-cadastrar h-10 border-none cursor-pointer duration-150 text-white hover:opacity-85' type='button'>Cadastrar</button>
      </form>

        {users.map( user => (
          <div key={user.id} className='flex justify-between bg-[#2E2D4E] m-3 p-3 w-[400px] rounded-[10px]'>
            <div>
              <p>Nome: <span>{user.name}</span> </p>
              <p>Idade: <span>{user.age} </span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button className='cursor-pointer text-red-700 text-[20px] duration-100 hover:opacity-80'>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}

    
    </div>

  )
}

export default Home
