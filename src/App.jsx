import { useEffect, useState } from 'react'
import { NavbarCompo } from './components/NavbarCompo'
import { ButtonCompo } from './components/ButtonCompo';
import { CardCompo } from './components/CardCompo';


function App() {
  
  const [count ,setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const BASE_URL = "https://dummyjson.com/";
  const [user, setUsers] = useState([]); 

  function handleEmail(e){
    setEmail(e.target.value);
    console.log(email);
  }

  function handleCount()
  {
      setCount(count + 1);
      console.log(count);
  }

  useEffect(() => {
    console.log("test")
  },[count])

  useEffect(() => {
    if(email.includes("@") && email.includes("."))
      {
          setErrorMsg("Correct");
      }else{
        setErrorMsg("Invalid email");
      }
  },[email])

  async function fetchData(){
    const response = await fetch(BASE_URL + "users");
    const data = await response.json();
    console.log(data.users);
    setUsers(data.users);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <NavbarCompo/>
      <ButtonCompo onClick={handleCount} title={`Count increment`}/>
      <h1>{count}</h1>
      <form action="">
        <label htmlFor="">email</label>
        <input type="text" id='email' onChange={(e) => handleEmail(e)}/>
      </form>

      {email}
      <div className='text-red-600'>
        {errorMsg}
      </div>

      <div className='flex flex-wrap justify-center gap-7'>
        {
          user.map((user) => (
            <div key={user?.id}>
              {/* {user.firstName} {user.lastName} */}
              <CardCompo profile={user.image} lastName={user.lastName}/>
            </div>

            

          
          ))
        }
       </div>

    </>
  )
}

export default App
