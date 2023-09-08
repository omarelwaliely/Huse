import { Navigate, redirect } from 'react-router-dom'
function Home(props) {
    console.log(props.name)
    return (
        <Navigate to="/login" />
    );
}
export default Home