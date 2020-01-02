import React, {Component} from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import request from 'superagent'
// a localizer for BigCalendar
const localizer = momentLocalizer(moment)

require('react-big-calendar/lib/css/react-big-calendar.css')

let CALENDAR_ID = process.env.CALENDAR_ID;
let API_KEY = process.env.CALENDAR_API_KEY;
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

// earliest time shown on the calendar: 8:00 am
let minTime = new Date(0);
minTime.setHours(8);

// latest time shown on the calendar: 10:00 pm
let maxTime = new Date(0);
maxTime.setHours(22);

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
                    }
                    events.push(ne)
                }
            })
            callback(events);
        }
    })
}


function printHi() {
    console.log('hi');
    return false;
}


class CustomEvent extends React.Component {
    constructor(event) {
        super();
        this.state = {display: 'none'};
        this.event = event.event;
        this.toggleShowLink = this.toggleShowLink.bind(this)
    }

    toggleShowLink() {
        if (this.state.display == 'none') {
            this.setState({display: 'block'});
        } else {
            this.setState({display: 'none'});
        }
        console.log(this.state.display);
    }

    render() {
        return (
            <div className='rbc-event'>
                <div className='rbc-event-content'>
                    <div onClick={this.toggleShowLink}>{this.event.title}</div>
                    <a href={this.event.description} target='_blank'
                        style={{...this.state, ...{color: 'white'}}}>more details</a>
                </div>
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
        return (
            <Calendar
            localizer={localizer}
            style={{height: '600px'}}
            events={this.state.events}
            min={minTime}
            max={maxTime}
            components={{event: CustomEvent}}
            />
        )
    }
}

export default BigCalendarComponent;

