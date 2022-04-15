import React from 'react';

import Filter from './Filter/Filter';
import Plan from '../../Common/Plan/Plan';

const Page = ({ getReception }) => {
    return (
        <>
            <Plan label='План амбулаторного приема'/>
            <Filter
                getReception={getReception}
            />
        </>
    )
}

export default Page;
