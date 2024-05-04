// layout
import DefaultLayout from "../layouts/default-layout"
import Index from '../views/index'
import AdminDashboard from "../views/AdminDashboard";
import ExpertDashboard from "../views/ExpertDashboard";
import { AppRouter } from './app-router';
import AddDoctors from "../views/modules/doctors/add-doctors";
import DoctorProfile from "../views/modules/doctors/doctor-profile";
import EditDoctors from "../views/modules/doctors/edit-doctors";
import Chat from "../views/modules/chat/chat";
import HighLevel from "../views/modules/QA/highlevel";
import Lowlevel from "../views/modules/QA/lowlevel";
import Blogs1 from "../views/modules/QA/blogs1";
import Blogs2 from "../views/modules/QA/blogs2";
import Addblogs from "../views/modules/QA/addblogs";





import { Navigate } from "react-router-dom";
import ModeratorDashboard from "../views/ModeratorDashboard";
import DoctorDashboard from "../views/DoctorDashboard";
import PatientDashboard from "../views/PatienetDashboard";
import DoctorsList from "../views/modules/doctors/doctors-list";
export const IndexRouters = [
    {
        path: '',
        element : <Navigate to="/sign-in" />,

        path: 'home',
        element : <DefaultLayout />,
        children : [
            
            {
                path: 'home',
                element : <Index />,
            },
            {
                path:'AdminDashboard',
                element:<AdminDashboard/>
            },
            {
                path:'ExpertDashboard',
                element:<ExpertDashboard/>
            },
            {
                path:'ModeratorDashboard',
                element:<ModeratorDashboard/>
            },
            {
                path:'DoctorDashboard',
                element:<DoctorDashboard/>
            },
            {
                path:'PatientDashboard',
                element:<PatientDashboard/>
            },
        
            {
                path:'all-doctors',
                element:<DoctorsList/>
            },
            {
                path:'add-doctors',
                element:<AddDoctors/>
            },
            {
                path:'doctors-profile/:uid',
                element:<DoctorProfile/>
            },
            {
                path:'edit-doctors',
                element:<EditDoctors/>
            },
            {
                path:'chat',
                element:<Chat/>
            },
            
            
            {
                path:'questions',
                element:<HighLevel/>
            },
            {
                path:'answers/:qid',
                element:<Lowlevel/>
            },
            {
                path:'blogs1',
                element:<Blogs1/>
            },
            {
                path:'blogs2',
                element:<Blogs2/>
            },
            {
                path:'addblogs',
                element:<Addblogs/>
            },

            ...AppRouter
        ],
    }
]