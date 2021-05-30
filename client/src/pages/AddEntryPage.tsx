import React from 'react';

import AddEntry from '../components/AddEntry';
import SideBar from '../components/SideBar';

export default AddEntryPage;

function AddEntryPage({store}:any) {
    return (
        <div>
            <SideBar />
            <AddEntry store={store} />
        </div>
    )
}