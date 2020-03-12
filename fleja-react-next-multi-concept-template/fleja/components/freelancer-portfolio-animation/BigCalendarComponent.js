import React, {Component} from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import request from 'superagent'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { isMobile } from "react-device-detect";


let CALENDAR_ID = process.env.CALENDAR_ID;
let API_KEY = process.env.CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

function getEvents (callback) {
    // get events from Google Calendar
    request.get(url).end((err, resp) => {
        if (!err) {
            const events = [];
            JSON.parse(resp.text).items.map((event) => {
                // only create event if it has a start
                if ("start" in event) {
                    let ne = {
                        start: new Date(event.start.dateTime || event.start.date),
                        end: new Date(event.end.dateTime || event.end.date),
                        title: event.summary,
                        description: event.description,
                        location: event.location,
                    }
                    events.push(ne)
                }
            })
            callback(events);
        }
    });
}

class CustomEvent extends React.Component {
    constructor(event) {
        super();
        this.state = {displayDetails: false};
        this.event = event.event;
        this.toggleShowDetails = this.toggleShowDetails.bind(this)
    }

    toggleShowDetails() {
        if (!this.state.displayDetails) {
            this.setState({displayDetails: true});
        } else {
            this.setState({displayDetails: false});
        }
    }

    render() {
        let timeString = this.event.start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        return (
            <div className='rbc-event'>
                <div className='rbc-event-content' onClick={this.toggleShowDetails}>
                    <div className='rbc-event-title'>{this.event.title}</div>
                    <div className='rbc-event-info'>{timeString}, {this.event.location}</div>
                </div>
                <Modal className='calendar-modal' show={this.state.displayDetails} onHide={this.toggleShowDetails}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.event.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>{timeString + "\n" + (this.event.location==undefined ? "" : this.event.location)}</div>
                        <div dangerouslySetInnerHTML={{__html: (this.event.description==undefined ? "" : this.event.description)} /* dangerous!!! */}></div>
                    </Modal.Body>
                </Modal>
            </div>
            )
    }
}

class BigCalendarComponent extends Component {
    state = {
        events: []
    }

    componentDidMount() {
        getEvents((events) => {
            this.setState({events})
        })
    }

    render () {
        // a localizer for BigCalendar
        const localizer = momentLocalizer(moment);

        // earliest time shown on the calendar: 8:00 am
        let minTime = new Date(0);
        minTime.setHours(9);

        // latest time shown on the calendar: 10:00 pm
        let maxTime = new Date(0);
        maxTime.setHours(21);

        let dfv = 'month';
        if (isMobile) {
            dfv = 'agenda';
        }

        return (
            <Calendar
            id="big-calendar"
            localizer={localizer}
            style={{height: '600px'}}
            events={this.state.events}
            defaultView={dfv}
            min={minTime}
            max={maxTime}
            components={{event: CustomEvent}}
            />
        )
    }
}

export default BigCalendarComponent;

