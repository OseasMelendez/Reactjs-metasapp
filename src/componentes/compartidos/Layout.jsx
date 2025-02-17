import Encabezado from './Encabezamiento';
import Pie from './Pie';
import Principal from './Principal';
import { Outlet } from "react-router";

export default function Layout() {
    return (
        <div>
            <Encabezado></Encabezado>
            <Principal>

                <Outlet />

            </Principal>
            <Pie></Pie>
        </div>
    );
}