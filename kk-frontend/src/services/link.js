import axios from 'axios';

const api = "http://ecourse.cpe.ku.ac.th/exceed12/"

export async function removeDevice(roomId) {
  const result = await axios.delete(`/${api}/removedevice/${roomId}`);
  return result.data;
}

export async function newDevice(){
    const result = await axios.post(`/${api}/newdevice`);
    return result.data;
}

export async function getAllData(roomId){
    const result = await axios.get(`/${api}/getdata/all/${roomId}`);
    return result.data;
}

export async function is_pet_active(roomId){
    const result = await axios.get(`/${api}/getdata/pet_active/${roomId}`);
    return result.data;
}

export async function get_coommands(roomId){
    const result = await axios.get(`/${api}/getdata/commands/${roomId}`);
    return result.data;
}

export async function get_levels(roomId){
    const result = await axios.get(`/${api}/getdata/levels/${roomId}`);
    return result.data;
}

