import './App.css';

const Commit = (props) => {
    return props.isLoading === true ? (
<p>loading</p>
    ) : (
    <div>
        <p>{props.name}</p>
        <p>{props.message}</p>
        <p>{props.date}</p>
    </div>
    )}
export default Commit;
