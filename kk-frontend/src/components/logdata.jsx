import React from "react";

const LogData = [ // Log data1
    {
        "room_id": 1,
        "count": 29,
        "timestamp": "2021-08-01 12:00:00",
    },
    {
        "room_id": 2,
        "count": 20,
        "timestamp": "2021-08-01 12:05:00",
    }
]

function LogTable(roomID) {
    return (
        <div className="background">
            <h1>Log Table</h1>
            <div className="block_table">
                <table>
                    <tr>
                      <th ><b className="tableHeader">RoomID</b></th>
                      <th><b className="tableHeader">Count</b></th>
                      <th><b className="tableHeader">Timestamp</b></th>
                    </tr>
                    {LogData.map((val, key) => {
                      return (
                        <tr key={key}>
                            <td className="RoomId_data">
                                <div><b className="tableData">{val.room_id}</b></div>
                            </td>
                            <td className="count_data">
                                <div><b className="tableData">{val.count}</b></div>
                            </td>
                            <td className="timestamp_data">
                                <div><b className="tableData">{val.timestamp}</b></div>
                            </td>
                        </tr>
                      )
                    })}
                </table>
            </div>  
        </div>
    )
}

export default LogTable