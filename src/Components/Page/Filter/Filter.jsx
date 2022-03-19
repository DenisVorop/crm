import Head from "../Head/Head";
import Patients from "../Patients/Patients";
import Records from "../Records/Records";

import './filter.scss';

const Filter = () => {
    return (
        <div className="filter">
            <div className="filter__container">
                <Head />
                <Patients />
                <Records />
            </div>
        </div>
    )
}

export default Filter;
