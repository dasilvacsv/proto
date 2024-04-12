import React, { useEffect } from "react";
import useBiometricoStore from "@/store/biometricoStore";
import { parseISO, format } from 'date-fns';

function UsersBio() {
    const {biometricData: { users }, getZKTecoUsers, loading, errors } = useBiometricoStore((state) => ({
        biometricData: state.biometricData,
        getZKTecoUsers: state.getZKTecoUsers,
        loading: state.loading,
        errors: state.errors,
      }));
      
      useEffect(() => {
        getZKTecoUsers();
      }, [getZKTecoUsers]);
    
      if (loading) return <div>Loading...</div>;
      if (errors) return <div>Error: {errors}</div>;
      console.log(users);
    

return (
  
  <div>
    <ul>
      {users.map((user) => {
        const userUID = user.uid;
        const userRole = user.role;
        const userName = user.name;
        const userCardNo = user.cardno;
        const userId = user.userId;

        return (
          
          <div key={userUID} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl">
            <div>
          <h5 className="md:hidden text-gray-700 font-bold mb-2">userUID</h5>
          <span className="text-gray-700 text-sm">{`${userUID}`}</span>
        </div>
            <div>
          <h5 className="md:hidden text-gray-700 font-bold mb-2">userName</h5>
          <span className="text-gray-700 text-sm">{`${userName}`}</span>
        </div>
        <div>
          <h5 className="md:hidden text-gray-700 font-bold mb-2">userId</h5>
          <span className="text-gray-700 text-sm">{`${userId}`}</span>
        </div>
        <div>
          <h5 className="md:hidden text-gray-700 font-bold mb-2">userRole</h5>
          <span className="text-gray-700 text-sm">{`${userRole}`}</span>
        </div>
        <div>
          <h5 className="md:hidden text-gray-700 font-bold mb-2">userCardNo</h5>
          <span className="text-gray-700 text-sm">{`${userCardNo}`}</span>
        </div>
            
            
          </div>
        );
      })}
    </ul>
  </div>
);
}
export default UsersBio
