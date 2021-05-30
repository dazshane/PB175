import SideBar from '../components/SideBar';
import Tests from '../components/Tests';

export default TestsPage;

function TestsPage({store}:any) {
    return (
        <div>
            <SideBar />
            <Tests store={store} />
        </div>
    )
}