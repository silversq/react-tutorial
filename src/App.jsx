import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import logo from './logo.svg';
import Banner from './components/Banner';
import TermPage from './components/CourseList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CourseForm from './components/CourseForm';

const queryClient = new QueryClient();

const CourseEditFormUrl = ({courses}) => {
  const {id} = useParams();
  return <CourseForm courses={courses} id={id} />;  
}

const Main = () => {
  const [schedule, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');

  if (error) return <h1>Error loading user data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading user data...</h1>;
  if (!schedule) return <h1>No user data found</h1>;

  return  <div className="container">
            <Banner title={schedule.title}/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<TermPage courses={schedule.courses} />} />
                <Route path="/course/:id/edit" element={<CourseEditFormUrl courses={schedule.courses} />}/>
              </Routes>
            </BrowserRouter>
          </div>;
}

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <Main />
  </QueryClientProvider>
  );
};

export default App;
