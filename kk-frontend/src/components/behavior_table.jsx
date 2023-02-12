import React from "react";
// import url('https://fonts.googleapis.com/css2?family=Atma:wght@600&family=Itim&display=swap%27)
import { useState } from "react";
import '../styles/behavior_table.css';
import {get_room_time} from "../services/link"
import Dropdown from "./dropdown";

const TotalTimeData = [ // Total time data
    {
        "room_id": 1,
        "total_time_today": 100,
        "total_time_yesterday": 200,
        "total_time_week": 300,
        "total_time_month": 400,
        "total_time_year": 500,
    },
    {
        "room_id": 2,
        "total_time_today": 150,
        "total_time_yesterday": 250,
        "total_time_week": 350,
        "total_time_month": 450,
        "total_time_year": 550,
    },
]

const Behavior_table = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState({value:null,label:"Select..."});

    const [totoal_time_data, setData] = useState(TotalTimeData); // Total time data

    useState(() => {
        get_room_time().then(data => setData(data))
    }, [])

    const options = [
        { value: 'total_time_today', label: ' Today' },
        { value: 'total_time_yesterday', label: ' Yesterday' },
        { value: 'total_time_week', label: ' Week' },
        { value: 'total_time_month', label: ' Month' },
        { value: 'total_time_year', label: ' Year' },
    ];



    return (
        <div className="background">
            <Dropdown placeHolder="Select..." options={options} ShowMenu = {showMenu} SetShowMenu = {setShowMenu} SelectedValue = {selectedValue} SetSelectedValue = {setSelectedValue} />
            <br></br>
            <h1>Behavior Table</h1>
            <div className="block_table">
                <table>
                    <tr>
                      <th><b className="tableHeader">RoomID</b></th>
                      <th><b className="tableHeader">Total Time In the Room</b></th>
                    </tr>
                    {totoal_time_data.map((val, key) => {
                      return (
                        <tr key={key}>
                            <td className="RoomId_data">
                                <div><b className="tableData">{val.room_id}</b></div>
                            </td>
                            <td className="totaltime_data">
                                <div><b className="tableData">{val[selectedValue.value]}</b></div>
                            </td>
                        </tr>
                      )
                    })}
                </table>
            </div>  
        </div>
    )
}

export default Behavior_table