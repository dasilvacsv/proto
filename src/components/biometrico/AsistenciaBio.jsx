import React, { useEffect } from "react";
import useBiometricoStore from "@/store/biometricoStore";
import { parseISO, format } from 'date-fns';

function AsistenciaBio() {
  const { biometricData: { attendances }, getZKTecoAttendances, loading, errors } = useBiometricoStore((state) => ({
    biometricData: state.biometricData,
    getZKTecoAttendances: state.getZKTecoAttendances,
    loading: state.loading,
    errors: state.errors,
  }));

  useEffect(() => {
    getZKTecoAttendances();
  }, [getZKTecoAttendances]);

  if (loading) return <div>Loading...</div>;
  if (errors) return <div>Error: {errors}</div>;
  console.log(attendances);


  return (

    <div>
      <ul>
        {Array.isArray(attendances) && attendances.map((attendance) => {
          const userSN = attendance.userSn;
          const deviceUserId = attendance.deviceUserId;
          const recordTime = attendance.recordTime;
          const ip = attendance.ip;

          return (
            <div key={userSN} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center mb-4 bg-slate-200 p-4 rounded-xl">
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">userSN</h5>
                <span className="text-gray-700 text-sm">{`${userSN}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">deviceUserId</h5>
                <span className="text-gray-700 text-sm">{`${deviceUserId}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">recordTime</h5>
                <span className="text-gray-700 text-sm">{`${recordTime}`}</span>
              </div>
              <div>
                <h5 className="md:hidden text-gray-700 font-bold mb-2">ip</h5>
                <span className="text-gray-700 text-sm">{`${ip}`}</span>
              </div>

            </div>
          );
        })}
      </ul>
    </div>
  );

}
export default AsistenciaBio
