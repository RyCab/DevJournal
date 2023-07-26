import { SideMenu } from "../components/SideMenu/SideMenu";
import { AdminPanel } from "../components/AdminPanel/AdminPanel";
import './styles.css';

export const AdminPage = () => {
    return (
      <div className="aPage-con">
        <div className="aSide-con">
            <SideMenu/>
        </div>
        <div className="aContent-con">
            <AdminPanel/>
        </div>
      </div>
      
    );
  };
  
  export default AdminPage;