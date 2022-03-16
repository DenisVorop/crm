import PatientFilter from './PatientFilter/PatientFilter';
import AllRecords from './PatientRecord/AllRecords';

//========================================================================================================================================================

const MainPage = () => {
    return (
        <div className="main__container" style={{background: '#F3F7F9', paddingBottom: '22px'}}>
            <PatientFilter />
            <AllRecords />
        </div>
    )
}

export default MainPage;
