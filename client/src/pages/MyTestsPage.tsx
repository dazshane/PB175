import SideBar from '../components/SideBar';
import MyTests from '../components/MyTests';

export default MyTestsPage;

function MyTestsPage({store}:any) {
    return (
        <div>
            <SideBar />
            <MyTests store={store} />
        </div>
    )
}