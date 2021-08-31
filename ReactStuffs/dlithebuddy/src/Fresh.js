import { useState } from "react"
import { adding } from "./service/API"

const Fresh=()=>{
    const[event,setEvent]=useState({
        eventName:"",
        eventExpert:"",
        eventDuration:0,
        eventStarted:new Date().toISOString(),
        eventEnded:new Date().toISOString(),
        eventVenue:""
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

    const save=async()=>{
        const temp=await adding(event)
        alert(temp.data.eventName+" has added")
        clean()
        window.location.assign("/")
    }

    const clean=()=>{
        setEvent(()=>{
            return{
                eventName:"",
                eventExpert:"",
                eventDuration:0,
                eventStarted:new Date().toISOString(),
                eventEnded:new Date().toISOString(),
                eventVenue:""
            }
        })
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col shadow rounded p-5">
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
                        <div className="row justify-content-around">
                            <input type="button" value="Insert" className="col-3 btn btn-primary" onClick={save}/>
                            <input type="button" value="Clear" className="col-3 btn btn-secondary" onClick={clean}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Fresh