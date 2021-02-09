import React, {useState, useEffect} from 'react';
import {Button, Tabs} from "antd";
import ListItem from "./ListItem";

function Dog(props) {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();

    const [dogs, setDogs] = useState([]);

    // GET /dogs
    useEffect(() => {
        console.log('this code will execute only on component load first time')
        // fetch the dogs from the server
        fetchDogs();
    }, [])

    const fetchDogs = () => {
        fetch('http://localhost:3000/dogs')
            .then((res) => {
                return res.json()
            }).then((data) => {
            console.log('dogs', data)
            // update the state variable for the dogs list
            setDogs(data);
        })
    };

    // useEffect(() => {
    //     console.log('this code will execute anytime the firstName variable changes');
    // }, [firstName])


    const addADog = async () => {
        console.log('add a dog function was called on click')
        // what happens next?
        // gather the information collected from the front end
        // firstName, lastName, email
        // send the information to your backend api to create a dog

        fetch('http://localhost:3000/dogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({firstName, lastName, email}) // body data type must match "Content-Type" header
            })
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                // write code to update the UI here
                fetchDogs();
                setFirstName('')
                setLastName('')
                setEmail('')

            })


        // once the server returns a newly created dog, update the UI

    };

    const onFirstNameChange = (ev) => {
        setFirstName(ev.currentTarget.value);
    };

    const onLastNameChange = (ev) => {
        setLastName(ev.currentTarget.value);
    };

    const onEmailChange = (ev) => {
        setEmail(ev.currentTarget.value);
    };

    const deleteADog = async (id) => {
        console.log(id)

        fetch(`http://localhost:3000/dogs/${id}`, {method: 'DELETE'})
            .then((res) => {
                return res.json()
            }).then((data) => {
                console.log(data)
                fetchDogs();
        })

    };

    return (
        <div>

            <div className={'p-5 border m-5 md:m-12 lg:m-20'}>


                <div className={'flex justify-center items-center'}>
                    <input value={firstName} onChange={onFirstNameChange} type="text" className={'border p-1 mr-5 rounded w-full'} placeholder={'First Name'}/>


                    <input value={lastName} onChange={onLastNameChange} type="text" className={'border p-1 mr-5 rounded w-full'} placeholder={'Last Name'}/>

                    <input value={email} onChange={onEmailChange} type="text" className={'border p-1 mr-5 rounded w-full'} placeholder={'Email'}/>

                    <Button type={'primary'} onClick={addADog}>Add</Button>
                </div>


                <div className={'bg-gray-100 mt-5 p-5'}>
                    Dogs in the system:
                    <br/>
                    <br/>
                    <ul>
                        {dogs.map((dog, idx) => {
                            // return <ListItem txt={task.txt} key={idx}/>
                            return <p>
                                {dog.id}. {dog.firstName} {dog.lastName}
                                &nbsp; &nbsp; &nbsp; <Button onClick={() => deleteADog(dog.id)} type={'danger'} size={'small'}>Delete</Button>
                            </p>
                        })}
                        {/*<li className={'p-2 border-b'}>*/}
                        {/*    <input type="checkbox" className={'mr-1 align-middle'}/>*/}
                        {/*    <span className={'text-gray-700 font-semibold'}>Go to the grocery</span>*/}
                        {/*</li>*/}
                        {/*<li className={'p-2 border-b'}>*/}
                        {/*    <input type="checkbox" className={'mr-1 align-middle'}/>*/}
                        {/*    <span className={'text-gray-700 font-semibold'}>Work on project</span>*/}
                        {/*</li>*/}
                        {/*<li className={'p-2 border-b'}>*/}
                        {/*    <input type="checkbox" className={'mr-1 align-middle'}/>*/}
                        {/*    <span className={'text-gray-700 font-semibold'}>Not get covid</span>*/}
                        {/*</li>*/}
                    </ul>
                </div>

                <div className={'mt-5'}>&nbsp;</div>


                <div className={'mt-5'}>&nbsp;</div>

            </div>

        </div>
    );
}

export default Dog;
