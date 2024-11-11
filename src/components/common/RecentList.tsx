import Recent from "../elements/Recent";


function RecentList() {
    return ( 
        <>
            <div className="recent-list flex flex-col gap-5">
                <div className="recent-list_title text-[14px] p-[18px] text-[#1E1E1E]">
                    Недавно смотрели
                </div>
                <div className="recent-list_slide w-full overflow-auto">
                    <div className="recent-list_swipe grid grid-flow-col auto-cols-[78vw] gap-4">
                        <Recent/>
                        <Recent/>
                        <Recent/>
                        <Recent/>
                        <Recent/>
                    </div>
                </div>
            </div>
        </>
     );
}

export default RecentList;