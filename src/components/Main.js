import React from 'react'
import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import GetAQoute from './Qoutation/GetAQoute';
import TrackYourShipment from './TrackShipment/TrackYourShipment';
import ContactUs from "./ContactUs";
import Career from "./Career";
import PageNotFound from './PageNotFound';

import FreightForwarding from "./Qoutation/FreightForwarding";
import CustomClearance from "./Qoutation/CustomClearance";
import WarehouseManagement from './Qoutation/WarehouseManagement';
import TransportationManagement from "./Qoutation/TransportationManagement";
import ValueAddedServices from "./Qoutation/ValueAddedServices";
import SubmissionSuccess from './Qoutation/SubmissionSuccess';
import SubmissionFail from './Qoutation/SubmissionFail';

function Main() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about-us' element={<AboutUs />} />

            <Route path='/get-a-qoute' element={<GetAQoute />} />

            <Route path='/get-a-qoute/freight-forwarding' element={<FreightForwarding />} />
            <Route path='/get-a-qoute/custom-clearance' element={<CustomClearance />} />
            <Route path='/get-a-qoute/warehouse-management' element={<WarehouseManagement />} />
            <Route path='/get-a-qoute/transportation-management' element={<TransportationManagement />} />
            <Route path='/get-a-qoute/value-added-services' element={<ValueAddedServices />} />
            <Route path='/get-a-qoute/submission-successfull' element={<SubmissionSuccess />} />
            <Route path='/get-a-qoute/submission-failed' element={<SubmissionFail />} />
            
            
            <Route path='/track-your-shipment' element={<TrackYourShipment />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/career' element={<Career />} />                
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </div>
  )
}

export default Main;