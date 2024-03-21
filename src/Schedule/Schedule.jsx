import React, { useEffect, useRef, useState } from 'react'

import './Schedule.css'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import Searchbar from '../components/Searchbar'
import { IoMdArrowDropdown } from "react-icons/io";

function Schedule() {
  const selectRef = useRef()
  const [tripData, setTripData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (
      async () => {
        try {
          const response = await fetch('src/assets/output.json')
          const data = await response.json()
          setTripData(data)
        }
        catch (error) {
          console.log("Error fetching data", error)
        }
        finally {
          setLoading(false)
        }
      }
    )()
  }
    , []
  )
  if (loading) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div>
      <Nav></Nav>
      <div className='main-wrapper'>
        <Sidebar />
        <div className='content-wrapper'>
          <div className='header'>
            <h1 className='page-title'>Schedules</h1>
            <Searchbar />
            <div className='select-wrapper'>
              <select ref={selectRef} name="schedule-date" id="schedule-date" className='select-date'>
                <option value="17-03-2024">17-03-2024</option>
                <option value="12-02-2024">12-02-2024</option>
                <option value="21-01-2024">21-01-2024</option>
              </select>
            </div>
          </div>
          {
            tripData["trips_details"].map(trip => {
              return (<div className="trip-wrapper">
                <h2>Trip {trip["trip_number"]}</h2>
                <table>
                  <tr className='table-head' >
                    <th>Sl No.</th><th>Route ID</th><th>Dep Place</th><th>Dep Time</th><th>Route</th><th>Arr Place</th><th>Arr Time</th><th>Distance</th><th>Running Time</th><th>Terminal Gap</th>
                  </tr>

                  {
                    trip["trip"].map((leg, index) => {
                      return (
                        <tr>
                          <td>{index+1}</td><td>{leg["Sl No."]}</td><td>{leg["Departure Place"]}</td><td>{leg["Departure Time"]}</td><td>{leg["Route of Operation"]}</td><td>{leg["Arrival Place"]}</td><td>{leg["Arrival Time"]}</td><td>{leg["KM"]}</td><td>{leg["Running Time"]}</td><td>{leg["Terminal Gap"]}</td>
                        </tr>
                      )
                    })
                  }

                </table>
                <div className="trip-statistics">
                  <p>Steering Duty: <span>{trip['steering_duty']}</span> Hrs</p>
                  <p>Spread Over: <span>{trip['spread_over']}</span> Hrs</p>
                </div>
              </div>)
            })

          }

        </div>
      </div>
    </div>
  )
}

export default Schedule