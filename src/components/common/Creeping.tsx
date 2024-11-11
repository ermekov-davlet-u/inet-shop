import CreepingButton from "../elements/CreepingButton";


function Creeping() {
    return ( 
        <>
            <div className="creeping overflow-auto max-w-[100%]">
                <div className="creeping_swiper flex">
                    <CreepingButton/>
                    <CreepingButton/>
                    <CreepingButton/>
                    <CreepingButton/>
                    <CreepingButton/>
                </div>
            </div>
        </>
     );
}

export default Creeping;