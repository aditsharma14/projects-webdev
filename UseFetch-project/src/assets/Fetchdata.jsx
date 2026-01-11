import useFetch from "./usefetch";
import "./style.css";
const FetchData=()=>{
    const data = useFetch("https://api.npoint.io/9045c260b1565daa9e15");
    console.log(data);
    return(
        <>
            <h1 className="useFetch_Heading">Sample of useFetch Custom Hook</h1>
            <ul className="List_data_main">
                {data && data.map((e,index)=>(
                    <li key={index} className="usefetch_listitem">
                        {e.image ? (
                            <div className="card-media" aria-hidden={false}>
                                <img
                                    src={e.image}
                                    alt={e.name || 'image'}
                                    loading="lazy"
                                    onError={(ev) => { ev.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                        ) : (
                            <div className="card-media empty-media">No image</div>
                        )}

                        <h3>{e.name}</h3>
                        <p><strong>Importance:</strong>{e.importance}</p>
                        <p><strong>Benefits:</strong>{e.benefits}</p>
                        <p><strong>Time to Eat:</strong>{e.best_time_to_intake}</p>
                    </li>
                ))}
            </ul>

        </>
    )
}
export default FetchData;