import axios from 'axios';

const api = "https://ecourse.cpe.ku.ac.th/exceed12"

export async function removeDevice(roomId) {
  const result = await axios.delete(`/${api}/removedevice/${roomId}`);
  return result.data;
}

export async function newDevice(){
    const result = await axios.post(`/${api}/newdevice`);
    return result.data;
}

export async function is_pet_active(roomId){
    const result = await axios.get(`/${api}/getdata/pet_active/${roomId}`);
    return result.data;
}
// Returns true or false


export async function getAllData(roomId){ 
    const result = await axios.get(`/${api}/getdata/all/${roomId}`);
    return result.data;
}
// Returns
// {
//     "tray_level": true,
//     "tank_level": false,
//     "auto_refill": true,
//     "PIR_on": true,
//     "room_id": 1,
//     "mannual_refill": false,
//     "pet_active": true,
// }


export async function get_commands(roomId){
    const result = await axios.get(`/${api}/getdata/commands/${roomId}`);
    return result.data;
}
// Returns
// {
//     "auto_refill": true,
//     "mannual_refill": false,
//     "PIR_on": true,
// }


export async function get_levels(roomId){
    const result = await axios.get(`/${api}/getdata/levels/${roomId}`);
    return result.data;
}
// Returns
// {
//     "tank_level": false,
//     "tray_level": true
// }

export async function get_room_time(){
    const result = await axios.get(`/${api}/rooms/time`);
    return result.data;
}
// Returns
// {
    // "room_id": room,
    // "total_time_today": total_time_today,
    // "total_time_yesterday": total_time_yesterday,
    // "total_time_week": total_time_week,
    // "total_time_month": total_time_month,
    // "total_time_year": total_time_year
// }