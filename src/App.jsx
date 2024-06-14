import { Suspense, lazy, useEffect, useState } from 'react'
import { NavbarCompo } from './components/NavbarCompo'
import { ButtonCompo } from './components/ButtonCompo';
// import { CardCompo } from './components/CardCompo';
import { ListGroup } from 'flowbite-react';
import { LoadingCompo } from './components/LoadingCompo';
import { BASE_URL } from './utils/baseUrl';

const CardCompo = lazy(() => import("./components/Cards/CardCompo"));

function App() {
  
  const [count ,setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  
  const [user, setUsers] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);

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
    try{
      setIsLoading(true);
        const response = await fetch(BASE_URL + "users");
        const data = await response.json();
        console.log(data.users);
        setUsers(data.users);
        setIsLoading(false);
      }catch(error)
      {
        console.log(error);
      }
   
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      {/* <NavbarCompo/>
      <ButtonCompo onClick={handleCount} title={`Count increment`}/>
      <h1>{count}</h1>
      <form action="">
        <label htmlFor="">email</label>
        <input type="text" id='email' onChange={(e) => handleEmail(e)}/>
      </form>

      {email}
      <div className='text-red-600'>
        {errorMsg}
      </div> */}

      
      <div className='flex flex-wrap min-h-screen items-center justify-center gap-7'>
      {
        // isLoading ? <LoadingCompo/>
        // :

        // <Suspense fallback={<LoadingCompo/>}>
        //   {
        //     user.map((user) => (
        //       <div key={user?.id}>
        //         {/* {user.firstName} {user.lastName} */}
        //         <CardCompo profile={user.image} lastName={user.lastName}/>
        //       </div>          
        //     ))
        //   }
        // </Suspense>
        isLoading ? (<LoadingCompo/>)
        : (
            user.map((user) => (
              <div key={user?.id}>
                {/* {user.firstName} {user.lastName} */}
                <CardCompo profile={user.image} lastName={user.lastName}/>
              </div>          
            ))
        )
      }
       </div>

    </>
  )
}

export default App
