import { useEffect } from "react";
import { useState } from "react";
import { dele, iterate } from "./service/API"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home=()=>{

    const[events,setEvents]=useState([])

    useEffect(()=>{
        traverse()
    },[])

    const traverse=async()=>{
        const hai=await iterate()
        setEvents(hai.data)
    }

    const erase=async(id)=>{
        const tmp=await dele(id)
        alert(tmp.data+" has removed")
        window.location.assign("/")
    }

    return(<>
        <div className="container">
            <div className="row justify-content-center">
                <table className="table table-responsive-lg table-hover table-striped rounded shadow p-3">
                    <thead className="thead-dark">
                        <tr>
                            <th>Event Id</th><th>Event Name</th><th>Event Started</th>
                            <th>Event Ended</th><th>Event Expert Name</th>
                            <th>Event Venue</th><th>Event Participants Count</th>
                            <th>Event Duration</th><th>Event Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            events.map((details,index)=>(
                                <tr>
                                    <a href={`/edit/${index}`} className="text-warning">
                                        <td>{details.eventId}</td>
                                    </a>
                                    <td>{details.eventName}</td>
                                    <td>{details.eventStarted}</td><td>{details.eventEnded}</td>
                                    <td>{details.eventExpert}</td><td>{details.eventVenue}</td>
                                    <td>{details.eventParticipants}</td><td>{details.eventDuration}</td>
                                    <td>{details.eventStatus}</td><td>
                                        <button className="btn btn-danger" onClick={()=>erase(details.eventId)}>Remove</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>)
}

export default Home