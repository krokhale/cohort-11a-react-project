import React, {useState, useEffect} from 'react';
import {Button, Tabs} from "antd";
import ListItem from "./ListItem";
const { TabPane } = Tabs;

function Django(props) {

    const [stocks, setStocks] = useState([]);

    const [txt, setTxt] = useState('');


    useEffect(() => {
        fetch('http://localhost:8000/api/todos')
            .then((res) => {
                return res.json()
            }).then((data) => {
            console.log(data)
        })

        console.log('run this code on page load!')

        // setTimeout(() => {
        //     setTxt('Microsoft')
        // }, 5000)
    }, [])


    const addStock = async () => {
        console.log('this works!')
        console.log('the value for the txt state is', txt)
        // POST request because we are creating an item
        // JSON
        let options = {headers: {}, method: 'POST', body: JSON.stringify({title: txt, description: 'its a stock'})}
        options.headers["Accept"] = "application/json, text/plain, */*";
        options.headers["Content-Type"] = "application/json;charset=utf-8";
        console.log(options);
        let res = await fetch('http://localhost:8000/api/todos/', options)
        setTxt('')


    };

    const updateTheStateWithUserInput = async (ev) => {
        console.log(ev.currentTarget.value)
        setTxt(ev.currentTarget.value)
    };

    return (
        <>


            <div className={'p-5 border m-5 md:m-12 lg:m-20'}>

                {/*<div className={expired ? 'border border-red-500' : 'border border-gray-300'}>*/}
                {/*    <DatePicker onChange={onDateChange} bordered={false} />*/}
                {/*</div>*/}

                {/*<br/>*/}
                {/*<br/>*/}
                {/*<br/>*/}

                {/*{expired && <h2>You cannot select a date in the past!</h2>}*/}

                <p>
                    the real time value for the input state txt is: {txt}
                </p>


                <div className={'flex justify-center items-center'}>
                    <input value={txt} onChange={updateTheStateWithUserInput} type="text" className={'border p-1 mr-5 rounded w-full'} placeholder={'Stock...'}/>

                    <Button type={'primary'} onClick={addStock}>Add</Button>
                </div>


                <div className={'bg-gray-100 mt-5 p-5'}>
                    <ul>
                        {/*{todos.map((task, idx) => {*/}
                        {/*    return <ListItem txt={task.txt} key={idx}/>*/}
                        {/*})}*/}
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
                <Tabs defaultActiveKey="1" type={'card'}>
                    <TabPane tab="All" key="1">
                        Content of Tab Pane 1
                    </TabPane>
                    <TabPane tab="Active" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                    <TabPane tab="Completed" key="3">
                        Content of Tab Pane 3
                    </TabPane>
                </Tabs>

                <div className={'mt-5'}>&nbsp;</div>

            </div>

            {/*<ul>*/}
            {/*    <li>*/}
            {/*        List Item 1*/}
            {/*        <br/>*/}
            {/*        <button className={'bg-blue-500'}>Edit</button>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <button className={'bg-blue-500'}>Delete</button>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*        <br/>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        List Item 2*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        List Item 3*/}
            {/*    </li>*/}
            {/*</ul>*/}

        </>
    );
}

export default Django;
