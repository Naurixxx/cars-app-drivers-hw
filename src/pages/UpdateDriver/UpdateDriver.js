import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import DriverForm from './../../components/DriverForm/DriverForm';
import { DriversContext } from '../../contexts/DriversContext';
import ErrorBoundary from './../../components/ErrorBoundary/ErrorBoundary';
import MainLayout from '../../layouts/MainLayout';

import '../UpdateCar/UpdateCar.css';

function UpdateDriver() {
   let { id } = useParams();
   let history = useHistory();
   const { drivers } = useContext(DriversContext);
   const { addToast } = useToasts();
   const driverToBeUpdated = drivers.find((driver) => {
      return Number(driver.id) === Number(id);
   });
   console.log(driverToBeUpdated)

   if (driverToBeUpdated === false) {
      addToast(`Error: cannot find driver with id ${id}. Redirecting`, {
         appearance: 'error',
      });
      history.push('/drivers');
      return null;
   }

   return (
      <MainLayout>
         <h1>Update Driver</h1>
         <ErrorBoundary>
            <DriverForm driver={driverToBeUpdated} />
         </ErrorBoundary>
      </MainLayout>
   );
}

export default UpdateDriver;