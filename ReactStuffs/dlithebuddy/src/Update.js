import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { editing, iterate } from "./service/API"

const Update=()=>{

    const{pos}=useParams()

    useEffect(()=>{
        yet()
    },[])

    const yet=async()=>{
        let hai = await iterate()
        hai=hai.data

        setEvent(hai[pos])
    }

    const[event,setEvent]=useState({
        eventId:0,
        eventName:"",
        eventExpert:"",
        eventDuration:0,
        eventStarted:new Date().toISOString(),
        eventEnded:new Date().toISOString(),
        eventVenue:"",
        eventStatus:false,
        eventParticipants:0
    })

    const eve=(e)=>{
        const{name,value}=e.target
        setEvent((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const alter=async()=>{
        const temp=await editing(event)
        alert(temp.data.eventName+" has edited")
        clean()
        window.location.assign("/")
    }

    const clean=()=>{
        setEvent(()=>{
            return{
                eventId:0,
                eventName:"",
                eventExpert:"",
                eventDuration:0,
                eventStarted:new Date().toISOString(),
                eventEnded:new Date().toISOString(),
                eventVenue:"",
                eventStatus:false,
                eventParticipants:0
            }
        })
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col shadow rounded p-5">
                        <input type="hidden" name="eventId" value={event.eventId} />
                        <input type="text" name="eventName" placeholder="Event Name" 
                            onChange={eve} value={event.eventName} className="form-control"
                        />
                        <input type="text" name="eventExpert" placeholder="Event Expert Name" 
                            onChange={eve} value={event.eventExpert} className="form-control"
                        />
                        <input type="text" name="eventVenue" placeholder="Event Venue" 
                            onChange={eve} value={event.eventVenue} className="form-control"
                        />
                        <input type="text" name="eventDuration" placeholder="Event Duration" 
                            onChange={eve} value={event.eventDuration} className="form-control"
                        />
                        <input type="text" name="eventStarted" placeholder="Event Started date" 
                            onChange={eve} value={event.eventStarted} className="form-control"
                        />
                        <input type="text" name="eventEnded" placeholder="Event Ended date" 
                            onChange={eve} value={event.eventEnded} className="form-control"
                        />
                        <input type="text" name="eventParticipants" placeholder="Event Participants" 
                            onChange={eve} value={event.eventParticipants} className="form-control"
                        />
                        <input type="text" name="eventStatus" placeholder="Event Status" 
                            onChange={eve} value={event.eventStatus} className="form-control"
                        />
                        <div className="row justify-content-around">
                            <input type="button" value="Update" className="col-3 btn btn-info" onClick={alter}/>
                            <input type="button" value="Clear" className="col-3 btn btn-secondary" onClick={clean}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update