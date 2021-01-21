import React, {useState, useEffect} from 'react';
import {Button, DatePicker} from "antd";
import { Tabs } from 'antd';
import ListItem from "./ListItem";
import moment from 'moment';
const { TabPane } = Tabs;


function Todos(props) {
    const [todos, setTodos] = useState([
        {txt: 'Go to the grocery'},
        {txt: 'Work on project'},
        {txt: 'Not get covid'}
    ]);

    const [expired, setExpired] = useState(false);

    const onDateChange = async (m) => {
        if(m.isBefore(moment())){
            setExpired(true);
        } else {
            setExpired(false);
        }
    };

    return (
        <div className={'p-5 border m-5 md:m-12 lg:m-20'}>

            {/*<div className={expired ? 'border border-red-500' : 'border border-gray-300'}>*/}
            {/*    <DatePicker onChange={onDateChange} bordered={false} />*/}
            {/*</div>*/}

            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}

            {/*{expired && <h2>You cannot select a date in the past!</h2>}*/}


            <div className={'flex justify-center items-center'}>
                <input type="text" className={'border p-1 mr-5 rounded w-full'} placeholder={'Task...'}/>

                <Button type={'primary'}>Add</Button>
            </div>


            <div className={'bg-gray-100 mt-5 p-5'}>
                <ul>
                    {todos.map((task, idx) => {
                        return <ListItem txt={task.txt} key={idx}/>
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
    );
}

export default Todos;
