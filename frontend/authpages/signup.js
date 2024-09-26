

async function signup(){
    window.location.href='user/signup'
    console.log("button is clicked")
    const inputUsername=document.getElementById('input-username');   
    const inputEmail=document.getElementById('input-email');   
    const inputPassword=document.getElementById('input-password');   
    if(inputUsername == '' || inputEmail=='' || inputPassword==''){
        alert('All fields are mandetory!!')
        return;
    }
    try{
        const response= await axios.post('http://localhost:3030/user/signup',{
            username:inputUsername.value,
            email:inputEmail.value,
            password:inputPassword.value
    
        })
    
        if(response.data.message="User created Successfully"){
            alert('Account created!!')
            window.location.href='/todo'
        }

    }catch(error){
        console.log("error in signup",error);
    }

}

