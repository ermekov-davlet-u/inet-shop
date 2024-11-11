
import RecomendCard from './../elements/RecomendCard';


function Recomends() {
    return ( 
        <div className="recomends flex w-[calc(100vw-0px)] overflow-auto mt-6">
            <div className="recomends_swipe flex gap-6">
                <RecomendCard />
                <RecomendCard />
                <RecomendCard />
            </div>
        </div>
     );
}

export default Recomends;