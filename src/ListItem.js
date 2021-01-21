import React, {useState, useEffect} from 'react';

function ListItem(props) {
    console.log(props)
    // props.txt
    return (
        <>
            <li className={'p-2 border-b'}>
                <input type="checkbox" className={'mr-1 align-middle'}/>
                <span className={'text-gray-700 font-semibold'}>{props.txt}</span>
            </li>
        </>
    );
}

export default ListItem;
